import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '租户id',
    dataIndex: 'tenantId',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '身份证号',
    dataIndex: 'identityNumber',
  },
  {
    title: '身份证生效日期',
    dataIndex: 'effectiveDate',
  },
  {
    title: '身份证失效日期',
    dataIndex: 'expiraDate',
  },
  {
    title: '电话号码',
    dataIndex: 'phoneNumber',
  },
  {
    title: '房间ID',
    dataIndex: 'roomId',
  },
  {
    title: '房屋ID',
    dataIndex: 'buildingId',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '0表示未删除,1表示删除',
    dataIndex: 'delFlag',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '租户id',
    field: 'tenantId',
    component: 'Input',
  },
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  { label: '', field: 'id', component: 'Input', show: false },
  {
    label: '租户id',
    field: 'tenantId',
    component: 'Input',
  },
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'gender',
    component: 'InputNumber',
  },
  {
    label: '出生日期',
    field: 'birthday',
    component: 'DatePicker',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '身份证号',
    field: 'identityNumber',
    component: 'Input',
  },
  {
    label: '身份证生效日期',
    field: 'effectiveDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '身份证失效日期',
    field: 'expiraDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '电话号码',
    field: 'phoneNumber',
    component: 'Input',
  },
  {
    label: '房间ID',
    field: 'roomId',
    component: 'Input',
  },
  {
    label: '房屋ID',
    field: 'buildingId',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '0表示未删除,1表示删除',
    field: 'delFlag',
    component: 'InputNumber',
  },
];
