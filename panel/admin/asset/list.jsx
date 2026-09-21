import {
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>coreAsset</th>
    <th>assetsCode</th>
    <th>coreSerialNumber</th>
    <th>corePhysicalCondition</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.serialNumber}</td>
    <td>{item.assetCondition}</td>
    <td>{item.assetStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
