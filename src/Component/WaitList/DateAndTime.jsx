import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "swiper/css";

function DateAndTime({ setGoSteps }) {
  const [date, setDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [dates, setDates] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const today = new Date();
  const currentDate = new Date();
  console.log(date);

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  today.setDate(today.getDate() - 1);

  useEffect(() => {
    const generateDateList = () => {
      const today = new Date();
      const twoYearsLater = new Date(today);
      twoYearsLater.setFullYear(today.getFullYear() + 2);

      const dateList = [];
      let currentDate = new Date(today);

      while (currentDate <= twoYearsLater) {
        dateList.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setDates(dateList);

      setSelectedOption(dateList[0].toDateString());
    };

    generateDateList();
  }, []);

  const handleDateChange = (newDate) => {
    if (newDate > today) {
      setDate(newDate);
      setSelectedTime(""); // Reset selected time when a new date is chosen
    }
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedTime(""); // Reset selected time when a new date is chosen
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const getValidTimeOptions = () => {
    if (!selectedOption) return times;
    const now = new Date();
    const selectedDate = new Date(selectedOption);
    if (
      now.getDate() === selectedDate.getDate() &&
      now.getMonth() === selectedDate.getMonth() &&
      now.getFullYear() === selectedDate.getFullYear()
    ) {
      // The selected date is today, let's filter out times that are in the past
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      return times.filter((time) => {
        const [timeHours, timeMinutes] = time.split(":");
        return (
          parseInt(timeHours) > nowHours ||
          (parseInt(timeHours) === nowHours &&
            parseInt(timeMinutes) > nowMinutes)
        );
      });
    }
    return times;
  };

  const timeOptions = getValidTimeOptions();

  const formattedSelectedOption = new Date(selectedOption);
  const formattedDate = `${formattedSelectedOption.toLocaleDateString("en-US", {
    weekday: "long",
  })}, ${formattedSelectedOption.toLocaleDateString("en-US", {
    month: "short",
  })} ${formattedSelectedOption.getDate()}`;

  return (
    <>
      <section className="">
        <div className="container mt-5 mb-100">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8 col-xl-9 col-12 py-5">
              <div className="custom-border p-5">
                <div className="row">
                  <div className="col-12 text-start">
                    <AiOutlineArrowLeft
                      onClick={() => setGoSteps(2)}
                      className="ms-2 gj-cursor-pointer back-btn"
                    ></AiOutlineArrowLeft>
                  </div>
                </div>
                <h2 className="pt-5 text-center pb-5 display-4 fw-bold ">
                  Reservation
                </h2>
                <div className="d-flex align-items-center justify-content-between data-and-btn">
                  <div className="calender__container">
                    <button
                      onClick={toggleCalendar}
                      className="calendar__button"
                    >
                      {month}, {year}
                      <span>
                        {calendarVisible ? <BsChevronUp /> : <BsChevronDown />}
                      </span>
                    </button>
                    {calendarVisible && (
                      <div className="calender__wrapper">
                        <Calendar
                          onChange={handleDateChange}
                          value={date}
                          minDate={today}
                        />
                      </div>
                    )}
                  </div>
                  <div className="d-flex position-relative gap-4 gj-cursor-pointer">
                    <AiOutlineArrowLeft className=" swiper-button-next"></AiOutlineArrowLeft>
                    <AiOutlineArrowRight className="swiper-button-prev"></AiOutlineArrowRight>
                  </div>
                </div>
                <div className="my-5">
                  <Swiper
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    slidesPerView={7}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      1024: {
                        slidesPerView: 7,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      320: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {dates.map((date, index) => {
                      let radioID = `date_radio_${index}`;
                      return (
                        <SwiperSlide key={index}>
                          <div className="slider__date">
                            <input
                              type="radio"
                              id={radioID}
                              name="date"
                              value={date.toDateString()}
                              defaultChecked={index === 0}
                              onChange={handleOptionChange}
                            />
                            <label
                              htmlFor={radioID}
                              className="d-flex flex-column align-items-center"
                            >
                              <span>
                                {date
                                  .toLocaleDateString("en-US", {
                                    weekday: "short",
                                  })
                                  .substring(0, 3)}
                              </span>
                              <span className="fs-3 fw-bold">
                                {date.toLocaleDateString("en-US", {
                                  day: "numeric",
                                })}
                              </span>
                              <span>
                                {date
                                  .toLocaleDateString("en-US", {
                                    month: "short",
                                  })
                                  .substring(0, 3)}
                              </span>
                            </label>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div>
                  <div>
                    <p className="fw-bold">{formattedDate}</p>
                  </div>
                  <div className="time__container">
                    {selectedOption &&
                      timeOptions.map((time, index) => {
                        let radioID = `time_radio_${index}`;
                        return (
                          <div className="time__wrapp" key={index}>
                            <input
                              type="radio"
                              id={radioID}
                              name="time"
                              value={time}
                              onChange={handleTimeChange}
                              checked={time === selectedTime}
                            />
                            <label htmlFor={radioID}>
                              <span>{time}</span>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div id="submit" className="mt-5 text-center">
                  <button
                    onClick={() => setGoSteps(4)}
                    className="btn btn--tra-black hover--black"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="d-deco"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DateAndTime;
