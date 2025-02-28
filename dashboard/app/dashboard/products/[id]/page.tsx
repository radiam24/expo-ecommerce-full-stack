import { fetchProductById } from '@/api/products'
import ProductListItem from '../ProductListItem'

export default async function ProductPage(props: {
    params: Promise<{ id: string }>
}) {
    const params = await props.params

    const { id } = params

    const product = await fetchProductById(Number(id))

    return (
        <div className="max-w-screen-xl mx-auto w-full">
            <ProductListItem product={product} />
        </div>
    )
}
