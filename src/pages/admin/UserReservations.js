import { Table, Tag, Space, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';


const UserReservations = () => {

    const columns = [
        {
            title: 'Hotel',
            dataIndex: 'hotel',
            key: 'hotel',
            render: (text, record) => <Link to={"/admin/hotels/"+record.key}>{text}</Link>,
        },
        {
            title: 'Begin Date',
            dataIndex: 'begindate',
            key: 'begindate'
        },
        {
            title: 'End Date',
            dataIndex: 'enddate',
            key: 'enddate'
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
            key: 'action',
            render: (text, record) => (
            
            <Space className=''>
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
            hotel: 'John Brown',
            begindate: '23/02/2021',
            enddate: '24/02/2021',
            adults: '3',
            childrenm: '1',
            price: '150€'
        },
        {
            key: '2',
            hotel: 'Jim Green',
            begindate: '23/02/2021',
            enddate: '24/02/2021',
            adults: '3',
            childrenm: '1',
            price: '150€'
        },
        {
            key: '3',
            hotel: 'Joe Black',
            begindate: '23/02/2021',
            enddate: '24/02/2021',
            adults: '3',
            childrenm: '1',
            price: '150€'
        },
    ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to="/admin/users/1" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                        Back to User
                    </Link>
                    <Table columns={columns} dataSource={data} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default UserReservations;