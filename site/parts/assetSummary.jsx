export default ({ asset }) => <dl class='summary'>
    <dt class='title'>{asset?.title}</dt>
    <dd class='code'>{asset?.code}</dd>
    <dd class='condition'>{asset?.assetCondition}</dd>
    <dd class='status'>{asset?.assetStatus}</dd>
</dl>
