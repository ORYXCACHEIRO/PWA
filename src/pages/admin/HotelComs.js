import { Table, Space, Popconfirm } from 'antd';
import { FaPlus } from 'react-icons/fa';
import AddComodity from '../../components/Hotel/admin/AddComodity';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const HotelComs = () => {

    const [showForm, setShowForm] = useState(false);
    var location = useLocation().pathname;
    const [loading, setLoading] = useState(true);
    const { hotelid } = useParams();

    const [data, setData] = useState({
        comodidades: [],
        pagination: {
            current: 1,
            pageSize: 4,
            total: 0
        }
    });

    const fetchAPI = (pageSize, current) => {

        const url = `/hotel/${hotelid}/comodities/table?` + new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });
    
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {comodidades = [], pagination } = response;
            setLoading(false);
            setData({
                comodidades,
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
            comodidades: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });
  
    }, []);

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    function handleDelete(idcom){

        fetch(`/hotel/${hotelid}/comodities/${idcom}`, {
            headers: {'Content-type': 'application/json'},
            method: 'PUT'
        })
        .then(r => {
            if(r.ok){
                notificationSucess("Comodity removed Successfully");
                fetchAPI(data.pagination.pageSize, data.pagination.current);
            } else {
                notificationError("Error removing comodity");
            }
        }).catch((err) => {
            notificationError("Error removing comodity");
        });
    }

    const onClickShowForm = () => {
        setShowForm(!showForm);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Type',
            dataIndex: 'free',
            key: 'free',
            render: record => {
                switch(record){
                    case 0:
                        return (<div className=''>Extra</div>)
                    case 1:
                        return (<div className=''>Free</div>)
                    default:
                        break;
                }
            }
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

    const {comodidades, pagination } = data;

    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <button onClick={onClickShowForm} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Add Comodity
                            <FaPlus/>
                        </button>
                        <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Back to Hotel
                        </Link>
                    </div>
                    {showForm && <AddComodity fetchCom={fetchAPI} dataa={data} hotelid={hotelid}/>}
                    <Table columns={columns} rowKey={record => record._id} dataSource={comodidades} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default HotelComs;