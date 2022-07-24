import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import classes from "./RightSideBar.module.css";
import { bloodTypeOne, bloodTypeTwo, bloodTypeThree, bloodTypeFour } from "./otAllowedProducts";

const date = moment(Date.now()).format("DD.MM.YYYY");

class SideBar extends Component {
  state = {
    data: null,
    kcalLeft: "",
    kcalConsumed: "",
    dailyRate: 0,
    percentsOfDailyRate: "",
    eatenProducts: [],
    bloodTypes: 0,
  };
  componentDidMount() {
    this.information(this.props.date);
    this.bloodType(this.props.date);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newDailyRate !== this.props.newDailyRate) {
      this.information(this.props.date);
      this.bloodType(this.props.date);
    }
    if (prevProps.products !== this.props.products) {
      this.information(this.props.date);
      this.bloodType(this.props.date);
    }
  }
  bloodType = (userData) => {
    axios.defaults.baseURL = "https://slimmom-backend.goit.global";
    axios.get("/user", { userData }).then((response) => {
      if (response.data.userData.notAllowedProducts !== false) {
        this.setState({
          notAllowedProducts: response.data.userData.notAllowedProducts,
          bloodTypes: response.data.userData.bloodType,
        });
      }
    });
  };

  information = (date) => {
    axios.defaults.baseURL = "https://slimmom-backend.goit.global";
    axios.post("/day/info", { date }).then((response) => {
      if (response.data.daySummary) {
        this.setState({
          eatenProducts: response.data.eatenProducts,
          data: response.data.daySummary.date,
          kcalLeft: response.data.daySummary.kcalLeft === 0 ? "0" : Math.round(response.data.daySummary.kcalLeft),
          kcalConsumed:
            response.data.daySummary.kcalConsumed === 0 ? "0" : Math.round(response.data.daySummary.kcalConsumed),
          dailyRate: response.data.daySummary.dailyRate === 0 ? "0" : Math.round(response.data.daySummary.dailyRate),
          percentsOfDailyRate:
            response.data.daySummary.percentsOfDailyRate === 0
              ? "0"
              : Math.round(response.data.daySummary.percentsOfDailyRate),
        });
      } else {
        this.setState({
          eatenProducts: response.data.eatenProducts,
          data: response.data.date,
          kcalLeft: response.data.kcalLeft === 0 ? "0" : Math.round(response.data.kcalLeft),
          kcalConsumed: response.data.kcalConsumed === 0 ? "0" : Math.round(response.data.kcalConsumed),
          dailyRate: response.data.dailyRate === 0 ? "0" : Math.round(response.data.dailyRate),
          percentsOfDailyRate:
            response.data.percentsOfDailyRate === 0 ? "0" : Math.round(response.data.percentsOfDailyRate),
        });
      }
    });
  };
  notAllowed() {
    switch (this.state.bloodTypes) {
      case 1:
        return bloodTypeOne.map((e) => (bloodTypeOne.length !== bloodTypeOne.indexOf(e) + 1 ? ` ${e},` : ` ${e}.`));

      case 2:
        return bloodTypeTwo.map((e) => (bloodTypeTwo.length !== bloodTypeTwo.indexOf(e) + 1 ? ` ${e},` : ` ${e}.`));

      case 3:
        return bloodTypeThree.map((e) =>
          bloodTypeThree.length !== bloodTypeThree.indexOf(e) + 1 ? ` ${e},` : ` ${e}.`
        );

      case 4:
        return bloodTypeFour.map((e) => (bloodTypeFour.length !== bloodTypeFour.indexOf(e) + 1 ? ` ${e},` : ` ${e}.`));

      default:
        return "Здесь будет отображаться Ваш рацион";
    }
  }

  render() {
    const { data, kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = this.state;
    const dateNow = moment(data).format("DD.MM.YYYY");
    return (
      <div className={classes.container}>
        <div className={classes.summary}>
          <h2 className={classes.title}>Сводка за {data === null ? date : dateNow}</h2>
          <div className={classes.statistics}>
            <ul className={classes.listName}>
              <li className={classes.text}>Осталось</li>
              <li className={classes.text}>Употреблено</li>
              <li className={classes.text}>Дневная норма</li>
              <li className={classes.text}>n% от нормы</li>
            </ul>
            <ul className={classes.list}>
              <li className={classes.text}>{dailyRate ? `${kcalLeft} ккал` : ` 0 ккал`}</li>
              <li className={classes.text}>{dailyRate ? `${kcalConsumed} ккал` : `0 ккал`}</li>
              <li className={classes.text}>{dailyRate ? `${dailyRate} ккал` : `0 ккал`}</li>
              <li className={classes.text}>
                {dailyRate ? `${percentsOfDailyRate}` : `0`} <span className={classes.percent}>% </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.meny}>
          <h2 className={classes.title}>Нерекомендуемые продукты</h2>
          <div className={classes.products}>
            <p className={classes.defaultText}>{this.notAllowed()}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
  newDailyRate: state.dailyRate.dailyRate,
  products: state,
});

export default connect(mapStateToProps)(SideBar);
