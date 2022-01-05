import { Table, Popconfirm, Space } from 'antd';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const HotelReviews = () => {

    const columns = [
        { 
            title: 'Name', 
            dataIndex: 'name', 
            key: 'name' 
        },
        { 
            title: 'Rate', 
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
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record) => (
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
          key: 1,
          name: 'John Brown',
          rate: 3,
          description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
          key: 2,
          name: 'Jim Green',
          rate: 4,
          description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
          key: 3,
          name: 'Not Expandable',
          rate: 2,
          description: 'This not expandable',
        },
        {
          key: 4,
          name: 'Joe Black',
          rate: 3,
          description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
      ];

    return(
        <>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to="/admin/hotels/1" className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                        Back to Hotel
                    </Link>
                    <Table  columns={columns} dataSource={data} expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>
                    }} className='border-2 p-1 mt-5'/>
                </div>
            </div>
        </>
    )
}

export default HotelReviews;