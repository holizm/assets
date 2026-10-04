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
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='assetCategory'
        property='assetCategory'
        required
    />
    <Text
        placeholder='serialNumber'
        property='serialNumber'
    />
    <DateTime
        placeholder='acquisitionDate'
        property='acquisitionDate'
    />
    <Numeric
        placeholder='acquisitionCost'
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
        placeholder='state'
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
        placeholder='physicalCondition'
        property='assetCondition'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
