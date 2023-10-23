// @import "../../../assets/styles/mixin.styles";
// @import "../../../assets/styles/variables.styles";

// .form_container {
//   @include form_container;

//   .form_wrapper {
//     @include form_wrapper;

//     form.signup {
//       justify-content: center;
//       gap: 20px;
//       width: 100%;
//       display: flex;
//       flex-direction: column;


//       .p-5 {
//         padding: 5%;
//       }

//       .button_group {
//         margin-top: 25px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         row-gap: 24px;

//         @include breakpoint(xs) {
//           height: auto;
//           display: flex;
//           flex-direction: column;
//           row-gap: 10px;
//         }
//       }
//     }

//     .form_col {
//       @include form_col;
//       width: 100%;

//       h2.form_title {
//         @include form_title;

//       }

//       .form_subtitle {

//         @include breakpoint(xs) {
//           @include font-styles($accent_font_xs);
//         }

//         @include breakpoint(sm) {
//           @include font-styles($accent_font_sm);
//         }

//         @include breakpoint(md) {
//           @include font-styles($accent_font_md);
//         }

//         @include breakpoint(lg) {
//           @include font-styles($accent_font_lg);
//         }

//         @include breakpoint(xl) {
//           @include font-styles($accent_font_xl);
//           text-transform: capitalize;
//         }

//         @include breakpoint(xll) {
//           @include font-styles($accent_font_xll);
//         }

//         @include breakpoint(xl) {}
//       }
//     }
//   }
// }

import styled from "styled-components"

export const Container = styled.div`
    padding: 5%;
  height: auto;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10% 35%;

  @media only screen and (max-width:767px){
    width: 100%;
    padding: 5% 5%;
  }

  @media only screen and (max-width:767px){
    width: 100%;
    padding: 5% 5%;
  }
  @media only screen and (min-width: 767.98px) and (max-width: 1024px) {
    width: 100%;
    padding: 10% 25%;
  }

`

export const Form = styled.form`
  justify-content: center;
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #F5F7F8;
  padding: 5% 10%;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;


`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;

`
