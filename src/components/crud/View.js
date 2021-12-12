import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getTask} from '../../redux/actions/task';
import {Divider, Spin, Tag, Typography} from 'antd';
import moment from 'moment';
import {CheckCircleTwoTone} from '@ant-design/icons';


export function View() {
    const dispatch = useDispatch()
    const {data, loading} = useSelector(state => state.task.getSingle)
    const {id} = useParams()


    useEffect(() => {
        dispatch(getTask(id))
    }, [])
    console.log('data', data)
    return (<div className='paper mdContainer'>
            {loading ? <Spin/> :
                <>
                    <Typography.Title level={3}>
                        {data.title}
                        {data.flag ? <CheckCircleTwoTone twoToneColor="#52c41a" className='ml10'
                                                         style={{fontSize: '1.5rem'}}/> : null}
                    </Typography.Title>
                    <Typography className='mb20'>{data.desc}</Typography>
                    <Typography>{moment(data.createdAt).format('MMMM Do YYYY, h:mm')}
                        <Divider type='vertical'/>
                        {data.tags?.map((item) => <Tag>{item}</Tag>)}
                    </Typography>
                </>}
        </div>
    );
}