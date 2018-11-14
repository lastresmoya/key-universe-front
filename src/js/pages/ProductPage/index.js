import React from 'react';
import { Link } from 'react-router-dom';
import { productInfoService } from '../../services';

import thumbLg from './assets/thumb-lg.png';
import thumby1 from './assets/thumb-sm-1.png';
import thumby2 from './assets/thumb-sm-2.png';
import thumby3 from './assets/thumb-sm-3.png';
import thumby4 from './assets/thumb-sm-4.png';
import thumby5 from './assets/thumb-sm-5.png';

import UserAvatar from '../../components/Avatars/UserAvatar';
import Breadcrumbs from '../../components/Navigation/Breadcrumbs';
import Badges from '../../components/Badges';
import SellersList from '../../components/SellersList';
import Counter from '../../components/Counter';
import ProductFeatures from './ProductFeatures';
import ProductDetails from './ProductDetails';
import SystemRequirements from './SystemRequirements';


class ProductPage extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            productData: null
        };
        this.getProductData = this.getProductData.bind(this);
    }

    getProductData(id) {
        productInfoService.getProduct(id)
            .then(res => {
			    this.setState({ productData: res.data})
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentWillMount() {
       this.getProductData(3);
    }
    
    render() {
        const product = this.state.productData;
        return (
            <div className="product-page">
                {product &&
                    <div className="container">
                        <Link to={'/'} >
                            <Breadcrumbs content="Go back to the main page" />
                        </Link>
                        <div className="row">
                            <div className="col-sm-5">
                                <img src={product.images[0]} className="img-fluid shadow-lg mb-4" alt="" data-aos="fade" />
                                <div className="d-flex justify-content-between align-items-center">
                                    {product.images.map((image, i) => {
                                        return (
                                            <img src={image} alt="" className="clickable" key={i} />
                                        );
                                    })}
                                    {/* TODO: Remove this */}
                                    <img src={thumby1} alt="" className="clickable" />
                                    <img src={thumby2} alt="" className="clickable" />
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h1>{ product.title }</h1>
                                        <small className="font-weight-light"><i>Windows International Release</i></small>
                                        <div className="py-2">
                                            <UserAvatar />
                                        </div>
                                        <Badges size="sm" />
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="h1">€{product.main_price}</p>
                                        <small>Includes donation for developers studio <strong>€3.00</strong></small>
                                        <div className="mb-3 mt-4">
                                            <span className="font-weight-bold">AVAILABLE KEYS</span>
                                            <Counter />
                                            <button data-aos="fade" className="mt-4 btn btn-block btn-primary btn-gradient font-spacing btn-lg"><small>ADD TO CART</small></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <p className="lead">DESCRIPTION</p>
                                        <p>{product.description_long}</p>
                                        <a className="btn-link" href="">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-5">
                                <ProductFeatures />
                                <ProductDetails details={product} />
                                <SystemRequirements requirements={product} />
                            </div>
                            <div className="col-sm-7">
                                <h4 className="font-spacing font-weight-normal">CURRENT SELLERS</h4>
                                <p>Look who sells <strong>The Witcher3: Wild Hunt</strong> now</p>
                                <SellersList />
                            </div>
                        </div>
                    </div>
                }                
        </div >
        )
    }
}

export default ProductPage