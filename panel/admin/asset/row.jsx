import { TaxonomyCategoryProperty } from 'taxonomy'

export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <TaxonomyCategoryProperty />
    <td>{item.serialNumber}</td>
    <td>{item.assetCondition}</td>
</>
