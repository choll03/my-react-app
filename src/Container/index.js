import React , { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import ChatComponent from '../Components/ChatComponent';
// import io from 'socket.io-client';
import { USER_CONNECTED, VERIFY_USER } from '../Events';
import { rootRef } from '../Firebase';
import { connect } from 'react-redux';
import { getMessage, countMessage, readingMessage, SendingMessage } from '../Actions/chatAction';

const socketUrl = "http://localhost:3231"

function Loading() {
  return (
      <div style={{position:"fixed",top:"50%",left:"50%"}}>
        <i className="fa fa-refresh fa-spin fa-3x fa-fw loading"/>
        <span className="sr-only">Loading...</span>
      </div>
    )
}

const LoadHomeComponent = Loadable({
  loader: () => import('../Components/HomeComponent'),
  loading : Loading,

});


const LoadPortfolioComponent = Loadable({
  loader: () => import('../Components/PortfolioComponent'),
  loading : Loading,

});

const LoadCvComponent = Loadable({
  loader: () => import('../Components/CvComponent'),
  loading : Loading,

});


class Container extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      id : 'GkbpfPynZiTDejdxAAAB',
	      socket: null,
	      messages : [],
	    }
	    this.sendMessage = this.sendMessage.bind(this);
	    this.handleOpenChat = this.handleOpenChat.bind(this);
	    this.closeChat = this.closeChat.bind(this);
	}

	componentWillMount() {
	   this.initSocket()
	 }

	 initSocket = () => {
	    // const socket = io(socketUrl)
	    // this.setState({socket})
	    // socket.on('connect', ()=>{
	    	// this.setState({id: socket.id});
	    	this.props.getMessage("GkbpfPynZiTDejdxAAAB")
	    	this.props.countMessage("GkbpfPynZiTDejdxAAAB","other")
	    // 	const databaseRef = rootRef.ref().child('chat').child("GkbpfPynZiTDejdxAAAB");
	    // 	databaseRef.on('value', snapshot => {
			  //     let msg = [];
			  //     snapshot.forEach(childSnapshot => {
			  //       msg.push(childSnapshot.val());
			  //     })
			  //     this.setState({messages: msg});
			  // })
	    	// socket.emit(USER_CONNECTED, socket.id)
	    	
	    // })


	 }

	//  setUser = (user)=>{
	// 	const { socket } = this.state
	// 	console.log(user)
	// 	socket.emit(USER_CONNECTED, user);
	// 	this.setState({user})
	// }

	componentDidMount() {
		// this.props.countMessage("GkbpfPynZiTDejdxAAAB")
		// rootRef.ref('messages').orderByChild("to").equalTo(this.state.id).on('value', snapshot => {
	 //      let msg = [];
	 //      snapshot.forEach(childSnapshot => {
	 //        msg.push(childSnapshot.val())
	 //      })

	      // this.setState({id: "rw"})
	 //    })
	}

	sendMessage() {
		const message = this.child.method();
		if(message != ""){
			this.props.SendingMessage(this.state.id, message);
		}
	    
	}

	handleOpenChat() {
		if(this.props.countUnRead > 0) {
			this.props.readingMessage(this.state.id);
		}
		
		this.child.handleOpenChat();
	}

	closeChat() {

		if(this.props.countUnRead > 0) {
			this.props.readingMessage(this.state.id);
		}
		this.child.closeChat();
	}

	render () {
		return (
			<div>
			<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white d-flex portfolio-navbar gradient">
	          <div className="container"><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
	              <div className="collapse navbar-collapse" id="navbarNav">
	                  <ul className="nav navbar-nav mx-auto">
	                  	<li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/"><i className="fa fa-home"></i>Home</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link className="nav-link" to="/cv">CV</Link>
                        </li>
	                  </ul>
	              </div>
	          </div>
	      </nav>
	      <ChatComponent 
	      	handleOpenChat={this.handleOpenChat}
	      	closeChat={this.closeChat}
	      	unRead={this.props.countUnRead} 
	      	loading={this.props.loadingMessage} 
	      	sendMessage={this.sendMessage} 
	      	onRef={ref => (this.child = ref)} 
	      	messages={this.props.messages} 
	      />
	      <Switch>
	        <Route exact path="/home" component={LoadHomeComponent} />
	      	<Route exact path="/portfolio" component={LoadPortfolioComponent} />
	        <Route exact path="/cv" component={LoadCvComponent} />
	        <Redirect from="/" to="/home" />
	      </Switch>
	      </div>
		)
	}
}

const mapStateToProps = state => {
	return{
		messages:state.chat.message,
		loadingMessage:state.loading.loadingMessage,
		countUnRead:state.chat.count,
	}
}

export default connect(mapStateToProps,{ getMessage, countMessage, readingMessage, SendingMessage })(Container) ;
