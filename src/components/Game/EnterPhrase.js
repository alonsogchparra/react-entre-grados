import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';
import logo from '../../media/images/entregrados_logo.png';
import './Style.css';

class EnterPhrase extends Component {

  state = {
    isPhraseValid: false
  }

  componentDidMount() {
    const { answer } = this.props;

    if (answer.length === 0
      || answer === ''
      || answer === undefined
      || answer === null) {
      this.setState({
        isPhraseValid: false
      });
    }
  }

  checkWordsHandler = (str) => {
    const re = new RegExp(/^[^-\s][ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/);

    if (re.test(str)) {
      this.props.onAddPhrase(str);
      this.setState({ isPhraseValid: true });
    } else {
      this.setState({ isPhraseValid: false });
    }
  }

  onSubmitHandler = () => {
    return (this.state.isPhraseValid && document.forms['game']['word'].value !== '')
    ? this.props.history.push('/game') : false;
  }


  render () {

    const { isPhraseValid } = this.state;

    return (
      <div>
        <form className="game_form" name="game" onSubmit={() => this.onSubmitHandler()}>
          <div className="flex_custom">
            <div className="flex_logo">
              <img src={logo} alt="entregrados" className="logo" />
            </div>
            <label className="label_custom">Escribe la palabra o frase para empezar el juego manao</label>
            <input
              type="text"
              className="input_game"
              placeholder="Escribe Aqui..."
              name="word"
              onChange={(e) => this.checkWordsHandler(e.target.value)}
            />
            <label className="label_custom label_error">{ isPhraseValid ? '' : 'Usa solo letras para la palabra o frase que vayas a crear'}</label>
            <button
              type="submit"
              className={`btn_start_game ${isPhraseValid ? '' : 'btn_disable'}`}
            >
              Start Game
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  answer: state.game.answer,
  answerCopy: state.game.answerCopy
});

const mapDispatchToProps = (dispatch) => ({
  onAddPhrase: (str) => dispatch(actions.addPhrase(str))
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterPhrase)