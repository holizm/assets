import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='assetsCode'
        property='code'
        required
    />
    <Text
        placeholder='assetsAssetCategory'
        property='assetCategory'
        required
    />
    <Text
        placeholder='assetsSerialNumber'
        property='serialNumber'
    />
    <DateTime
        placeholder='assetsAcquisitionDate'
        property='acquisitionDate'
    />
    <Numeric
        placeholder='assetsAcquisitionCost'
        property='acquisitionCost'
    />
    <Select
        options={[
            'planned',
            'active',
            'inactive',
            'underMaintenance',
            'disposed',
            'lost',
        ]}
        placeholder='assetsStatus'
        property='assetStatus'
        required
    />
    <Select
        options={[
            'new',
            'good',
            'fair',
            'poor',
            'damaged',
        ]}
        placeholder='assetsCondition'
        property='assetCondition'
        required
    />
    <LongText
        placeholder='assetsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
