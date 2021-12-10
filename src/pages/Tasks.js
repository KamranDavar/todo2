import {Breadcrumb, Button, Col, Divider, List, Row, Tag, Typography} from 'antd';
import {Link} from 'react-router-dom';
import {CheckOutlined, HomeOutlined, PlusOutlined} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTasks} from '../redux/actions/task';
import {useMediaQuery} from 'react-responsive';
import {ModalForm} from '../components/crud';

export function Tasks() {
    const [visible, setVisible] = useState()
    const [id, setId] = useState()
    const isMobile = useMediaQuery({query: '(max-width: 576px)'})
    const dispatch = useDispatch()
    const {data, loading} = useSelector(state => state.task.getList)
    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const renderBreadcrumb = () => {
        return !isMobile ? <Col xs={24}> <Breadcrumb>
            <Breadcrumb.Item>
                <Link to={'/'}><HomeOutlined/></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span>tasks</span>
            </Breadcrumb.Item>
        </Breadcrumb><Divider/> </Col> : null
    }


    return (<Row className='tasks'>
            {renderBreadcrumb()}
            <div className='title-row'>
                <Typography.Title level={3}>Tasks</Typography.Title>
                <Button
                    onClick={() => setVisible(true)}
                    type='primary'> <PlusOutlined/>Create new</Button>

            </div>
            <Col xs={24}>
                <List
                    itemLayout="horizontal"
                    loading={loading}
                    dataSource={data}
                    renderItem={item => (
                        <div key={item.id}>
                            <List.Item

                                actions={
                                    [<Button
                                        onClick={() => {
                                            setVisible(true);
                                            setId(item.id)
                                        }}
                                    >edit</Button>,
                                        <Link to={`view/${item.id}`}>view</Link>,
                                        item.flag ? <CheckOutlined/> : null
                                    ]
                                }
                            >
                                <List.Item.Meta
                                    title={item.title}
                                    description={<>
                                        <Row className='mb10'> it is an absolute controlled component and has no
                                            uncontrolled mode
                                        </Row>
                                        <Row>
                                            {item.tags.map((item) =>
                                                <Tag>{item}</Tag>)}
                                        </Row>
                                    </>}
                                />

                            </List.Item>
                        </div>
                    )}

                />
            </Col>
            <ModalForm
                visible={visible}
                id={id}
                methods={{setVisible, setId}}
            />
        </Row>
    )
        ;
}