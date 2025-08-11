var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "I didn’t plan to work in cybersecurity — I fell into it.\nWhat began as a tech support job helping customers troubleshoot Microsoft Defender turned into an obsession. Within a year, I was the go-to person for deep-dive Defender issues. And now, I am Technical Lead supporting our team’s ramp up and escalations related to the Microsoft’s XDR stack.\nMy toolkit? Defender for Endpoint, Identity, Cloud Apps, Azure Sentinel — and a lot of KQL. I’ve supported customers across Windows, Linux, and macOS environments, bridging operations with Intune, GPO, and SCCM. When Defender tools didn’t behave as expected, I dug into the why — helping teams trace the root cause and build solutions that actually worked in the real world.\nNow, I’m Microsoft Certified and Associate of ISC2, working toward full certification by Jan 2026. My next goal is to transition into a full-time hands-on security operations role focused on threat hunting, and incident response.\nThis site is my sharing ground — and hopefully a helpful resource for the Community. I’ll be sharing what I found useful in Defender XDR stack, and document personal labs or tests. If it helps one other person get un-stuck, then that’s a win for this website.",
    "description": "I didn’t plan to work in cybersecurity — I fell into it.\nWhat began as a tech support job helping customers troubleshoot Microsoft Defender turned into an obsession. Within a year, I was the go-to person for deep-dive Defender issues. And now, I am Technical Lead supporting our team’s ramp up and escalations related to the Microsoft’s XDR stack.\nMy toolkit? Defender for Endpoint, Identity, Cloud Apps, Azure Sentinel — and a lot of KQL. I’ve supported customers across Windows, Linux, and macOS environments, bridging operations with Intune, GPO, and SCCM. When Defender tools didn’t behave as expected, I dug into the why — helping teams trace the root cause and build solutions that actually worked in the real world.",
    "tags": [],
    "title": "About Me",
    "uri": "/about/index.html"
  },
  {
    "breadcrumb": "Blog Post",
    "content": "Tips and trick knowledge about MS Defender and related products. Sentinel Playbook: Device Isolation Using MDE API #2\rSentinel Playbook: Device Isolation Using MDE API #1\rLive Response to Remotely Collect Defender Logs\rTracking Defender Policy Deployment with Logs",
    "description": "Tips and trick knowledge about MS Defender and related products. Sentinel Playbook: Device Isolation Using MDE API #2\rSentinel Playbook: Device Isolation Using MDE API #1\rLive Response to Remotely Collect Defender Logs\rTracking Defender Policy Deployment with Logs",
    "tags": [],
    "title": "Microsoft Defender",
    "uri": "/blog/defender/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Professional Certifications Microsoft Certified: Security Operations Analyst Associate (SC-200) Deep knowledge of Microsoft Defender XDR stack: MDE, MDI, MCAS/MDCA, MDC and Sentinel Skills: Incident response, threat hunting, KQL, Defender XDR Hands on Experience:\nKQL queries for threat detection, hunting, and configuration auditing Setting up Microsoft Sentinel, and Defender XDR deployment Automated response workflows using Logic Apps, Powershell and Python with API integrations This certification reflects not just what I studied, but the skills I applied daily while helping customers improve their security operations.\nAssociate of ISC2 Passed the rigorous ISC2 exam, meeting the knowledge requirements across all 8 domains related to Information Systems Security Currently accumulating the required years of professional experience in related domains to obtain the full certification by Jan 2026 This recognition reflects my long-term commitment to the field of cybersecurity and continuous professional growth — not just passing exams, but applying and sharing knowledge for the public goods.\nLearning Certifications Fundamental Coding Interview Prep with Python Strengthened core Python skills with a focus on loops, string operations, and type conversions Hands-on experience implementing basic and advanced algorithms",
    "description": "Professional Certifications Microsoft Certified: Security Operations Analyst Associate (SC-200) Deep knowledge of Microsoft Defender XDR stack: MDE, MDI, MCAS/MDCA, MDC and Sentinel Skills: Incident response, threat hunting, KQL, Defender XDR Hands on Experience:\nKQL queries for threat detection, hunting, and configuration auditing Setting up Microsoft Sentinel, and Defender XDR deployment Automated response workflows using Logic Apps, Powershell and Python with API integrations This certification reflects not just what I studied, but the skills I applied daily while helping customers improve their security operations.",
    "tags": [],
    "title": "Credentials",
    "uri": "/credentials/index.html"
  },
  {
    "breadcrumb": "",
    "content": "You can reach me on:\nEmail: Click to Copy Email\rSocial: LinkedIn Reddit",
    "description": "You can reach me on:\nEmail: Click to Copy Email\rSocial: LinkedIn Reddit",
    "tags": [],
    "title": "Contact",
    "uri": "/contact/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Welcome to my blog. I will be updating regularly and will keep it updated. MS Defender\rSentinel Playbook: Device Isolation Using MDE API #2\rSentinel Playbook: Device Isolation Using MDE API #1\rLive Response to Remotely Collect Defender Logs\rTracking Defender Policy Deployment with Logs",
    "description": "Welcome to my blog. I will be updating regularly and will keep it updated. MS Defender\rSentinel Playbook: Device Isolation Using MDE API #2\rSentinel Playbook: Device Isolation Using MDE API #1\rLive Response to Remotely Collect Defender Logs\rTracking Defender Policy Deployment with Logs",
    "tags": [],
    "title": "My Blog Sharing",
    "uri": "/blog/index.html"
  },
  {
    "breadcrumb": "Blog Post \u003e\u003e MS Defender",
    "content": "In Part 1 we learned how to authenticate with the Microsoft Defender API and retrieve a list of devices. In this part 2, we’ll continue building on that by creating an Azure Logic App that isolates devices in bulk based on their Device Tag or Group.\nStep 1: Designing the Logic Apps Now we need to understand what are we going to do with Logic App. Here is the flow that we are trying to achieve by using Logic App + API. In part 1 demonstration, we have shown how we can GET Access Token and GET Defender device list. graph LR;\rTrigger --\u003e step2[\"API call to GET Token\"] --\u003e step3[\"Use token to GET device by Tag/Group\"] --\u003e step4[\"Loop, Use token POST to Isolate device one by one\"]\rOnce you are ready, our next step now is to go to Logic Apps page and create new Logic App. For this demo, I will be using Consumption hosting option as I will not be using this API that much for demo purpose.\nAdding Permission to LogicApp We need our Logic App to be able to read client secret that we have stored in Azure Key Vault previously. To do so, go to Logic Apps \u003e Settings \u003e Identity page , we need to set up Managed Identity.\nTip\rUsing Managed Identity means your Logic App doesn’t need to store sensitive values like client secrets directly in the workflow. This reduces the risk of exposure, and keeps your authentication process fully managed by Azure.\nNow go to the Key Vault resource that you created in Part 1 \u003e Access control (IAM) \u003e Add, you want to add Key Vault Secrets User \u003e Assign access to Managed identity. Save this Assignment. Logic App Designer - Trigger Go to Logic app designer. As this is a proof of concept, I will use manual trigger (When a HTTP request is received), and change the method to POST. If you want to create this as automation, you can modify the trigger. API call to GET Token We need to retrieve the secret from Key vault. Create new action to Azure Key vault \u003e Get secret, select Managed identity and paste your KeyVault name. Next, we need to use these secret and to obtain our Access Token. Create new action for HTTP and enter the following information (modify the {tenant-id},{client-id} and {client-secret} accordingly):\nName: Get Token\nURI: https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token\nHeaders: Content-Type -\u003e application/x-www-form-urlencoded\nBody:\ngrant_type=client_credentials \u0026client_id={client-id} \u0026client_secret={client-secret} \u0026scope=https://api.securitycenter.microsoft.com/.default To get the Client Secret from our Azure Key Vault, do the following: Use token to GET device by Tag/Group Create a next action to HTTP again, and this time use the following information:\nName: Get Machine List\nURI: https://api-us3.securitycenter.microsoft.com/api/machines\nMethod: GET\nHeaders:\nAccept -\u003e application/json Authorization -\u003e Bearer @{body('Get_Token')?['access_token']} Content-Type -\u003e application/json And since we want to filter it based on Device Tag in this example, create new action to Data Operations \u003e Filter Array, input the following information:\nName: Filter for DeviceTag\nFrom: @{body('Get_Machine_List')?['value']}\nFilter Query: @contains(@{item()?['machineTags']},\"TestTag\")\nInfo\rIn above example we will use manual/static Device Tag TestTag. For Incident automation scenario you might want to get this information from your trigger, using the Dynamic function.\nQuick Sanity Check Do a quick check, lets Run our Logic Apps, and see the result from top right Notification section \u003e Open Run. You should be seeing something similar to this. Under the Outputs, now it only shows JSON details of devices with TestTag Machine Tag. Loop, Use token to POST Isolate device one by one Now lets use the filtered data to Loop and execute Isolation one by one. Lets create our next action, For each and at the field Select an output from previous steps input @{outputs('Filter_for_DeviceTag')['body']}. Create new action inside the loop, and create Condition. We will use this as our safeguard, this safeguard ensures that the isolation command only runs when the filtered list is not empty. Without it, a wrong filter could isolate all devices in your tenant.\n. Inside the condition:\n@{length(body('Filter_for_DeviceTag'))} is greater than 0 Inside the True condition, we want to create new Action \u003e HTTP.\nName: Isolate Batch\nURI: https://api.securitycenter.microsoft.com/api/machines/@{item()?['id']}/isolate\nMethod: POST\nHeaders:\nContent Type -\u003e application/json Authorization -\u003e Bearer @{body('Get_Token')?['access_token']} Body: {\"Comment\": \"Isolating device due to suspicious activity\",\"IsolationType\": \"Full\"}\nStep 2: Testing and Confirming Thats all the set up you need from Logic App. Now I will test this by manually Run the Logic Apps, and it should send isolate command to devices in my environment with the “TestTag” Device Tag. You will see the result flow. Now go to Security Portal \u003e Investigation \u0026 response \u003e Actions \u0026 submission \u003e Action center \u003e History, you should see the Isolate device command being sent by Logic App. Wrapping Up: Whats Next? With this setup, you now have a working Logic App that can securely fetch API credentials from Key Vault, query Defender for devices by tag, and isolate them in bulk — all with a single click (or based on trigger without manual intervention).\nFrom here, you can take this proof of concept further by:\nAutomating triggers — e.g., start the workflow automatically when a high-severity incident is detected in Microsoft Sentinel. More Filtering — isolate based on alert category, severity, or custom metadata instead of a static Device Tag. This workflow not only streamlines incident response but also shows how combining Defender APIs with Logic Apps can build powerful, automated security operations.",
    "description": "How to isolate multiple devices using Sentinel Playbook (Logic App) and MDE API, based on device tags or groups",
    "tags": [
      "Sentinel",
      "Defender",
      "API",
      "LogicApp",
      "Isolation"
    ],
    "title": "Sentinel Playbook: Device Isolation Using MDE API (Part 2 - Logic App)",
    "uri": "/blog/defender/004.takeresponseapi2/index.html"
  },
  {
    "breadcrumb": "Blog Post \u003e\u003e MS Defender",
    "content": "Recently, I was browsing the sub-Reddit of Defender ATP and came across a post asking about using Sentinel Playbook to Isolate Multiple Devices that are part of a specific MDE Tag/Group. This intrigued me, as many people might initially try to use Advanced Hunting (Custom Detection Rule) for this task. However, data about MDE device tags or groups is often incomplete or inconsistent in Advanced Hunting—this data is more reliably accessible through the MDE API.\nHere is the flow: graph LR;\rtrigger[\"Trigger\u003cbr\u003e(Manual or Incident)\"] --\u003e api[\"GET Machine List\u003cbr\u003eMachineID by Tag/Group\"] --\u003e api2[\"POST Isolate Machine\u003cbr\u003eIsolate all MachineID\"]\rThis guide is part one of a proof of concept, that will show you how to Isolate Device with Sentinel Playbook (Logic Apps) and data from MDE API. It will help you with the following scenario:\nYou want to bulk Isolate or Unisolate Device, targeting specific parameter, such as Device Tag/Group. You want an automation flow to Isolate or Unisolate Device using API. What You’ll learn in this part one:\nHow to use Microsoft Defender API How to register an Azure App and get API access How to securely store secrets in Azure Key Vault How to test and validate your API token before building a Logic App Scope \u0026 Requirements:\nAdministrator access to create App Registration in Azure portal. Administrator access to create or modify Azure Key Vault. Based on Isolation feature and its limitation (such as OS). Isolate API limitation, such as 100 calls per minute or 1500 calls per hour. Similar reference to this method is also available in this Github page.\nStep 1: Creating API Application and the Required –Permission Our first step to use API is to create an App with right permission, as a means of Authorization to access our MDE resources.\nInfo\rIf you are not familiar with MDE API, I highly suggest to get familiar with MDE API Hello World docs first.\nGo to Azure Portal \u003e and search for App registration, and click fo New registration.\nFill up the name and click Register, we don’t need to modify other parameter. On the left panel, click on Manage \u003e API permissions blade.\nClick on Add a permission \u003e APIs my organization uses \u003e WindowsDefenderATP. Select Application permissions \u003e and tick Machine.Isolate and Machine.ReadAll Info\rFor targeted isolation, we need Machine.Isolate and Machine.ReadAll permissions, as per API documentation about Isolate Machine and List Machine.\nOnce you add the permission, you will be back at API permissions blade, click Grant admin consent for xxx Go to Certificates \u0026 secrets blade and select New client secret. Put the description, and specify the secret validity. Click Add.\nYou will get your secret value here, copy it somewhere safe, as you only have access to it once. If you lost it, you need to recreate this step. Also later in the step, we will need to retrieve this value. Info\rThis secret will be acting like your password to access your API, whenever you wants to access MDE API, you or your application will need to present the secret value to authorize.\nNow, go to the Overview blade, and copy the value of Application (client) ID and Directory (tenant) ID. Tip\rNow you have 3 values that will be needed when making authorized API call. In most modern API platforms that use OAuth 2.0 (such as Microsoft, Google, Okta, and others), these values are essential for issuing an access token, which is then used to authenticate your API requests.\nSecret Value Application / Client ID Directory / Tenant ID Step 2: Store the Secret in Azure Key Vault We will be storing the secret in Azure Key Vault to securely protect them and only allow the required Azure’s service (Logic App that we will create later) to access them.\nFrom Azure Portal \u003e search Key Vaults \u003e Create a new Key Vault. For this testing purpose, we go with all default settings and create the Vault. Go to the Key Vault resource created, on left side click Access control (IAM) blade to give RBAC access to add the secrets. Click Add \u003e Add role assignment. For this test I will assign Key Vault Administrator, and add my own account as the member. Now, on the left panel go to Objects \u003e Secrets blade. Then click Generate/Import. Input the Secret value that you have from the previous step here. Info\rIn Production environment, you might want to limit the IAM to Key Vault Secrets Officer to only allow managing/adding the Secret value.\nReference - Azure built-in roles for Key Vault data plane operations\nOptional: Testing the API call If you want to test on how your API works, you can follow this section. Otherwise, if you are familiar with API already, you can skip this section.\nFirst, download the following powershell script to get the token, and do the API call. Attachments\rGet-Token.ps1 (854 B)\rGet-DeviceList.ps1 (585 B)\rInside the Get-Token.ps1 you want to modify tenantId, appId and appSecret with the value you get from Step 1 Open Powershell.exe and run the .\\Get-Token.ps1 Info\rIf you encounter UnauthorizedAccess error, you can temporarily disable powershell Execution policy, this will only affect the current Powershell instance:\nSet-ExecutionPolicy Bypass -Scope Process\rGo to jwt.ms and paste the token above. You should see the roles we applied earlier. If you don’t see it, it means your Step 1 App registration permission is not applied. Try to redo Step 1. Next, we want to try and call the Get machine list API, to see the output of the API.\nRun Get-DeviceList.ps1, make sure both Get-Token.ps1 is also at the same folder. You should see the details of 1 machine in your MDE tenant. Including, machineTags or rbacGroupName (Device Group) which we will use in part 2, to target and filter these devices. That’s pretty much how API works, without MDE portal and just using a script, you can now access data in your MDE tenant. In this example, you are accessing Devices data.\nThe more you get familiar with MDE API list, you will see many other datas you can obtain (GET), and even more, you can instruct a command (POST) through API. Which, we will leverage to instruct Device Isolation in part 2.\nWrapping Up: Laying Out API Foundation for Boundless Potential You’ve now seen how the MDE API works and how to authorize access through Azure App Registration and Key Vault. While this setup alone may not seem powerful yet, it lays the essential groundwork for integrating with Sentinel Logic Apps.\nWith this foundation in place, you’re ready to start building playbooks that can automate bulk actions—like isolating devices based on tags or groups.\nNext, in Part 2 we’ll be building the Logic App that ties this all together and makes targeted bulk Isolation possible.",
    "description": "How to isolate multiple devices using Sentinel Playbook (Logic App) and MDE API, based on device tags or groups",
    "tags": [
      "Sentinel",
      "Defender",
      "API",
      "LogicApp",
      "Isolation"
    ],
    "title": "Sentinel Playbook: Device Isolation Using MDE API (Part 1 - API Setup)",
    "uri": "/blog/defender/003.takeresponseapi1/index.html"
  },
  {
    "breadcrumb": "Blog Post \u003e\u003e MS Defender",
    "content": "Troubleshooting Defender issues often requires local logs — but collecting them manually can be time-consuming, especially when you can’t access the device directly. Fortunately, you can use MDE Live Response to remotely run the MDE Client Analyzer (MDECA) and collect logs directly through the Defender portal.\nThis guide will help you with the following scenarios:\nYou need to troubleshoot Defender configuration, however the end-user device is not available. There is incident or alert from the user’s device, and you need to collect the relevant Defender logs asap. Scope of this guide:\nWindows Client and Windows Server Endpoints onboarded and have active connection to MDE Fulfilled Live Response requirements MS Docs Reference Link - Collect support logs in Microsoft Defender for Endpoint using live response Step 1: Download the MDECA Script Before using Live Response, you’ll need to upload the MDECA tool to the portal. Download the latest preview version from the link below:\nMDE Client Analyzer Preview Extract the zip and go to the Tools subfolder, you will see few .ps1 script that can be used with Live Response. Each of these scripts will collect regular MDECA plus additional logs depending on the scenario. Such as:\nMDELiveAnalyzerNet.ps1 is similar with running MDECA with -i parameter, it will additionally collect network trace MDELiveAnalyzerAppCompat.ps1 is -c, it will collect procmon MDELiveAnalyzerPerf.ps1 and MDELiveAnalyzerAV.ps1 is -l, it will collect perfmon (not really sure why, but they are exactly the same script) MDELiveAnalyzerVerbose.ps1 is -l -e -v, it will collect perfmon, ETW event tracing and Defender verbose logs. Info\rRunning the following in your parent MDECA folder will show all available MDECA parameter:\nMDEClientAnalyzer.cmd /?\rClick for screenshot\rStep 2: Upload the Script to Defender Portal In this example I will be using MDELiveAnalyzerNet.ps1 script to collect Defender logs plus additional network traces. Go to MDE Portal \u003e Assets \u003e Devices, select the Device you wish to collect logs from.\nOn Top right hand corner, click … \u003e Initiate Live Response Session Once Live Response initiated, again click … \u003e Upload file to library, in this example I selected MDELiveAnalyzerNet.ps1 \u003e Submit Info\rTo check if file is successfully uploaded, run the following command inside the Live Response session. You should be able to see MDELiveAnalyzerNet.ps1\nlibrary\rStep 3: Running the Script and Download the Logs Next you want to run the script, in the MS learn reference docs it was advised to use \u0026 symbol as suffix to run it as Live Response background action. The \u0026 suffix runs the command in the background, allowing you to keep using the Live Response session. Without it, you’ll need to wait until the script completes before doing anything else.\nrun MDELiveAnalyzerNet.ps1\u0026\rI will show you both how it run with and without \u0026 parameter so you could get more familiar with it. ​\rWithout \u0026 symbol\rWith \u0026 symbol\rWithout \u0026, Live Response will show the output of the running script, and you could do nothing with the Live Response interface while waiting, until the script finishes running.\nrun MDELiveAnalyzerNet.ps1\rClick for screenshot\rWith the \u0026 suffix, once you run it, Live response will give you Command ID (GUID). And you are free to continue using the Live Response interface. You can then return to this background task by using fg command.\nrun MDELiveAnalyzerNet.ps1\u0026\rClick for screenshot\rUsing above example, here is the command to enter the background command:\nfg cf381b1e-a5e3-49ed-b127-f442687ce0f9\rOnce this is run, it will show the command output \\\nNext use this command to Download the MDE Client Analyzer output, in my demo lab it took 1-2 minutes before it starts downloading.\nGetFile \"C:\\ProgramData\\Microsoft\\Windows Defender Advanced Threat Protection\\Downloads\\MDECA\\MDEClientAnalyzerResult.zip\"\rAlso, in my test, the downloaded file is in .gz format, you can use Zip application to extract them.\nWrapping Up: Say Goodbye to Waiting on the User You now have a reliable method for remote collection of MDECA logs using Live Response. This is extremely useful in scenarios where you need visibility into Defender behavior but can’t access the machine directly.\nBe aware that MDECA can produce very detailed logs — make sure you understand what you’re looking for. For some basic MDECA logs details you can refer to the Official Docs.\nFor example, if you are looking to troubleshoot Defender AV configuration deployment settings, you can go to the /DefenderAV/ folder, and extract the MpSupportFiles.cab.",
    "description": "Use Microsoft Defender for Endpoint's Live Response to collect MDE Client Analyzer logs remotely from user devices.",
    "tags": [
      "Defender",
      "Troubleshooting",
      "MDE Client Analyzer",
      "Live Response",
      "Windows"
    ],
    "title": "Live Response to Remotely Collect Defender Logs",
    "uri": "/blog/defender/002.live-analyzer/index.html"
  },
  {
    "breadcrumb": "Blog Post \u003e\u003e MS Defender",
    "content": "When deploying Defender policies like Real-Time Protection, ASR Rules, or Scheduled Scan via Intune, GPO, or the Defender Portal, we want an assurance that those settings actually reached the endpoint. In this guide, we’ll walk through how to use MpRegistry.txt — a powerful local Defender log file — to verify if a policy was received and applied, and how to troubleshoot common policy delivery issues.\nThis guide will be focused at explaining Defender logs called MpRegistry.txt, that will show you how Defender is receiving the policy, and applied policy.\nThis guide will help you troubleshoot the following scenarios:\nYou have applied Defender Policy (such as Real Time Protection, Cloud Protection, or ASR Rules), but aren’t sure if the device received it. You have applied Defender Policy , but it is not being enabled/disabled per your config. You’re getting errors like “This setting is managed by your administrator” MDE still shows Security Recommendations even after you’ve applied fixes Scope of this guide:\nWindows Client and Windows Server running Windows Defender Step 1: Has the Defender policy reached the device? Our goal here is to make sure that policy arrived on the endpoint, before a policy can be applied, it must first be successfully delivered to the device. Before Defender receive and apply it.\ngraph LR;\rmanagementTools[\"Management Tools\"] --\u003e Device --\u003e Defender\rWe can reverse the policy flow to check logs at each point: Defender, the local system, and the management tools. In this guide, we will focus on the Defender side troubleshooting.\ngraph RL;\rmanagementTools[\"Management Tools\"] --\u003e device[\"Device\u003cbr\u003e(GPResult/MDM Logs/etc)\"] --\u003e defender[\"Defender\u003cbr\u003e(MpRegistry logs)\"]\rStep 2: Collecting Defender MpRegistry.txt logs You can collect Defender logs, locally using the following command:\n\"%programfiles%\\Windows Defender\\mpcmdrun.exe\" -getfiles\rOnce collection finish, you will see the output path. Extract the cab file to find the MpRegistry.txt\nTip\rFor remote collection of Defender Logs tips, you can visit this page.\nStep 3: Analyzing MpRegistry.txt - What to Look For MpRegistry logs have 4 main sections, you can see them in the screenshot:\nEffective policy -\u003e Policy that is currently applied System Policy -\u003e Policy from GPO/SCCM/Defender Portal MDM Policy -\u003e Policy from Intune Preferences -\u003e Policy set up locally (Set-MpPreference or UI) Info\rIt is advisable to use tools like Notepad++ to dig into MpRegistry.txt\nNext, you will need to know what is the registry name of the policy you are applying.\nIn my example here, I will be checking ASR Rules that I set from the Defender portal - Block Adobe Reader from creating child processes with GUID 7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c.\nInfo\rIf you are unsure of the Registry name, I usually check them in this GP Search site for the keyword, and look for the Value section.\nClick for example, regkey for Configure scanning of network files is DisablescanningNetworkFiles\rThen use Notepad++ to search the following, with “Regular Expression” option:\neffective policy|system policy|mdm policy|preferences|7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c\rYou will find the search result, showing the policy is indeed under effective policy + system policy. This means, from system policy (GPO/SCCM/Defender Portal), Defender received the policy. And successfully applied the configuration (to effective policy) : Wrapping Up: Know What is Applied and What is Not With this knowledge, now you should be able to verify what configuration/policy is active on the Defender local side. Whether or not there are policy conflict coming from different sources.\nMpRegistry.txt troubleshooting is only useful, if the configuration from Management Tools reached the endpoint. Meaning, you should be able to see them in system policy or mdm policy. If you are unable to see them under system policy/mdm policy, it means the configuration/policy is not delivered successfully into the endpoint. We will cover more on this scenario troubleshooting in the future.\nThere are very rare scenario you will see configuration in either system policy, mdm policy or preferences, however you don’t see it under the effective policy. In this scenario always remember to make sure Defender Platform is up to date, and open a Support Ticket to MS.\nTip\rLastly, if you are familiar with Get-MpPreference, now you know, it is actually reflecting the value of effective policy in MpRegistry.txt.",
    "description": "How to read MpRegistry.txt and troubleshoot Defender policy and configuration deployment",
    "tags": [
      "Defender",
      "Troubleshooting",
      "Mpregistry",
      "Windows"
    ],
    "title": "Tracking Defender Policy Deployment with Logs",
    "uri": "/blog/defender/001.mpregistry/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: API",
    "uri": "/tags/api/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Defender",
    "uri": "/tags/defender/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Isolation",
    "uri": "/tags/isolation/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Live Response",
    "uri": "/tags/live-response/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: LogicApp",
    "uri": "/tags/logicapp/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: MDE Client Analyzer",
    "uri": "/tags/mde-client-analyzer/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Mpregistry",
    "uri": "/tags/mpregistry/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sentinel",
    "uri": "/tags/sentinel/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Troubleshooting",
    "uri": "/tags/troubleshooting/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Thanks for visiting — I’m Novian 👋\nI work as a Technical Lead, specializing in Microsoft Defender XDR. Most of my day is spent untangling complex Defender behaviors and helping others understand how to make the product work effectively in real-world environments.\nAlong the way, I’ve gained a deep understanding of how security products operate — and that hands-on experience has fueled my interest in cybersecurity.\nThis site is my portfolio — a place to:\nShowcase my certifications and experience Share hands-on knowledge from the field Document my learning journey in cybersecurity Explore more from the Navigation Menu.",
    "description": "Thanks for visiting — I’m Novian 👋\nI work as a Technical Lead, specializing in Microsoft Defender XDR. Most of my day is spent untangling complex Defender behaviors and helping others understand how to make the product work effectively in real-world environments.\nAlong the way, I’ve gained a deep understanding of how security products operate — and that hands-on experience has fueled my interest in cybersecurity.\nThis site is my portfolio — a place to:",
    "tags": [],
    "title": "Welcome",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Windows",
    "uri": "/tags/windows/index.html"
  }
]
