import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const HotelRooms = () => {

    const location = useLocation().pathname;

    const columns = [
        { 
            title: 'Name', 
            dataIndex: 'name', 
            key: 'name' 
        },
        {
            title: 'Adults',
            dataIndex: 'adults',
            key: 'adults'
        },
        {
            title: 'Children',
            dataIndex: 'childrenm',
            key: 'childrenm'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record) => (
              <Space className='sm:flex sm:flex-col sm:items-center '>
                    <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                        <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
                    </Popconfirm>
                    <Link to={location+"/"+record.key} className='bg-gray-800 p-2 rounded-xl text-white font-medium'>
                        Edit
                    </Link>
              </Space>
          )
        }
    ];
    

    const data = [
        {
            key: '1',
            name: 'John Brown',
            adults: '3',
            childrenm: '1',
            price: '150€',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
        {
            key: '2',
            name: 'Jim Green',
            adults: '3',
            childrenm: '1',
            price: '150€',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
        {
            key: '3',
            name: 'Joe Black',
            adults: '3',
            childrenm: '1',
            price: '150€',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
    ];

    return(
        <>
            <div className="h-full relative">
                
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <Link to="/admin/hotels/1" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                            Back to Hotel
                        </Link>
                        <Link to="/admin/hotels/1/rooms/create" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center gap-2'>
                            Create Room
                            <FaPlus/>
                        </Link>
                    </div>
                    
                    <Table  columns={columns} dataSource={data} expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>
                    }} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default HotelRooms;