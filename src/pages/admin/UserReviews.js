import { Table, Space, Popconfirm } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import notificationSucess from '../../components/Notifications/Success';
import { ToastContainer } from 'react-toastify';
import notificationError from '../../components/Notifications/Error';

const UserReviews = () => {

  var location = useLocation().pathname;
  const { userid } = useParams();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
        avaliacoes: [],
        pagination: {
            current: 1,
            pageSize: 4,
            total: 0
        }
  });

  const fetchAPI = (pageSize, current) => {

    const url = `/users/reviews/${userid}?`+ new URLSearchParams({
        limit:pageSize,
        skip: current-1
    });

    fetch(url, {
        headers: {'Accept': 'application/json'}
    })
    .then((response) => response.json())
    .then((response) => {
        const {avaliacoes = [], pagination } = response;
        setLoading(false);
        setData({
            avaliacoes,
            pagination: {
                current: pagination.page + 1 || 1,
                pageSize: pagination.pageSize || 1,
                total: pagination.total || 5
            }
        });
    });
  }

  function handleDelete(id){

    fetch(`/users/reviews/${id}`, {
        headers: {'Content-type': 'application/json'},
        method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => {
        notificationSucess("Review deleted Successfully");
        fetchAPI(data.pagination.pageSize, data.pagination.current);
    }).catch((err) => {
        notificationError("Error deleting review");
    });
  }


  useEffect(() => {

      fetchAPI(data.pagination.pageSize, data.pagination.current);

      return () => setData({
          avaliacoes: [],
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
    key: 'id_hotel' ,
    render: id => <Link to={"/admin/hotels/"+id}>Hotel</Link>
  },
  { 
    title: 'Rate', 
    dataIndex: 'review', 
    key: 'review' ,
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
    title: 'Data', 
    dataIndex: 'review_date', 
    key: 'review_date' 
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (record) => (
        <Space className='sm:flex sm:flex-col sm:items-center '>
            <Popconfirm size="middle"  title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
                <button className='bg-red-500 p-2 rounded-xl text-white font-medium'>Delete</button>
            </Popconfirm>
        </Space>
      )
    }
  ];


  const {avaliacoes, pagination } = data;

    return(
        <>
            <ToastContainer/>
            <div className="h-full relative">
                <div className=' absolute top-1/4 left-2/4 translate-x-[-50%] translate-y-[-25%]  w-full px-10 sm:px-0'>
                    <Link to={(location + "/..")} className='bg-gray-800 p-3 text-white rounded-lg text-lg sm:ml-2'>
                        Back to User
                    </Link>
                    <Table  columns={columns} rowKey={record => record._id} dataSource={avaliacoes} pagination={pagination} loading={loading} onChange={handleTableChange} className='border-2 p-1 mt-5' expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.coment}</p>
                    }} />
                </div>
            </div>
        </>
    )

}

export default UserReviews;