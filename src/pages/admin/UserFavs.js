import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const UserFavs = () => {

    var location = useLocation().pathname;
    const { userid } = useParams();
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

        const url = `/users/favs/${userid}?`+ new URLSearchParams({
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

    function handleDelete(idhotel){

        const hotel = {
            id_hotel: idhotel
        }

        fetch(`/users/favs/${userid}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE',
            body: JSON.stringify(hotel)
        })
        .then(r => {
            if(r.ok){
                notificationSucess("Favorite hotel deleted Successfully");
                fetchAPI(data.pagination.pageSize, data.pagination.current);
            } else {
                notificationError("Error deleting favorite");
            }
        }).catch((err) => {
            notificationError("Error deleting favorite");
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

    const columns = [
        {
            title: 'Hotel',
            dataIndex: 'id_hotel',
            key: 'id_hotel',
            render: (text, record) => <Link to={"/admin/hotels/"+record._id} className=''>{record.name}</Link>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            
            <Space className=''>
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
                    <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Back to User
                    </Link>
                    <Table columns={columns} rowKey={record => record._id} dataSource={hotels} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default UserFavs;