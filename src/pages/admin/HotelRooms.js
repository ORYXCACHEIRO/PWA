import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const HotelRooms = () => {

    var location = useLocation().pathname;
    const [loading, setLoading] = useState(true);
    const { hotelid } = useParams();

    const [data, setData] = useState({
        rooms: [],
        pagination: {
            current: 1,
            pageSize: 4,
            total: 0
        }
    });

    if(location.substring(location.length-1, location.length)==="/"){
        location = location.slice(0, -1);
    }

    const fetchAPI = (pageSize, current) => {

        var url = `/hotel/${hotelid}/rooms/table?`+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });
    
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {rooms = [], pagination } = response;
            setLoading(false);
            setData({
                rooms,
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
            rooms: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });
  
    }, []);

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    function handleDelete(idroom){

        fetch(`/hotel/${hotelid}/rooms/${idroom}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE'
        })
        .then(r => {
            if(r.ok){
                notificationSucess("Room deleted Successfully");
                fetchAPI(data.pagination.pageSize, data.pagination.current);
            } else {
                notificationError("Error deleting room");
            }
        }).catch((err) => {
            notificationError("Error deleting room");
        });
    }

    const columns = [
        { 
            title: 'Name', 
            dataIndex: 'name', 
            key: 'name' 
        },
        {
            title: 'Adults',
            dataIndex: 'maxAdult',
            key: 'maxAdult'
        },
        {
            title: 'Children',
            dataIndex: 'maxChildren',
            key: 'maxChildren'
        },
        {
            title: 'Price',
            dataIndex: 'price_per_night',
            key: 'price_per_night'
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record) => (
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

    const {rooms, pagination } = data;


    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                            Back to Hotel
                        </Link>
                        <Link to={(location + "/create")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center gap-2'>
                            Create Room
                            <FaPlus/>
                        </Link>
                    </div>
                    <Table  columns={columns} rowKey={record => record._id} dataSource={rooms} pagination={pagination} loading={loading} onChange={handleTableChange} expandable={{
                    expandedRowRender: record => <p style={{ margin: 1 }}><span className='font-bold'>Description:</span> {record.descrption}</p>
                    }} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default HotelRooms;