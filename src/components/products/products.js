import Card from "../card/card";

function Products (){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const productsList = numbers.map(number => 
        <div className="col mb-5">
    <Card />                   
                </div>
        ) 
    return(
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {productsList}

            </div>
        </div>
    </section>
    )
}
export default Products;