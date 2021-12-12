import {Checkbox, DatePicker, Form, Input, Modal, Select, Spin} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {createTask, editTask, getTask} from '../../redux/actions/task';
import moment from 'moment';


export function ModalForm({visible, id, methods}) {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const {data, loading} = useSelector(state => state.task.getSingle)
    const {loading: postLoading} = useSelector(state => state.task.post)
    const {loading: patchLoading} = useSelector(state => state.task.patch)


    useEffect(() => {// for get form data
        if (!!id) {
            dispatch(getTask(id))
        }
    }, [id])
    useEffect(() => {// for open create form without data
        form.resetFields();
        console.log("form.resetFields()", form.getFieldsValue())
    }, [visible])

    useEffect(() => {//// for reInitial form
        if (id) {
            form.setFieldsValue({
                ...data,
                createdAt: moment(data.createdAt)
            })
        }
    }, [data])

    const title = id ? "Update Task" : "Add a new Task"
    const buttonLabel = id ? "Update" : "Create"
    const buttonLoading = id ? patchLoading : postLoading

    const onFinish = (data) => {
        data.createdAt = data.createdAt.format('DD.MM.YYYY HH:mm')
        id ? dispatch(editTask(data, id)) : dispatch(createTask(data));
    }

    console.log('visible', visible)
    return (<>
            <Modal
                visible={visible}
                title={title}
                okText={buttonLoading ? <Spin/> : buttonLabel}
                cancelText="Cancel"
                onCancel={() => {
                    methods.setVisible(false);
                    methods.setId(null)
                }}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onFinish(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                {loading ? <Spin/> : <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={id ?
                        {
                            ...data,
                            createdAt: moment(data.createdAt)
                        }
                        : {}}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title of task!',
                            },
                            {
                                min: 5,
                                message: 'description should be more than 5 char!',
                            },
                            {
                                max: 20,
                                message: 'description should be less than 25 char!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item name="desc" label="Description"
                               rules={[
                                   {
                                       max: 1024,
                                       message: 'description should be less than 1024 char!',
                                   },
                               ]}
                    >
                        <Input.TextArea type="textarea"/>
                    </Form.Item>
                    <Form.Item name='tags' label="Tags">
                        <Select
                            mode="tags"
                            dropdownStyle={{height: "0", padding: "0"}}
                            placeholder="type a tag, press enter and type another one"
                        />
                    </Form.Item>
                    <Form.Item name='createdAt' label="Create Date">
                        <DatePicker showTime={{format: 'HH:mm'}} format="YYYY-MM-DD HH:mm"/>
                    </Form.Item>
                    <Form.Item name="flag" label="Done">
                        <Checkbox defaultChecked={data.flag}/>
                    </Form.Item>
                </Form>}

            </Modal>
        </>
    );
}