// import axios from "axios";
// import { authHeader, getError } from "../../helpers";

import {endpoints} from "./endpoints";

const testData = {
  "caseTypeID":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"createdBy":"ibelogolovy"
  ,"createTime":"2018-04-02T08:51:14.524Z"
  ,"ID":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"lastUpdateTime":"2020-03-25T12:43:42.037Z"
  ,"name":"Ипотека"
  ,"pxObjClass":"Pega-API-CaseManagement-Case"
  ,"stage":"RejectRequest"
  ,"status":"New"
  ,"urgency":"10"
  ,"assignments":[ 
  {
  "executedDeadlineTime":"2018-11-09T14:47:16.220Z"
  ,"executedGoalTime":"2018-11-09T10:47:07.158Z"
  ,"ID":"ASSIGN-WORKBASKET ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063!CLOSEREQUEST"
  ,"name":"Уведомление об отказе"
  ,"pxObjClass":"Pega-API-CaseManagement-Assignment"
  ,"routedTo":"users@mortgage"
  ,"scheduledDeadlineTime":"2018-11-09T14:46:52.000Z"
  ,"scheduledGoalTime":"2018-11-09T10:46:52.000Z"
  ,"type":"Assignment"
  ,"urgency":"35"
  ,"actions":[ 
  {
  "ID":"RejectNotification"
  ,"name":"Уведомление об отказе"
  ,"pxObjClass":"Pega-API-CaseManagement-Action"
  }
  ] 
  }
  ] 
  ,"content":{
  "AgreementUniqueID":"G050S18040200064"
  ,"ApplicationVersion":"Mortgage_Dev 01.02"
  ,"IsIndividualRequest":"false"
  ,"pxApplication":"Mortgage_Dev"
  ,"pxApplicationVersion":"01.02"
  ,"pxCommitDateTime":"2020-03-25T12:43:42.064Z"
  ,"pxCoveredCount":"0"
  ,"pxCoveredCountOpen":"0"
  ,"pxCoveredCountUnsatisfied":"0"
  ,"pxCreateDateTime":"2018-04-02T08:51:14.524Z"
  ,"pxCreateOperator":"ibelogolovy"
  ,"pxCreateOpName":"Ilya Belogolovy"
  ,"pxCreateSystemID":"pega"
  ,"pxCurrentStage":"RejectRequest"
  ,"pxCurrentStageLabel":"RejectRequest"
  ,"pxCurrentStageSubscript":"RejectRequest_2"
  ,"pxInsName":"M-3063"
  ,"pxLockHandle":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pxObjClass":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"pxSaveDateTime":"2020-03-25T12:43:42.037Z"
  ,"pxUpdateCounter":"13"
  ,"pxUpdateDateTime":"2020-03-25T12:43:42.037Z"
  ,"pxUpdateOpName":"Agent(System-Queue-ServiceLevel.ProcessEvent)"
  ,"pxUpdateSystemID":"pega"
  ,"pxUrgencyPartyTotal":"0"
  ,"pxUrgencyWork":"10"
  ,"pxUrgencyWorkClass":"10"
  ,"pyAgeFromDate":"2018-04-02T08:51:14.525Z"
  ,"pyCaseFilterDescription":"Current Assignments and Subcases"
  ,"pyChargeAmount":"0"
  ,"pyConfirmationNote":"pyStepRoutedConfirmation"
  ,"pyElapsedCustomerUnsatisfied":"0.0"
  ,"pyElapsedStatusNew":"0.0"
  ,"pyElapsedStatusOpen":"0"
  ,"pyElapsedStatusPending":"0"
  ,"pyFlowKey":"RULE-OBJ-FLOW ABR-FW-OPSFW-WORK-LOAN-MORTGAGE PYSTARTCASE #20170627T095510.707 GMT"
  ,"pyFlowName":"pyStartCase"
  ,"pyFolderType":"pyDefault"
  ,"pyHasAttachments":"true"
  ,"pyID":"M-3063"
  ,"pyLabel":"Ипотека"
  ,"pyLabelOld":"Ипотека"
  ,"pyNextEmailThreadID":"1"
  ,"pyNotifyQuickStream":"QuestionAboutItem"
  ,"pyOrigDivision":"Administration"
  ,"pyOrigOrg":"pega.com"
  ,"pyOrigOrgUnit":"Installation"
  ,"pyOrigUserDivision":"Administration"
  ,"pyOrigUserID":"ibelogolovy"
  ,"pyOrigUserWorkgroup":"experts@mortgage"
  ,"pyOwnerDivision":"Administration"
  ,"pyOwnerOrg":"pega.com"
  ,"pyOwnerOrgUnit":"Installation"
  ,"pyPushNotificationsEnabled":"false"
  ,"pySatisfactionChangeTimestamp":"2018-04-02T08:51:14.558Z"
  ,"pyShowCases":"true"
  ,"pyShowCompletedAssignments":"false"
  ,"pyShowOpenAssignments":"true"
  ,"pyStatusCustomerSat":"New"
  ,"pyStatusWork":"New"
  ,"pyStatusWorkOld":"New"
  ,"pyStatusWorkTimestamp":"2018-04-02T08:51:14.558Z"
  ,"pyTemporaryObject":"false"
  ,"pyWorkIDPrefix":"M-"
  ,"pyWorkPartiesRule":"pyCaseManagementDefault"
  ,"pzIndexCount":"87"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pzInsKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"RequestSource":"MbM"
  ,"RequestStatus":"2"
  ,"RequestUniqueID":"FFRMTG180402000017"
  ,"ScoringRequestDate":"180403"
  ,"ScoringRequestID":"414d512042524b3031202020202020205abe2d97245a6d52"
  ,"Seller":"1"
  ,"StatusClarification":"11"
  ,"TotalAmount":"28163264"
  ,"Agreements":[ 
  {
  "AgreementNumber":"G050S18040200064"
  ,"pxObjClass":"ABR-FW-Data-Agreement-Loan"
  ,"GuarantorAgreementList":[ 
  {
  "AgreementNumber":"G050S18040200064П1"
  ,"pxObjClass":"ABR-FW-Data-Agreement-Loan-Guarantor"
  ,"pyLabel":"Поручитель Леннон Д.  У. ,  SATISFACTORY"
  }
  ] 
  }
  ] 
  ,"Assets":[ ]
  ,"Checks":
  {
  "Scoring0Result":{
  "AreDocumentsCorrect":"false"
  ,"Confirmed":"false"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Check"
  ,"pxSubscript":"Scoring0Result"
  ,"ScoringResult":"CloseRequest"
  }
  }
  
  ,"Comments":{
  "pxObjClass":"Data-Comments"
  ,"Comment":[ ]
  }
  ,"CommentsGroup":
  {
  "CRD":{
  "pxObjClass":"Data-Comments"
  ,"pxSubscript":"CRD"
  ,"Comment":[ 
  {
  "pxCreateDateTime":"2018-11-08T11:46:51.690Z"
  ,"pxCreateOperator":"ibelogolovy"
  ,"pxObjClass":"Data-Comment"
  ,"pyNote":"выа"
  ,"pyStatusLabel":"New"
  }
  ] 
  }
  ,"RISK":{
  "pxObjClass":"Data-Comments"
  ,"pxSubscript":"RISK"
  ,"Comment":[ ]
  }
  ,"RISK2":{
  "pxObjClass":"Data-Comments"
  ,"pxSubscript":"RISK2"
  ,"Comment":[ ]
  }
  }
  
  ,"ComplianceDateValueList":[ 
  "2018-04-03"
  ] 
  ,"Counterparties":[ ]
  ,"IndividualConditionsList":[ ]
  ,"Insurances":[ ]
  ,"LastIndex":
  {
  "AC_Participant":"2"
  }
  
  ,"Participants":[ 
  {
  "BirthDate":"1942-06-18"
  ,"ChangedNameSurname":"false"
  ,"Citizenship":"RU"
  ,"ConsentID":"56744742"
  ,"DeclaredIncome":"60000"
  ,"Email":"heyjude@yandex.ru"
  ,"Gender":"M"
  ,"IsChanged":"false"
  ,"IsIncomeInDeal":"true"
  ,"IsResident":"false"
  ,"IsUSAResident":"false"
  ,"MarketingSegmentCode":"8"
  ,"MiddleName":"Джеймс"
  ,"Name":"Маккартни Пол Джеймс"
  ,"NoEmail":"false"
  ,"NoMiddleName":"false"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"PackageId":"M-3063_B_1"
  ,"PinEQ":"AODY9K"
  ,"ProfileCode":"STAFFCAT"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"1"
  ,"pyFirstName":"Пол"
  ,"pyFullName":"Маккартни Пол Джеймс"
  ,"pyID":"5828"
  ,"pyLabel":"Заемщик"
  ,"pyLastName":"Маккартни"
  ,"pySelected":"false"
  ,"pySummary":"Заемщик Маккартни П.  Д. ,  Staff"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"RoleName":"1"
  ,"SNILS":"192-168-000 62"
  ,"TIN":"438077199337"
  ,"UnknownTIN":"false"
  ,"YearChangingName":"2018"
  ,"Accounts":[ ]
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"OwnershipType":"1"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  ,"TypeObj":{
  "Code":"ADDR_MG_CONST"
  ,"IsLocked":"false"
  ,"pxObjClass":"ABR-FW-Data-Dict-AddressType"
  ,"pyLabel":"Адрес  регистрации"
  ,"pzInsKey":"ABR-FW-DATA-DICT-ADDRESSTYPE ADDR_MG_CONST"
  ,"SortOrder":"14"
  ,"SrcSysCode":"SOURCE_MG"
  }
  }
  ,{
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"OwnershipType":"1"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"false"
  ,"RegionCode":"Московская обл"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_FACT"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  ,"TypeObj":{
  "Code":"ADDR_MG_FACT"
  ,"IsLocked":"false"
  ,"pxObjClass":"ABR-FW-Data-Dict-AddressType"
  ,"pyLabel":"Адрес фактического проживания"
  ,"pzInsKey":"ABR-FW-DATA-DICT-ADDRESSTYPE ADDR_MG_FACT"
  ,"SortOrder":"15"
  ,"SrcSysCode":"SOURCE_MG"
  }
  }
  ] 
  ,"Cash":{
  "pxObjClass":"ABR-FW-Data-Asset-Cash"
  }
  ,"ComplianceCheck":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp"
  ,"Value":"3141 592653"
  ,"CheckList":[ 
  {
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N01"
  ,"pyNote":"Паспорт клиента РФ действителен"
  ,"Result":"Y"
  ,"Value":"PBS0005"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N02"
  ,"pyNote":"KSM0008  Error occurred while calling program PBC01N02R for option .."
  ,"Value":"KSM0008"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N03"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N04"
  ,"pyNote":"Соответствие не найдено в списке репутационных рисков"
  ,"Result":"Y"
  ,"Value":"PBS0020"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N05"
  ,"pyNote":"Соответствие не найдено в списке террористов\\экстремистов"
  ,"Result":"Y"
  ,"Value":"PBS0023"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N06"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ] 
  }
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ"
  ,"BirthPlace":"СССР"
  ,"DocNumber":"3141 592653"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  3141 592653 выдан 01.09.2017 ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2017-08-31T21:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"Docs":[ 
  {
  "Code":"OPD"
  ,"Form":"Оригинал"
  ,"Group":"MDT"
  ,"Name":"Согласие на обработку персональных данных"
  ,"pxObjClass":"ABR-FW-Data-Doc"
  ,"pyID":"106493"
  ,"pySelected":"true"
  }
  ] 
  ,"ExpensesPerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Expenses"
  }
  ,"ForeignDocList":[ ]
  ,"IncomeConfirmList":[ ]
  ,"IncomePerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Income"
  }
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"567 890-78-90"
  ,"ValueSearch":"5678907890"
  }
  ] 
  ,"pxFlow":
  {
  "IntegrationHandling":{
  "pxObjClass":"Embed-PegaEPRO-FlowPage"
  ,"pxSubscript":"IntegrationHandling"
  ,"pyFlowParameters":{
  "ErrorStatus":"Pending-Error"
  }
  }
  }
  
  ,"pyBooleanValue":[ 
  ""
  ] 
  ,"pzIndexes":
  {
  "ParticipantData":"78"
  }
  
  ,"Questionary":[ ]
  ,"ResidentInfo":[ ]
  ,"Scoring":{
  "DtlDeclineCode":"BR00102"
  ,"HUNTERChecks":"OTHER.CLEAR"
  ,"LimitCalculatedExpense":"0"
  ,"LimitCalculatedIncome":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Participant"
  ,"ScoringBKI":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"8"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"2"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  ,"ScoringKD":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"0"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  }
  ,"SimilarClients":[ 
  {
  "BirthDate":"1942-06-18"
  ,"ChangedNameSurname":"false"
  ,"Citizenship":"RU"
  ,"Email":"heyjude@yandex.ru"
  ,"Gender":"M"
  ,"IsResident":"false"
  ,"IsUSAResident":"false"
  ,"MiddleName":"Джеймс"
  ,"Name":"Маккартни Пол Джеймс"
  ,"NoEmail":"false"
  ,"NoMiddleName":"false"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Пол"
  ,"pyFullName":"Маккартни Пол Джеймс"
  ,"pyID":"5828"
  ,"pyLabel":"Заемщик"
  ,"pyLastName":"Маккартни"
  ,"pySelected":"false"
  ,"pySummary":"Заемщик Маккартни П.  Д. "
  ,"RoleName":"1"
  ,"SNILS":"192-168-000 62"
  ,"TIN":"438077199337"
  ,"UnknownTIN":"false"
  ,"YearChangingName":"2018"
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"OwnershipType":"1"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  ,"TypeObj":{
  "Code":"ADDR_MG_CONST"
  ,"IsLocked":"false"
  ,"pxObjClass":"ABR-FW-Data-Dict-AddressType"
  ,"pyLabel":"Адрес  регистрации"
  ,"pzInsKey":"ABR-FW-DATA-DICT-ADDRESSTYPE ADDR_MG_CONST"
  ,"SortOrder":"14"
  ,"SrcSysCode":"SOURCE_MG"
  }
  }
  ,{
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"OwnershipType":"1"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"false"
  ,"RegionCode":"Московская обл"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_FACT"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  ,"TypeObj":{
  "Code":"ADDR_MG_FACT"
  ,"IsLocked":"false"
  ,"pxObjClass":"ABR-FW-Data-Dict-AddressType"
  ,"pyLabel":"Адрес фактического проживания"
  ,"pzInsKey":"ABR-FW-DATA-DICT-ADDRESSTYPE ADDR_MG_FACT"
  ,"SortOrder":"15"
  ,"SrcSysCode":"SOURCE_MG"
  }
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ"
  ,"BirthPlace":"СССР"
  ,"DocNumber":"3141 592653"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  3141 592653 выдан 01.09.2017 ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2017-08-31T21:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"ForeignDocList":[ ]
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"567 890-78-90"
  ,"ValueSearch":"5678907890"
  }
  ] 
  }
  ,{
  "BirthDate":"1942-06-18"
  ,"Gender":"M"
  ,"MiddleName":"Джеймс"
  ,"Name":"Маккартни Пол Джеймс"
  ,"PinEQ":"AODY9K"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Пол"
  ,"pyFullName":"Маккартни Пол Джеймс"
  ,"pyLastName":"Маккартни"
  ,"pySelected":"true"
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ"
  ,"DocNumber":"31 41 592653"
  ,"DocTypeCode":"001"
  ,"FullDescription":" №  31 41 592653 выдан 01.09.2017 ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ "
  ,"IssueDate":"2017-09-01T00:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  }
  }
  ] 
  }
  ] 
  }
  ,{
  "AgreementNumber":"G050S18040200064П1"
  ,"BirthDate":"1940-10-09"
  ,"Citizenship":"RU"
  ,"ConsentID":"56744743"
  ,"Email":"Iamthewalrus@mail.ru"
  ,"Gender":"M"
  ,"IsChanged":"false"
  ,"MarketingSegmentCode":"1"
  ,"MiddleName":"Уинстон"
  ,"Name":"Леннон Джон Уинстон"
  ,"NoEmail":"false"
  ,"NoMiddleName":"false"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"PackageId":"M-3063_W_1"
  ,"PinEQ":"AODY9L"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"2"
  ,"pyFirstName":"Джон"
  ,"pyFullName":"Леннон Джон Уинстон"
  ,"pyID":"5829"
  ,"pyLabel":"Поручитель"
  ,"pyLastName":"Леннон"
  ,"pySelected":"false"
  ,"pySummary":"Поручитель Леннон Д.  У. ,  SATISFACTORY"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"RoleName":"2"
  ,"SNILS":"542-316-335 57"
  ,"TIN":"401360730407"
  ,"UnknownTIN":"false"
  ,"Accounts":[ ]
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ,{
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"false"
  ,"RegionCode":"Московская обл"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_FACT"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ] 
  ,"ComplianceCheck":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp"
  ,"Value":"2718 281821"
  ,"CheckList":[ 
  {
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N01"
  ,"pyNote":"Паспорт клиента РФ действителен"
  ,"Result":"Y"
  ,"Value":"PBS0005"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N02"
  ,"pyNote":"KSM0008  Error occurred while calling program PBC01N02R for option .."
  ,"Value":"KSM0008"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N03"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N04"
  ,"pyNote":"Соответствие не найдено в списке репутационных рисков"
  ,"Result":"Y"
  ,"Value":"PBS0020"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N05"
  ,"pyNote":"Соответствие не найдено в списке террористов\\экстремистов"
  ,"Result":"Y"
  ,"Value":"PBS0023"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N06"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ] 
  }
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Yellow Submarine"
  ,"DocNumber":"2718 281821"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  2718 281821 выдан 30.09.2015 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2015-09-30T04:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"Docs":[ 
  {
  "Code":"OPD"
  ,"Form":"Оригинал"
  ,"Group":"MDT"
  ,"Name":"Согласие на обработку персональных данных"
  ,"pxObjClass":"ABR-FW-Data-Doc"
  ,"pyID":"106493"
  ,"pySelected":"true"
  }
  ] 
  ,"ExpensesPerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Expenses"
  }
  ,"IncomePerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Income"
  }
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"481 516-23-42"
  ,"ValueSearch":"4815162342"
  }
  ] 
  ,"pxFlow":
  {
  "IntegrationHandling":{
  "pxObjClass":"Embed-PegaEPRO-FlowPage"
  ,"pxSubscript":"IntegrationHandling"
  ,"pyFlowParameters":{
  "ErrorStatus":"Pending-Error"
  }
  }
  }
  
  ,"pzIndexes":
  {
  "ParticipantData":"79"
  }
  
  ,"Scoring":{
  "HUNTERChecks":"OTHER.CLEAR"
  ,"LimitCalculatedExpense":"0"
  ,"LimitCalculatedIncome":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Participant"
  ,"ScoringBKI":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"8"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"2"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  ,"ScoringKD":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"0"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  }
  ,"SimilarClients":[ 
  {
  "BirthDate":"1940-10-09"
  ,"Citizenship":"RU"
  ,"Email":"Iamthewalrus@mail.ru"
  ,"Gender":"M"
  ,"MiddleName":"Уинстон"
  ,"Name":"Леннон Джон Уинстон"
  ,"NoEmail":"false"
  ,"NoMiddleName":"false"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Джон"
  ,"pyFullName":"Леннон Джон Уинстон"
  ,"pyID":"5829"
  ,"pyLabel":"Поручитель"
  ,"pyLastName":"Леннон"
  ,"pySelected":"false"
  ,"pySummary":"Поручитель Леннон Д.  У. "
  ,"RoleName":"2"
  ,"SNILS":"542-316-335 57"
  ,"TIN":"401360730407"
  ,"UnknownTIN":"false"
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ,{
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"false"
  ,"RegionCode":"Московская обл"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_FACT"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Yellow Submarine"
  ,"DocNumber":"2718 281821"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  2718 281821 выдан 30.09.2015 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2015-09-30T04:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"481 516-23-42"
  ,"ValueSearch":"4815162342"
  }
  ] 
  }
  ,{
  "BirthDate":"1940-10-09"
  ,"Gender":"M"
  ,"MiddleName":"Уинстон"
  ,"Name":"Леннон Джон Уинстон"
  ,"PinEQ":"AODY9L"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Джон"
  ,"pyFullName":"Леннон Джон Уинстон"
  ,"pyLastName":"Леннон"
  ,"pySelected":"true"
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"DocNumber":"27 18 281821"
  ,"DocTypeCode":"001"
  ,"FullDescription":" №  27 18 281821 выдан 30.09.2015 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ "
  ,"IssueDate":"2015-09-30T00:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  }
  }
  ] 
  }
  ] 
  }
  ,{
  "BirthDate":"1940-07-07"
  ,"Citizenship":"RU"
  ,"ConsentID":"56744744"
  ,"Email":"letitbe@gmail.com"
  ,"Gender":"M"
  ,"IsChanged":"false"
  ,"MarketingSegmentCode":"1"
  ,"Name":"Старр Ринго "
  ,"NoEmail":"false"
  ,"NoMiddleName":"true"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"PackageId":"M-3063_C_2"
  ,"PinEQ":"AODY9M"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"3"
  ,"pyFirstName":"Ринго"
  ,"pyFullName":"Старр Ринго "
  ,"pyID":"5830"
  ,"pyLabel":"Созаемщик"
  ,"pyLastName":"Старр"
  ,"pySelected":"false"
  ,"pySummary":"Созаемщик Старр Р. ,  SATISFACTORY"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"RoleName":"3"
  ,"SNILS":"757-903-128 31"
  ,"TIN":"335956062488"
  ,"UnknownTIN":"false"
  ,"Accounts":[ ]
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ,{
  "pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"true"
  ,"TypeCode":"ADDR_MG_FACT"
  }
  ] 
  ,"ComplianceCheck":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp"
  ,"Value":"0112 358132"
  ,"CheckList":[ 
  {
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N01"
  ,"pyNote":"Паспорт клиента РФ действителен"
  ,"Result":"Y"
  ,"Value":"PBS0005"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N02"
  ,"pyNote":"KSM0008  Error occurred while calling program PBC01N02R for option .."
  ,"Value":"KSM0008"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N03"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N04"
  ,"pyNote":"Соответствие не найдено в списке репутационных рисков"
  ,"Result":"Y"
  ,"Value":"PBS0020"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N05"
  ,"pyNote":"Соответствие не найдено в списке террористов\\экстремистов"
  ,"Result":"Y"
  ,"Value":"PBS0023"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Comp-Check"
  ,"pyID":"N06"
  ,"pyNote":"Недостаточно входных параметров"
  ,"Result":"Y"
  ,"Value":"PBS0100"
  }
  ] 
  }
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Drum Club"
  ,"DocNumber":"0112 358132"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  0112 358132 выдан 10.06.2013 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2013-06-10T04:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"Docs":[ 
  {
  "Code":"OPD"
  ,"Form":"Оригинал"
  ,"Group":"MDT"
  ,"Name":"Согласие на обработку персональных данных"
  ,"pxObjClass":"ABR-FW-Data-Doc"
  ,"pyID":"106493"
  ,"pySelected":"true"
  }
  ] 
  ,"ExpensesPerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Expenses"
  }
  ,"IncomePerMonth":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Income"
  }
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"667 286-74-29"
  ,"ValueSearch":"6672867429"
  }
  ] 
  ,"pxFlow":
  {
  "IntegrationHandling":{
  "pxObjClass":"Embed-PegaEPRO-FlowPage"
  ,"pxSubscript":"IntegrationHandling"
  ,"pyFlowParameters":{
  "ErrorStatus":"Pending-Error"
  }
  }
  }
  
  ,"pzIndexes":
  {
  "ParticipantData":"80"
  }
  
  ,"Scoring":{
  "HUNTERChecks":"OTHER.CLEAR"
  ,"LimitCalculatedExpense":"0"
  ,"LimitCalculatedIncome":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Participant"
  ,"ScoringBKI":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"8"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"2"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  ,"ScoringKD":{
  "CurrentOverdue":"N"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Check"
  ,"SummaryData":[ 
  {
  "AgreementCount":"0"
  ,"Overdue030Count":"0"
  ,"Overdue3060Count":"0"
  ,"Overdue6090Count":"0"
  ,"OverdueM90Count":"0"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Agmt-Total"
  }
  ] 
  }
  }
  ,"SimilarClients":[ 
  {
  "BirthDate":"1940-07-07"
  ,"Citizenship":"RU"
  ,"Email":"letitbe@gmail.com"
  ,"Gender":"M"
  ,"Name":"Старр Ринго "
  ,"NoEmail":"false"
  ,"NoMiddleName":"true"
  ,"NoOldPassport":"true"
  ,"NoSNILS":"false"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Ринго"
  ,"pyFullName":"Старр Ринго "
  ,"pyID":"5830"
  ,"pyLabel":"Созаемщик"
  ,"pyLastName":"Старр"
  ,"pySelected":"false"
  ,"pySummary":"Созаемщик Старр Р. "
  ,"RoleName":"3"
  ,"SNILS":"757-903-128 31"
  ,"TIN":"335956062488"
  ,"UnknownTIN":"false"
  ,"AddressList":[ 
  {
  "Apartment":"123"
  ,"Building":"A"
  ,"CityLabel":"Красногорск г"
  ,"CountryCode":"RU"
  ,"CountryLabel":"РОССИЯ"
  ,"District":"Красногорский р-н"
  ,"FullDescription":"РОССИЯ, 143444, Московская обл, Красногорский р-н, Красногорск г, Опалиха мкр, Больничный, д. 3, к/с. A, кв. 123"
  ,"House":"3"
  ,"PostalIndex":"143444"
  ,"pxObjClass":"ABR-FW-Data-Address"
  ,"RegionCode":"Московская обл"
  ,"RegistrationDate":"2017-09-02"
  ,"RegistrationType":"1"
  ,"Settlement":"Опалиха мкр"
  ,"Street":"Больничный"
  ,"TypeCode":"ADDR_MG_CONST"
  ,"FIASAddress":{
  "Address":", обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"AddressPostal":"обл. Московская, г. Красногорский, г. Красногорск, мкр. Опалиха, пер. Больничный, д. 3"
  ,"pxObjClass":"PwC-Data-FIAS-Address"
  ,"Area":{
  "Code":"013"
  ,"FormalName":"Красногорский"
  ,"PostalName":"г. Красногорский"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"301"
  ,"TypeName":"Район"
  }
  ,"City":{
  "Code":"001"
  ,"FormalName":"Красногорск"
  ,"PostalName":"г. Красногорск"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"г"
  ,"TypeCode":"401"
  ,"TypeName":"Город"
  }
  ,"District":{
  "pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"TypeCode":"503"
  ,"TypeName":"Район"
  }
  ,"House":{
  "Number":"3"
  ,"PostalCode":"143444"
  ,"PostalNumber":"3"
  ,"pxObjClass":"PwC-Data-FIAS-House"
  }
  ,"Place":{
  "Code":"001"
  ,"FormalName":"Опалиха"
  ,"PostalName":"мкр. Опалиха"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"мкр"
  ,"TypeCode":"618"
  ,"TypeName":"Микрорайон"
  }
  ,"Region":{
  "Code":"50"
  ,"FormalName":"Московская"
  ,"PostalName":"обл. Московская"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"обл"
  ,"TypeCode":"105"
  ,"TypeName":"Область"
  }
  ,"Street":{
  "Code":"0004"
  ,"FormalName":"Больничный"
  ,"PostalCode":"143444"
  ,"PostalName":"пер. Больничный"
  ,"pxObjClass":"PwC-Data-FIAS-AddressObject"
  ,"ShortName":"пер"
  ,"TypeCode":"714"
  ,"TypeName":"Переулок"
  }
  }
  }
  ,{
  "pxObjClass":"ABR-FW-Data-Address"
  ,"pySelected":"true"
  ,"TypeCode":"ADDR_MG_FACT"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityCode":"470-014"
  ,"AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Drum Club"
  ,"DocNumber":"0112 358132"
  ,"DocTypeCode":"IDOCT_EQ_PASSPORT_RF"
  ,"FullDescription":"Паспорт гражданина РФ №  0112 358132 выдан 10.06.2013 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ 470-014"
  ,"IssueDate":"2013-06-10T04:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "Code":"IDOCT_EQ_PASSPORT_RF"
  ,"GNI":"21"
  ,"IsUnique":"true"
  ,"NumPattern":"9999 999999"
  ,"Pattern":"9999 999999"
  ,"pxCommitDateTime":"2017-12-21T08:22:24.000Z"
  ,"pxCreateDateTime":"2015-01-14T11:59:32.789Z"
  ,"pxCreateOperator":"akushnarev@alfabank.ru"
  ,"pxCreateOpName":"Aleksandr A Kushnarev/alfa-bank"
  ,"pxCreateSystemID":"pegad9"
  ,"pxInsName":"IDOCT_EQ_PASSPORT_RF"
  ,"pxMoveImportDateTime":"2017-06-26T11:28:41.697Z"
  ,"pxMoveImportOperId":"alexey"
  ,"pxMoveImportOperName":"Alexey Sudarev"
  ,"pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  ,"pxSaveDateTime":"2017-12-21T08:22:23.717Z"
  ,"pxUpdateDateTime":"2017-12-21T08:22:23.451Z"
  ,"pxUpdateOperator":"alexey"
  ,"pxUpdateOpName":"Alexey Sudarev"
  ,"pxUpdateSystemID":"pega"
  ,"pyDescription":"21 Паспорт гражданина Российской Федерации"
  ,"pyEditMode":"false"
  ,"pyID":"D-4394798"
  ,"pyLabel":"Паспорт гражданина РФ"
  ,"pzInsKey":"ABR-FW-DATA-DICT-DOCTYPE-IDENTITY IDOCT_EQ_PASSPORT_RF"
  ,"SortOrder":"1"
  ,"SrcID":"001"
  ,"SrcSysCode":"SOURCE_EQ"
  ,"pxWarnings":[ ]
  }
  }
  ] 
  ,"MySelfContactInfoList":[ 
  {
  "pxObjClass":"ABR-FW-Data-PartyRoleContactInfo"
  ,"TypeCode":"CITYPE_PHONE_MOB"
  ,"Value":"667 286-74-29"
  ,"ValueSearch":"6672867429"
  }
  ] 
  }
  ,{
  "BirthDate":"1940-07-07"
  ,"Gender":"M"
  ,"Name":"Старр Ринго "
  ,"PinEQ":"AODY9M"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pyFirstName":"Ринго"
  ,"pyFullName":"Старр Ринго "
  ,"pyLastName":"Старр"
  ,"pySelected":"true"
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"DocNumber":"01 12 358132"
  ,"DocTypeCode":"001"
  ,"FullDescription":" №  01 12 358132 выдан 10.06.2013 ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ "
  ,"IssueDate":"2013-06-10T00:00:00.000Z"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"DocTypeObj":{
  "pxObjClass":"ABR-FW-Data-Dict-DocType-Identity"
  }
  }
  ] 
  }
  ] 
  }
  ] 
  ,"POSObj":{
  "BranchMnemonic":"MOIJ"
  ,"branchNumber":"MOCO"
  ,"Code":"0869"
  ,"Name":"ККО \"ИЖЕВСК-УСТИНОВСКИЙ\""
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-POS"
  ,"pyCity":"Ижевск"
  ,"pyRegion":"1800000100000"
  ,"Value":"Г"
  }
  ,"ProductOffers":[ 
  {
  "Amount":"28163264"
  ,"Currency":"810"
  ,"CurrencyMnemonic":"RUR"
  ,"FirstPaymentSource":"Accumulation"
  ,"InitialAmount":"28163264"
  ,"InitialFee":"10240"
  ,"Mrt2Doc":"false"
  ,"Period":"62"
  ,"PledgePrice":"20000000"
  ,"ProductAim":"4"
  ,"ProductTypeEQID":"4"
  ,"ProductTypeID":"3"
  ,"pxObjClass":"ABR-FW-Data-Offer"
  ,"Rate":"9"
  ,"RealEstateType":"3"
  ,"RefinancingDate":"2016-04-06"
  ,"RegionCode":"078"
  ,"OfferVariants":[ ]
  ,"ProductEQ":{
  "AccountType":"P9"
  ,"BorrowerType":"1"
  ,"CalcRate":"9"
  ,"Code":"APQ2"
  ,"CommissionFixRate":"0"
  ,"CommissionRate":"0"
  ,"Currency":"810"
  ,"CustomerProfile":"STAFFCAT"
  ,"MaxValue":"1000000000"
  ,"MinValue":"50000"
  ,"Name":"Staff,Дох подтв,Рефин,Р"
  ,"ProductTypeID":"3"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Product"
  ,"pyDescription":"Staff,Дох подтв,Рефин,Р"
  ,"pyID":"PACK-APQ2"
  ,"Term":"1"
  ,"Discounts":[ 
  {
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Дисконт ставки для категории кредита"
  ,"Sign":"-"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Дисконт ставки для быстрого выхода на сделку"
  ,"pySelected":"false"
  ,"Sign":"-"
  ,"Value":"-0.25"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Дисконт ставки для партнера КИБ"
  ,"Sign":"-"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Дисконт ставки после подтверждения целевого"
  ,"Sign":"-"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки для Клиентского предложения 2 док."
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"0.5"
  }
  ,{
  "Code":"F"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки для квартиры (Все виды жилья исключая Таунхаус)"
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"0.5"
  }
  ,{
  "Code":"TH"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки для таунхауса"
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"0.25"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки инвестиционная"
  ,"Sign":"+"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки для TOP UP"
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"0.5"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки до момента рег. в пользу Банка"
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"2"
  }
  ,{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Discount"
  ,"pyLabel":"Надбавка ставки за невыполнение условия страх."
  ,"pySelected":"false"
  ,"Sign":"+"
  ,"Value":"2"
  }
  ] 
  ,"Rates":[ 
  {
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-Rate"
  ,"pySelected":"true"
  ,"Type":"Базовая ставка (9,00 %)"
  ,"Value":"9"
  }
  ] 
  }
  }
  ] 
  ,"pxCorrSummary":[ 
  {
  "pxCorrHandle":"DATA-CORR-EMAIL ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063!20181109T144716.526 GMT"
  ,"pxCorrName":"SLAExpired"
  ,"pxCorrType":"Email"
  ,"pxObjClass":"Embed-CorrSummary"
  ,"pxRecipientPartyUri":"DBurtsev@alfabank.ru"
  ,"pxSentDateTime":"2018-11-09T14:47:21.962Z"
  }
  ] 
  ,"pxFlow":
  {
  "CloseRequest":{
  "pxAssignActivity":"WorkList"
  ,"pxAssignClass":"Assign-WorkBasket"
  ,"pxAssignDeadTime":"20181109T144652.000 GMT"
  ,"pxAssignGoalTime":"20181109T104652.000 GMT"
  ,"pxAssignmentKey":"ASSIGN-WORKBASKET ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063!CLOSEREQUEST"
  ,"pxAssignStatus":"New"
  ,"pxAssignSvcLevel":"RejectNotificationSLA"
  ,"pxFlowInsKey":"RULE-OBJ-FLOW ABR-FW-OPSFW-WORK-LOAN-MORTGAGE CLOSEREQUEST #20181107T115738.524 GMT"
  ,"pxIsInvestigative":"false"
  ,"pxLastActivityStatus":"false"
  ,"pxLastUpdateBy":"ibelogolovy"
  ,"pxObjClass":"Embed-PegaEPRO-FlowPage"
  ,"pxRouteTo":"users@mortgage"
  ,"pxStageFlowID":"FLOW1"
  ,"pxSubscript":"CloseRequest"
  ,"pxSystemFlow":"false"
  ,"pxTimeFlowStarted":"20181108T114651.879 GMT"
  ,"pyCategory":"FlowStandard"
  ,"pyConfirmationNote":"pyStepRoutedConfirmation"
  ,"pyDeferCommit":"false"
  ,"pyDeferErrors":"false"
  ,"pyDraftMode":"false"
  ,"pyFirstRun":"false"
  ,"pyFlowCalledCount":"1"
  ,"pyFlowInterestPageClass":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"pyFlowType":"CloseRequest"
  ,"pyFlowTypeLabel":"CloseRequest"
  ,"pyIssuedFromStage":"RejectRequest"
  ,"pyIssuedFromStageLabel":"RejectRequest"
  ,"pyIssuedFromStageSubscript":"RejectRequest_2"
  ,"pyLastFlowStep":"Assignment2"
  ,"pyLastFlowStepLabel":"Уведомление об отказе"
  ,"pyContexts":
  {
  }
  
  ,"pyFlowParameters":{
  "AssignTo":"users@mortgage"
  ,"AutomaticTransition":"false"
  ,"CurrentflowName":"CloseRequest"
  ,"CurrentStage":"RejectRequest"
  ,"CurrentStageLabel":"RejectRequest"
  ,"CurrentStageSubscript":"RejectRequest_2"
  ,"DoNotEvaluateWhens":"Yes"
  ,"flowClass":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"FlowID":"FLOW1"
  ,"flowLabel":"CloseRequest"
  ,"flowName":"CloseRequest"
  ,"flowType":"CloseRequest"
  ,"isThisReEntry":"No"
  ,"pyCaseTypePurpose":"STAGE_STARTPROCESSES"
  ,"pyForEachCount":"2"
  ,"pyProcessPageName":"pySupportProcessList"
  ,"pyStagePurpose":"STAGE_STARTPROCESSES"
  ,"pySubCasesPageName":"pySubCasesList"
  ,"ReferencePageName":"pyWorkPage"
  }
  ,"pyFlowPath":[ 
  {
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"SplitForEach1"
  ,"pyStepLabel":"Передача пакета документов в ЭА"
  ,"pyStepType":"SPLITFOREACH"
  }
  ,{
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"SplitForEach2"
  ,"pyStepLabel":"Закрытие счетов"
  ,"pyStepType":"SPLITFOREACH"
  }
  ,{
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"Decision1"
  ,"pyStepLabel":"Нужен вызов UpdateHunter?"
  ,"pyStepType":"DECISION"
  }
  ,{
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"Utility2"
  ,"pyStepLabel":"Уведомление Менеджера ОП"
  ,"pyStepType":"TASK"
  }
  ,{
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"SubProcess2"
  ,"pyStepLabel":"Информирование заинтересованных лиц"
  ,"pyStepType":"FLOW"
  }
  ,{
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"true"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"Assignment2"
  ,"pyStepLabel":"Уведомление об отказе"
  ,"pyStepType":"ASSIGNMENT"
  }
  ] 
  ,"pySubscriptsIteratedOver":[ ]
  }
  ,"pzInternalCaseFlow":{
  "pxAssignActivity":"pzCreateInternalAssignment"
  ,"pxAssignClass":"Assign-Internal"
  ,"pxAssignIsVirtual":"true"
  ,"pxAssignmentKey":"ASSIGN-INTERNAL ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063!PZINTERNALCASEFLOW"
  ,"pxFlowInsKey":"RULE-OBJ-FLOW WORK- PZINTERNALCASEFLOW #20151105T160214.591 GMT"
  ,"pxIsInvestigative":"false"
  ,"pxLastUpdateBy":"ibelogolovy"
  ,"pxObjClass":"Embed-PegaEPRO-FlowPage"
  ,"pxRouteTo":"default@pega.com"
  ,"pxSubscript":"pzInternalCaseFlow"
  ,"pxSystemFlow":"true"
  ,"pxTimeFlowStarted":"20180402T085114.537 GMT"
  ,"pyCategory":"FlowStandard"
  ,"pyDeferCommit":"false"
  ,"pyDeferErrors":"false"
  ,"pyDraftMode":"false"
  ,"pyFirstRun":"false"
  ,"pyFlowCalledCount":"1"
  ,"pyFlowInterestPageClass":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"pyFlowType":"pzInternalCaseFlow"
  ,"pyFlowTypeLabel":"Internal flow"
  ,"pyLastFlowStep":"ASSIGNMENT63"
  ,"pyLastFlowStepLabel":"Perform action"
  ,"pyContexts":
  {
  }
  
  ,"pyFlowParameters":{
  "AssignTo":"default@pega.com"
  ,"flowName":"pzInternalCaseFlow"
  ,"isNewCase":"true"
  ,"ReferencePageName":"pyWorkPage"
  }
  ,"pyFlowPath":[ 
  {
  "pxObjClass":"Embed-PegaEPRO-FlowPath"
  ,"pyDisplay":"false"
  ,"pyFAProcessOnJump":"false"
  ,"pyFlowStep":"ASSIGNMENT63"
  ,"pyStepLabel":"Perform action"
  ,"pyStepType":"ASSIGNMENT"
  }
  ] 
  }
  }
  
  ,"pxStageHistory":[ 
  {
  "pxCompletedBy":"Ilya Belogolovy"
  ,"pxCompletedStageTime":"2018-11-08T11:46:51.693Z"
  ,"pxEnterStageTime":"2018-04-02T08:51:14.543Z"
  ,"pxObjClass":"Embed-StageHistory"
  ,"pxStageID":"Enter"
  ,"pxStageName":"Enter"
  ,"pxStageType":"Primary"
  ,"pxSubscript":"Enter_1"
  ,"pxWentTo":"RejectRequest"
  ,"pxProcesses":[ 
  {
  "pxCompletedBy":"Ilya Belogolovy"
  ,"pxCompletedTime":"2018-04-03T11:10:06.995Z"
  ,"pxFlowID":"FLOW1"
  ,"pxIsComplete":"True"
  ,"pxIsOptional":"false"
  ,"pxObjClass":"Embed-StageProcessHistory"
  ,"pxProcessName":"CreateApplication"
  ,"pxStartedBy":"Ilya Belogolovy"
  ,"pxStartTime":"2018-04-02T08:51:14.545Z"
  ,"pxSubscript":"CreateApplication"
  ,"pyLabel":"CreateApplication"
  ,"pxSteps":[ 
  {
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Utility1"
  ,"pxStepType":"TASK"
  ,"pyLabel":"Генерация сквозного номера"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Assignment1"
  ,"pxStepType":"ASSIGNMENT"
  ,"pyLabel":"Персональные данные"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Decision3"
  ,"pxStepType":"DECISION"
  ,"pyLabel":"Участник является резидентом другой страны"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SubProcess3"
  ,"pxStepType":"FLOW"
  ,"pyLabel":"Идентификация клиента"
  }
  ] 
  }
  ,{
  "pxFlowID":"FLOW2"
  ,"pxIsComplete":"true"
  ,"pxIsOptional":"false"
  ,"pxObjClass":"Embed-StageProcessHistory"
  ,"pxProcessName":"EnterApplication"
  ,"pxStartedBy":"Ilya Belogolovy"
  ,"pxStartTime":"2018-04-03T11:10:06.996Z"
  ,"pxSubscript":"EnterApplication"
  ,"pyLabel":"EnterApplication"
  ,"pxSteps":[ 
  {
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Assignment1"
  ,"pxStepType":"ASSIGNMENT"
  ,"pyLabel":"Добавление документов"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SplitForEach2"
  ,"pxStepType":"SPLITFOREACH"
  ,"pyLabel":"Регистрация СОПД"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SubProcess1"
  ,"pxStepType":"FLOW"
  ,"pyLabel":"Проверки комплаенс"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SubProcess5"
  ,"pxStepType":"FLOW"
  ,"pyLabel":"Ввод данных заявки"
  }
  ] 
  }
  ] 
  }
  ,{
  "pxCameFrom":"Enter"
  ,"pxEnterStageTime":"2018-11-08T11:46:51.692Z"
  ,"pxObjClass":"Embed-StageHistory"
  ,"pxStageID":"RejectRequest"
  ,"pxStageName":"RejectRequest"
  ,"pxStageType":"Alternate"
  ,"pxSubscript":"RejectRequest_2"
  ,"pxProcesses":[ 
  {
  "pxFlowID":"FLOW1"
  ,"pxIsComplete":"False"
  ,"pxIsOptional":"false"
  ,"pxObjClass":"Embed-StageProcessHistory"
  ,"pxProcessName":"CloseRequest"
  ,"pxStartedBy":"Ilya Belogolovy"
  ,"pxStartTime":"2018-11-08T11:46:51.712Z"
  ,"pxSubscript":"CloseRequest"
  ,"pyLabel":"CloseRequest"
  ,"pxSteps":[ 
  {
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SplitForEach1"
  ,"pxStepType":"SPLITFOREACH"
  ,"pyLabel":"Передача пакета документов в ЭА"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SplitForEach2"
  ,"pxStepType":"SPLITFOREACH"
  ,"pyLabel":"Закрытие счетов"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Decision1"
  ,"pxStepType":"DECISION"
  ,"pyLabel":"Нужен вызов UpdateHunter?"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Utility2"
  ,"pxStepType":"TASK"
  ,"pyLabel":"Уведомление Менеджера ОП"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"SubProcess2"
  ,"pxStepType":"FLOW"
  ,"pyLabel":"Информирование заинтересованных лиц"
  }
  ,{
  "pxObjClass":"Embed-StageStepHistory"
  ,"pxStepID":"Assignment2"
  ,"pxStepType":"ASSIGNMENT"
  ,"pyLabel":"Уведомление об отказе"
  }
  ] 
  }
  ] 
  }
  ] 
  ,"pxSystemUpdateDetailsList":[ ]
  ,"pyAttachmentCategories":[ ]
  ,"pyPreviousValues":{
  "pxObjClass":"ABR-FW-OpsFW-Work-Loan-Mortgage"
  ,"Seller":"1"
  ,"Insurances":[ 
  {
  "pxObjClass":"ABR-FW-Data-ExtInsurance"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"Limit":{
  "pxObjClass":"ABR-FW-OpsFW-Data-Loan-Limit-Mortgage"
  }
  ,"Participants":[ 
  {
  "IsResident":"false"
  ,"IsUSAResident":"false"
  ,"MarketingSegmentCode":"8"
  ,"PinEQ":"AODY9K"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"1"
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №98 ОУФМС РФ ПО СПБ И ЛО В ВЫБОРГСКОМ Р-НЕ"
  ,"BirthPlace":"СССР"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  }
  ] 
  }
  ,{
  "MarketingSegmentCode":"1"
  ,"PinEQ":"AODY9L"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"2"
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Yellow Submarine"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  }
  ] 
  }
  ,{
  "MarketingSegmentCode":"1"
  ,"PinEQ":"AODY9M"
  ,"pxObjClass":"ABR-FW-Data-Party-Person"
  ,"pxTrackingIndex":"3"
  ,"ConfidantList":[ 
  {
  "pxObjClass":"ABR-FW-Data-Party-"
  ,"pxTrackingIndex":"1"
  }
  ] 
  ,"DocIdentityList":[ 
  {
  "AuthorityName":"ТП №86 ОУФМС РФ ПО СПБ И ЛО В БОКСИТОГОРСКОМ Р-НЕ"
  ,"BirthPlace":"Drum Club"
  ,"pxObjClass":"ABR-FW-Data-Doc-Identity"
  ,"pxTrackingIndex":"1"
  }
  ] 
  }
  ] 
  ,"Partner":{
  "pxObjClass":"ABR-FW-Data-Party-Org"
  }
  }
  ,"pyWorkParty":
  {
  "Initiator":{
  "pxObjClass":"Data-Party-Operator"
  ,"pxPartyRole":"Initiator"
  ,"pxSubscript":"Initiator"
  ,"pyFirstName":"Ilya"
  ,"pyFullName":"Ilya Belogolovy"
  ,"pyLabel":" Ilya Belogolovy"
  ,"pyLastName":"Belogolovy"
  ,"pyPartyLabel":"Initiator"
  ,"pyPartyNotified":"false"
  ,"pyUserIdentifier":"ibelogolovy"
  ,"pyUserName":"Ilya Belogolovy"
  ,"pyWorkPartyUri":"ibelogolovy"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pyAddresses":
  {
  "Email":{
  "pxObjClass":"Data-Address-Email"
  ,"pxSubscript":"Email"
  }
  }
  
  ,"pyCorrPreferences":[ 
  "Email"
  ] 
  ,"pzIndexes":
  {
  "PartyURI":"83"
  }
  
  }
  ,"ManagerGIK":{
  "pxObjClass":"Data-Party-Person"
  ,"pxSubscript":"ManagerGIK"
  ,"pyFullName":"Закурдаева Эльмира Игоревна"
  ,"pyPartyLabel":"ManagerGIK"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pyCorrPreferences":[ 
  "Email"
  ] 
  ,"pzIndexes":
  {
  "PartyURI":"84"
  }
  
  }
  ,"Owner":{
  "pxObjClass":"Data-Party"
  ,"pxSubscript":"Owner"
  }
  ,"Receiver":{
  "pxObjClass":"Data-Party"
  ,"pxPartyRole":"Receiver"
  ,"pxSubscript":"Receiver"
  ,"pyEmail1":"DBurtsev@alfabank.ru"
  ,"pyLabel":"  "
  ,"pyPartyLabel":"Receiver"
  ,"pyPartyNotified":"true"
  ,"pyWorkPartyUri":"DBurtsev@alfabank.ru"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pyCorrPreferences":[ 
  "Email_1"
  ] 
  ,"pzIndexes":
  {
  "PartyURI":"86"
  }
  
  }
  ,"Seller":{
  "pxObjClass":"Data-Party-Person"
  ,"pxSubscript":"Seller"
  ,"pyFullName":"Закурдаева Эльмира Игоревна"
  ,"pyPartyLabel":"Seller"
  ,"pzIndexOwnerKey":"ABR-FW-OPSFW-WORK-LOAN-MORTGAGE M-3063"
  ,"pyCorrPreferences":[ 
  "Email"
  ] 
  ,"pzIndexes":
  {
  "PartyURI":"85"
  }
  
  }
  }
  
  ,"pzIndexes":
  {
  "CaseData":"81"
  }
  
  ,"ScoringResult":{
  "Decision":"DECLINE"
  ,"DeclineCode":"BR102"
  ,"NeedManualCheck":"true"
  ,"pxObjClass":"ABR-FW-OpsFW-Data-Loan-Mortgage-WSRM-Result"
  }
  ,"ScoringVersions":
  {
  "SC0":"1"
  }
  
  }
  ,"stages":[ 
  {
  "ID":"Enter"
  ,"name":"Enter"
  ,"pxObjClass":"Pega-API-CaseManagement-Stage"
  }
  ,{
  "ID":"Verify"
  ,"name":"Verify"
  ,"pxObjClass":"Pega-API-CaseManagement-Stage"
  }
  ,{
  "ID":"Prepare"
  ,"name":"Prepare"
  ,"pxObjClass":"Pega-API-CaseManagement-Stage"
  }
  ,{
  "ID":"Conduct"
  ,"name":"Conduct"
  ,"pxObjClass":"Pega-API-CaseManagement-Stage"
  }
  ] 
  };

// const getCase = (id) => {
//     return axios
//       .get(encodeURI(endpoints.BASEURL + endpoints.CASES + "/" + id), {
//         headers: {
//           ...authHeader(),
//           "Access-Control-Expose-Headers": "etag"
//         }
//       })
//       .then( response => {
//         response.data["etag"] = response.headers.etag;
//         return response.data;
//       })
//       .catch( error => {
//         return Promise.reject(getError(error));
//       });
// };

const getCase = ({pegaUrl}) =>  {
  console.log("endpoint pega: "+ endpoints.BASEURL);
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      // if (Math.random() > 0.75) {
      //   reject(new Error('Something bad happened!'));
      // } else resolve(this.data);
      resolve(testData)
    }, 10);
  });
}

export {
    getCase
};