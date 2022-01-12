import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import CreateCom from '../../components/admin/AddButtons/AddCom';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer} from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const Comodities = () => {

    const location = useLocation().pathname;
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState({
        coms: [],
        pagination: {
            current: 1,
            pageSize: 5,
            total: 0
        }
    });

    const onClickShowForm = () => {
        setShowForm(!showForm);
    }

    const handleTableChange = (pagination) => {
        fetchAPI(pagination.pageSize, pagination.current)
    };

    const fetchAPI = (pageSize, current) => {

        const url = '/comodities/table?'+ new URLSearchParams({
            limit:pageSize,
            skip: current-1
        });

        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then((response) => response.json())
        .then((response) => {
            const {coms = [], pagination } = response;

            setLoading(false);
            setData({
                coms,
                pagination: {
                    current: pagination.page + 1 || 1,
                    pageSize: pagination.pageSize || 1,
                    total: pagination.total || 5
                }
            });
        });

    }

    function handleDelete(id){
        fetch(`/comodities/${id}`, {
            headers: {'Content-type': 'application/json'},
            method: 'DELETE'
        })
        .then((response) => {
            notificationSucess("Comodity deleted Successfully");
            fetchAPI(data.pagination.pageSize, data.pagination.current);
        }).catch((err) => {
            notificationError("Error deleting comodity");
        });
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
                <Link to={location+"/"+record._id} className='bg-gray-800 p-2 rounded-xl text-white font-medium'>
                    Edit
                </Link>
            </Space>
            )
        }
    ];

    useEffect(() => {

        fetchAPI(data.pagination.pageSize, data.pagination.current);

        return () => setData({
            coms: [],
            pagination: {
                current: 1,
                pageSize: 10
            }
        });

    }, []);

    const {coms, pagination } = data;

    return(
        <>  
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <button onClick={onClickShowForm} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Create Comodity
                        <FaPlus/>
                    </button>
                    {showForm && <CreateCom fetchLanguages={fetchAPI} dataa={data}/>}
                    <Table columns={columns} className='border-2 p-1 mt-5' rowKey={record => record._id} dataSource={coms} pagination={pagination} loading={loading} onChange={handleTableChange}/>
                </div>
            </div>
        </>
    )

}

export default Comodities;