import ContentLoader from "react-content-loader";

const ProductCardSkeleton = () => (
    <ContentLoader
        speed={2}
        width={350}
        height={400}
        viewBox="0 0 350 400"
        backgroundColor="#c2c2c2"
        foregroundColor="#a29a9a"
        style={{ width: '100%' }}
    >
        <rect x="0" y="0" rx="10" ry="10" width="350" height="400" />
    </ContentLoader>
)

export default ProductCardSkeleton;