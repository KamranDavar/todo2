import {Checkbox, Form, Input, Modal, Select, Spin} from 'antd';
import {useMediaQuery} from 'react-responsive';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {createTask, editTask, getTask} from '../../redux/actions/task';


export function ModalForm({visible, id, methods}) {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const {data, loading} = useSelector(state => state.task.getSingle)


    useEffect(() => {// for get form data
        if (!!id) {
            dispatch(getTask(id))
        }
    }, [id])
    useEffect(() => {// for open create form without data
        if (id === null) {
            form.resetFields();
        }
    }, [visible])

    useEffect(() => {//// for reInitial form
        if (id) {
            form.setFieldsValue(data)
        }
    }, [data])

    const title = id ? "Update Task" : "Add a new Task"
    const buttonLabel = id ? "Update" : "Create"

    const onFinish = (data) => {
        id ? dispatch(editTask(data, id)) : dispatch(createTask(data));
    }

    console.log('visible', visible)
    console.log('id', id)
    return (<>
            <Modal
                visible={visible}
                title={title}
                okText={buttonLabel}
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
                    initialValues={id ? data : {}}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title of collection!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input.TextArea type="textarea"/>
                    </Form.Item>
                    <Form.Item name='tags' label="Tags">
                        <Select
                            mode="tags"
                            dropdownStyle={{height: "0", padding: "0"}}
                            placeholder="type a tag, press enter and type another one"
                        />
                    </Form.Item>
                    <Form.Item name="flag" label="Done">
                        <Checkbox defaultChecked={data.flag} />
                    </Form.Item>
                </Form>}

            </Modal>
        </>
    );
}