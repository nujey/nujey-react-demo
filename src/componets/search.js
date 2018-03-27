import React from 'react'

/**
 * 先来定义一个静态的搜索框
 * @class SearchBar
 * @extends {React.Component}
 */
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this)
  }
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value)
  }
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked)
  }
  render() {
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               onChange={this.handleFilterTextInputChange}
               value={this.props.filterText}/>
        <div>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockInputChange}/>
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
      if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return
      }
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
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleInStockInput = this.handleInStockInput.bind(this)
  }
  handleFilterTextInput(filterText) {
    this.setState({
      filterText:filterText
    })
  }
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}
export default FilterableProductTable
