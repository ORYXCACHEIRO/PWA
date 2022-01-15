import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const Hotels = ({role}) => {

    var location = useLocation().pathname;
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

        var url = `/hotel/workstations?`+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });

        if(role===2){
            url = `/hotel?`+ new URLSearchParams({
                limit:pageSize,
                skip: current-1
            });
        } 
    
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

    function handleDelete(idhotel){

        fetch(`/hotel/${idhotel}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE'
        })
        .then(r => {
            if(r.ok){
                notificationSucess("Hotel deleted Successfully");
                fetchAPI(data.pagination.pageSize, data.pagination.current);
            } else {
                notificationError("Error deleting hotel");
            }
        }).catch((err) => {
            notificationError("Error deleting hotel");
        });
    }
    
    const columns = [
    {
        title: 'Hotel',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (<Link to={location+"/"+record._id}>{text}</Link>),
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
        title: 'State',
        key: 'state',
        dataIndex: 'state',
        render: state => {
            switch (state) {
                case 0:
                    return (<div className='w-max p-2 rounded-lg bg-red-400 text-white'>Not Visible</div>)
                case 1:
                    return (<div className='w-max p-2 rounded-lg bg-green-400 text-white'>Visible </div>)
                default:
                    return (<div className='w-max p-2 rounded-lg bg-red-400 text-white'>Not Visible</div>)
            }
        },
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        
        <Space className='sm:flex sm:flex-col sm:items-center '>
            {role===2 && <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>}
            
            {
            role===2 
            ?
            <Link  to={location+"/"+record._id} className='bg-gray-800 p-2 rounded-xl text-white font-medium'>
                Edit
            </Link> 
            : 
            <Link  to={location+"hotels/"+record._id} className='bg-gray-800 p-2 rounded-xl text-white font-medium px-5'>
                Edit
            </Link> 
            }
            
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
                    {role===2 && <Link to="/admin/hotels/create" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Create Hotel
                        <FaPlus/>
                    </Link>}
                    
                    <Table columns={columns} rowKey={record => record._id} dataSource={hotels} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default Hotels;