import { Table, Space, Popconfirm } from 'antd';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddPicRoom from '../../components/Hotel/admin/AddPicRoom';

const RoomsGallery = () => {

    const [showForm, setShowForm] = useState(false);

    const onClickShowForm = () => {
        setShowForm(!showForm);
    }

    const columns = [
        {
            title: 'Picture',
            dataIndex: 'pic',
            key: 'pic'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            
            <Space className='sm:flex sm:flex-col sm:items-center '>
                <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
                </Popconfirm>
            </Space>
            )
        }
    ];

    const data = [
        {
            key: '1',
            pic: 'John Brown'
        },
        {
            key: '2',
            pic: 'Jim Green'
        },
        {
            key: '3',
            pic: 'Joe Black'
        }
    ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <button onClick={onClickShowForm} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Add Picture
                            <FaPlus/>
                        </button>
                        <Link to="/admin/hotels/1/rooms/1" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Back to Room
                        </Link>
                    </div>
                    {showForm && <AddPicRoom/>}
                    <Table columns={columns} dataSource={data} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default RoomsGallery;