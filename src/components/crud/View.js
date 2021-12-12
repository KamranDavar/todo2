import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getTask} from '../../redux/actions/task';
import {Breadcrumb, Col, Divider, Spin, Tag, Typography} from 'antd';
import moment from 'moment';
import {CheckCircleTwoTone, HomeOutlined} from '@ant-design/icons';
import {useMediaQuery} from 'react-responsive';


export function View() {
    const dispatch = useDispatch()
    const {data, loading} = useSelector(state => state.task.getSingle)
    const {id} = useParams()
    const isMobile = useMediaQuery({query: '(max-width: 576px)'})


    useEffect(() => {
        dispatch(getTask(id))
    }, [])

    const renderBreadcrumb = () => {
        return !isMobile ? <Col xs={24}> <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={'/'}><HomeOutlined/></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to={'/tasks'}><span>tasks</span></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span>{data.title}</span>
            </Breadcrumb.Item>
        </Breadcrumb><Divider/> </Col> : null
    }

    return (<div className='paper mdContainer'>
            {loading ? <Spin/> :
                <>
                    {renderBreadcrumb()}
                    <Typography.Title level={3}>
                        {data.title}
                        {data.flag ? <CheckCircleTwoTone twoToneColor="#52c41a" className='ml10'
                                                         style={{fontSize: '1.5rem'}}/> : null}
                    </Typography.Title>
                    <Typography className='mb20'>{data.desc}</Typography>
                    <Typography>{data.createdAt && moment(data.createdAt).format('MMMM Do YYYY, h:mm')}
                        <Divider type='vertical'/>
                        {data.tags?.map((item) => <Tag>{item}</Tag>)}
                    </Typography>
                </>}
        </div>
    );
}