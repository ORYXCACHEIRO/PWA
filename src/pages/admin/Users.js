import { Table, Tag, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

const Users = () => {

    const location = useLocation().pathname;
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        users: [],
        pagination: {
            current: 1,
            pageSize: 3,
            total: 0
        }
    });

    const fetchAPI = (pageSize, current) => {

        const url = '/users?'+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });

        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {users = [], pagination } = response;

            setLoading(false);
            setData({
                users,
                pagination: {
                    current: 1,
                    pageSize: pagination.pageSize || 1,
                    total: pagination.total || 5
                }
            });
        });

    }

    useEffect(() => {

        fetchAPI(data.pagination.pageSize, data.pagination.current);

        return () => setData({
            users: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });

    }, []);

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };
    
    function handleDelete(id){
        fetch(`/users/${id}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE'
        })
        .then(r => r.json())
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err);
        });
    }

    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={location+"/"+record._id}>{text}</Link>,
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        
        <Space className='sm:flex sm:flex-col sm:items-center '>
            <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>
            <Link to={location+"/"+record._id} className='bg-gray-800 p-2 rounded-xl text-white font-medium'>
                Edit
            </Link>
        </Space>
        )
    }
    ];

    const {users, pagination } = data;

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Table columns={columns} className='border-2 p-1' rowKey={record => record._id} dataSource={[...users]} pagination={pagination} loading={loading} onChange={handleTableChange}/>
                </div>
            </div>
        </>
    )

}

export default Users;