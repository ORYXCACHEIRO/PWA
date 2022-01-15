import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const RoomsReservations = () => {

    var location = useLocation().pathname;
    const { hotelid, roomid } = useParams();
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        reservs: [],
        pagination: {
            current: 1,
            pageSize: 4,
            total: 0
        }
    });

    const fetchAPI = (pageSize, current) => {

        const url = `/hotel/${hotelid}/rooms/${roomid}/reservations?`+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });
    
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            
            const {reservs = [], pagination } = response;
            setLoading(false);
            setData({
                reservs,
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
            reservs: [],
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
        key: 'numberAdults',
        render: (text, record) => text,
    },
    {
        title: 'Children',
        dataIndex: 'numberChildren',
        key: 'numberChildren',
        render: (text, record) => text,
    },
    {
        title: 'Total',
        dataIndex: 'total_price',
        key: 'total_price',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        
        <Space className='sm:flex sm:flex-col sm:items-center '>
            <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => this.handleDelete(record._id)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>
        </Space>
        )
    }
    ];

    const {reservs, pagination } = data;

    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Back to Room
                        </Link>
                    </div>
                    <Table columns={columns} rowKey={record => record._id} dataSource={reservs} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default RoomsReservations;