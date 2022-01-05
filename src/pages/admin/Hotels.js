import { Table, Tag, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FaPlus } from 'react-icons/fa';

const Hotels = () => {

    const location = useLocation().pathname;

    const columns = [
    {
        title: 'Hotel',
        dataIndex: 'hotel',
        key: 'hotel',
        render: (text, record) => (<Link to={location+"/edit/"+record.key}>{text}</Link>),
    },
    {
        title: 'Rating',
        dataIndex: 'rate',
        key: 'rate',
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
            <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>
            <Link to={location+"/edit/"+record.key} className='bg-gray-800 p-2 rounded-xl text-white font-medium'>
                Edit
            </Link>
        </Space>
        )
    }
    ];

    const data = [
    {
        key: '1',
        hotel: 'John Brown',
        rate: 0,
        city: 'New York',
        state: 0,
    },
    {
        key: '2',
        hotel: 'Jim Green',
        rate: 1,
        city: 'London',
        state: 1,
    },
    {
        key: '3',
        hotel: 'Joe Black',
        rate: 2,
        city: 'Sidney',
        state: 1,
    },
    ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to="/admin/hotel/create" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Create Hotel
                        <FaPlus/>
                    </Link>
                    <Table columns={columns} dataSource={data} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default Hotels;