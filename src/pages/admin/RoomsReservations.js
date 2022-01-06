import { Table, Space, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

const RoomsReservations = () => {

    const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => text,
    },
    {
        title: 'Room',
        dataIndex: 'room',
        key: 'room',
        render: (text, record) => text,
    },
    {
        title: 'Begin Date',
        dataIndex: 'begindate',
        key: 'begindate',
        render: (text, record) => text,
    },
    {
        title: 'End Date',
        dataIndex: 'enddate',
        key: 'enddate',
        render: (text, record) => text,
    },
    {
        title: 'Adults',
        dataIndex: 'adults',
        key: 'adults',
    },
    {
        title: 'Children',
        dataIndex: 'children',
        key: 'children',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
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
        name: 'John Brown',
        room: 'AAAAAAAA',
        begindate: '20/02/2002',
        enddate: '27/02/2002',
        adults: 3,
        children: 0,
        price: '140€'
    },
    {
        key: '2',
        name: 'Jim Green',
        room: 'AAAAAAAA',
        begindate: '20/02/2002',
        enddate: '27/02/2002',
        adults: 4,
        children: 0,
        price: '140€'
    },
    {
        key: '3',
        name: 'Joe Black',
        room: 'AAAAAAAA',
        begindate: '20/02/2002',
        enddate: '27/02/2002',
        adults: 3,
        children: 0,
        price: '140€'
    },
    ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <div className='flex gap-4'>
                        <Link to="/admin/hotels/1/rooms/1" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                            Back to Room
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default RoomsReservations;