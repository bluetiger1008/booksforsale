import styled from 'styled-components'

const BookSalesWrapper = styled.div`
  .ant-layout-content {
    background-color: white;
    padding: 70px 0;
    .booksales-header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      h3 {
        color: #075CCA;
        font-size: 28px;
        line-height: 33px;
        margin-bottom: 0;
        margin-right: 30px;
      }
    }
    .sale-box {
      margin: 30px 0;
      box-shadow: 0 2px 4px 0 rgba(121,135,154,0.26);
      border-radius: 3px;
      overflow: hidden;
      .sale-header {
        background-color: #2382FC;
        position: relative;
        padding: 18px;
        .miles {
          color: #8FD1FF;
        }
        .summaries {
          display: flex;
          p {
            color: white;
          }
          .summary {
            color: white;
            display: flex;
            width: 30%;
            span {
              line-height: 30px;
              margin-right: 12px;
              font-size: 25px;
            }
          }
        }
        .actions {
          position: absolute;
          right: 18px;
          top: 18px;
          a {
            margin: 0 4px;
            color: #8FD1FF;
          }
        }
      }
    }
    .sale-content {
      padding: 18px;
      .main-content {
        position: relative;
        margin-bottom: 20px;
        ul {
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          height: 105px;
          margin: 0;
          align-content: flex-start;
          flex-direction: column;
          li {
            width: 30%;
            p {
              margin: 0;
              line-height: 35px;
              .icon {
                color: #00fd00;
              }
            }
          }
        }
        a.show-more {
          position: absolute;
          right: 0px;
          bottom: 0px;
        }
      }
    }
    .ant-tabs-nav-container {
      line-height: 1;
    }
    
    .ant-tabs-nav .ant-tabs-tab {
      margin: 0;
      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }
    }
    
    .ant-tabs-nav .ant-tabs-tab-active {
      color: white;
      font-weight: 500;
      background: #1890ff;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      &:hover {
        color: white !important;
      }
    }
  }
`

export default BookSalesWrapper