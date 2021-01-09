import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
<<<<<<< HEAD
                <button type="button" class="button2" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button class="button button2" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button class="button button2" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button class="button button2" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button class="button button2" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button class="button button2" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button class="button button2" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button class="button button2" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button class="button button2" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button class="button button2" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button class="button button2" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button class="button button2" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button class="button button2" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button class="button button2" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button class="button button2" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button class="button button2" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button class="button button2" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button class="button button2" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button class="button button2" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button class="button button2" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
=======
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
>>>>>>> 9c8f1aa4b4beaf507872a1d1e93bb3da46858f4e
            </div>
        );
    }
}


export default KeyPadComponent;