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
        code
        required
    />
    <Text
        assetCategory
        required
    />
    <Text serialNumber />
    <DateTime acquisitionDate />
    <Numeric acquisitionCost />
    <Select
        assetStatus
        options={[
            'planned',
            'active',
            'inactive',
            'underMaintenance',
            'disposed',
            'lost',
        ]}
        placeholder='state'
        required
    />
    <Select
        assetCondition
        options={[
            'new',
            'good',
            'fair',
            'poor',
            'damaged',
        ]}
        placeholder='physicalCondition'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
