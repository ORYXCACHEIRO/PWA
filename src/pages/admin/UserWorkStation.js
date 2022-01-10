import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddWorkHotel from '../../components/admin/AddButtons/AddWork';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const UserWorkStation = () => {

    var location = useLocation().pathname;
    const { userid } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        hotels: [],
        pagination: {
            current: 1,
            pageSize: 4,
            total: 0
        }
    });

    const fetchAPI = (pageSize, current) => {

        const url = `/users/workstation/${userid}?`+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });

        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {hotels = [], pagination } = response;

            setLoading(false);
            setData({
                hotels,
                pagination: {
                    current: pagination.page + 1 || 1,
                    pageSize: pagination.pageSize || 1,
                    total: pagination.total || 5
                }
            });
        });

    }

    function handleDelete(id){

        let hotelData = {};
        hotelData.hotel = id;

        fetch(`/users/workstation/${userid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE',
            body: JSON.stringify(hotelData)
        })
        .then(r => r.json())
        .then(() => {
            notificationSucess("User deleted Successfully");
            fetchAPI(data.pagination.pageSize, data.pagination.current);
        }).catch((err) => {
            notificationError("Error deleting user");
        });
    }

    
    useEffect(() => {

        fetchAPI(data.pagination.pageSize, data.pagination.current);

        return () => setData({
            hotels: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });

    }, []);

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    const onClickShowForm = () => {
        setShowForm(!showForm);
    }
    
    const columns = [
    {
        title: 'Hotel',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Rating',
        dataIndex: 'category',
        key: 'category',
        render: rate => {
            switch (rate) {
                case 0:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                case 1:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                case 2:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                case 3:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                case 4:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                case 5:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={rate} edit={false}/>)
                default:
                    return (<ReactStars count={5}  size={30} activeColor="#ffd700" value={0} edit={false}/>)
            }
        }
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        
        <Space className='sm:flex sm:flex-col sm:items-center '>
            <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>        
        </Space>
        )
    }
    ];

    const {hotels, pagination } = data;

    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-3 sm:ml-3'>
                        <button onClick={onClickShowForm} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Add Hotel
                            <FaPlus/>
                        </button>
                        <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Back to User
                        </Link>
                    </div>
                    
                    {showForm && <AddWorkHotel fetchHotels={fetchAPI} dataa={data} userid={userid}/>}
                    <Table columns={columns} className='border-2 p-1' rowKey={record => record._id} dataSource={hotels} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default UserWorkStation;