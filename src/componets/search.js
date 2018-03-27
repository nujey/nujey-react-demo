import React from 'react'

/**
 * 先来定义一个静态的搜索框
 * @class SearchBar
 * @extends {React.Component}
 */
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."/>
        <div>
          <input type="checkbox" />
          {' '}Only show products in stock
        </div>
      </form>
    )
  }
}
/**
 * 
 * 搜索的商品的列表的分类
 * @class ProductCategoryRow
 * @extends {React.Component}
 */
class ProductCategoryRow extends React.Component {
  render() {
    return(
      <tr><th colSpan="2">{this.props.category}</th></tr>
    )
  }
}
/**
 * author nujey
 * 根据列表商品的的stocked 来判断名字的颜色
 * @class ProductRow
 * @extends {React.Component}
 */
class ProductRow extends React.Component {
  render() {
    const name = this.props.product.stocked ? this.props.product.name :
          <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}
/**
 * author nujey
 * 商品列表的循环操作
 * @class ProductTable
 * @extends {React.Component}
 */
class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

/**
 * author nujey
 * 最终的组件
 * @class FilterableProductTable
 * @extends {React.Component}
 */
class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
export default FilterableProductTable
