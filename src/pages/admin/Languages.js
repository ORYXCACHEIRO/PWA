import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import CreateLang from '../../components/admin/AddButtons/AddLang';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer} from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const Languages = () => {

    const location = useLocation().pathname;

    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        langs: [],
        pagination: {
            current: 1,
            pageSize: 5,
            total: 0
        }
    });

    const fetchAPI = (pageSize, current) => {

        const url = '/languages?'+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });

        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {langs = [], pagination } = response;

            setLoading(false);
            setData({
                langs,
                pagination: {
                    current: pagination.page + 1 || 1,
                    pageSize: pagination.pageSize || 1,
                    total: pagination.total || 5
                }
            });
        });

    }

    const onClickShowForm = () => {
        setShowForm(!showForm);
    }

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    function handleDelete(id){
        fetch(`/languages/${id}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE'
        })
        .then((response) => {
            notificationSucess("Language deleted Successfully");
            fetchAPI(data.pagination.pageSize, data.pagination.current);
        }).catch((err) => {
            notificationError("Error deleting language");
        });
    }

    useEffect(() => {

        fetchAPI(data.pagination.pageSize, data.pagination.current);

        return () => setData({
            langs: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });

    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
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

    const {langs, pagination } = data;

    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <button onClick={onClickShowForm} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Create Language
                        <FaPlus/>
                    </button>
                    {showForm && <CreateLang fetchLanguages={fetchAPI} dataa={data}/>}
                    <Table columns={columns} className='border-2 p-1 mt-5' rowKey={record => record._id} dataSource={langs} pagination={pagination} loading={loading} onChange={handleTableChange}/>
                </div>
            </div>
        </>
    )

}

export default Languages;