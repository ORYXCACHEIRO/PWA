import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserReservations = () => {

    var location = useLocation().pathname;
    const { userid } = useParams();
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        reserv: [],
            pagination: {
                current: 1,
                pageSize: 4,
                total: 0
            }
    });

    const fetchAPI = (pageSize, current) => {

        const url = `/users/reservations/${userid}?`+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });
    
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {reserv = [], pagination } = response;
            setLoading(false);
            setData({
                reserv,
                pagination: {
                    current: pagination.page + 1 || 1,
                    pageSize: pagination.pageSize || 1,
                    total: pagination.total || 5
                }
            });
        });
    }

    useEffect(() => {

        fetchAPI(data.pagination.pageSize, data.pagination.current);
  
        return () => setData({
            reserv: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });
  
    }, []);

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    const columns = [
        {
            title: 'Begin Date',
            dataIndex: 'begin_date',
            key: 'begin_date',
            render: date => date.substring(0, 10)
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            render: date => date.substring(0, 10)
        },
        {
            title: 'Adults',
            dataIndex: 'numberAdults',
            key: 'numberAdults'
        },
        {
            title: 'Children',
            dataIndex: 'numberChildren',
            key: 'numberChildren'
        },
        {
            title: 'Price',
            dataIndex: 'total_price',
            key: 'total_price'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            
            <Space className=''>
                <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
                </Popconfirm>
            </Space>
            )
        }
    ];

    const {reserv, pagination } = data;

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                        Back to User
                    </Link>
                    <Table columns={columns} rowKey={record => record._id} dataSource={reserv} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default UserReservations;