



export default async function Page({params}:{params: any}) {

   const {product_id} = await params
    
  return (
    <div>{product_id}
    
    </div>
  )
}
