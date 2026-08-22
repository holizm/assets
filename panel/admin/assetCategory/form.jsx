import {
    DialogForm,
    LongText,
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
    <LongText
        placeholder='assetsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
