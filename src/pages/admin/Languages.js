import { Table, Tag, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Languages = () => {

    const location = useLocation().pathname;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (text),
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
            name: 'John Brown'
        },
        {
            key: '2',
            name: 'Jim Green'
        },
        {
            key: '3',
            name: 'Joe Black'
        }
    ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to="/admin/languages/create" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2 flex items-center w-max gap-2'>
                        Create Language
                        <FaPlus/>
                    </Link>
                    <Table columns={columns} dataSource={data} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )

}

export default Languages;