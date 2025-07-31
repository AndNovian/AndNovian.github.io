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
    "content": "Tips and trick knowledge about MS Defender and related products. Tracking Defender Policy Deployment with Logs\rLive Response to Remotely Collect Defender Logs",
    "description": "Tips and trick knowledge about MS Defender and related products. Tracking Defender Policy Deployment with Logs\rLive Response to Remotely Collect Defender Logs",
    "tags": [],
    "title": "Microsoft Defender",
    "uri": "/blog/defender/index.html"
  },
  {
    "breadcrumb": "Blog Post \u003e\u003e MS Defender",
    "content": "When deploying Defender policies like Real-Time Protection, ASR Rules, or Scheduled Scan via Intune, GPO, or the Defender Portal, we want an assurance that those settings actually reached the endpoint. In this guide, we’ll walk through how to use MpRegistry.txt — a powerful local Defender log file — to verify if a policy was received and applied, and how to troubleshoot common policy delivery issues.\nThis guide will be focused at explaining Defender logs called MpRegistry.txt, that will show you how Defender is receiving the policy, and applied policy.\nThis guide will help you troubleshoot the following scenarios:\nYou have applied Defender Policy (such as Real Time Protection, Cloud Protection, or ASR Rules), but aren’t sure if the device received it. You have applied Defender Policy , but it is not being enabled/disabled per your config. You’re getting errors like “This setting is managed by your administrator” MDE still shows Security Recommendations even after you’ve applied fixes Scope of this guide:\nWindows Client and Windows Server running Windows Defender Step 1: Has the Defender policy reached the device? Our goal here is to make sure that policy arrived on the endpoint, before a policy can be applied, it must first be successfully delivered to the device. Before Defender receive and apply it.\ngraph LR;\rmanagementTools[\"Management Tools\"] --\u003e Device --\u003e Defender\rWe can reverse the policy flow to check logs at each point: Defender, the local system, and the management tools. In this guide, we will focus on the Defender side troubleshooting.\ngraph RL;\rmanagementTools[\"Management Tools\"] --\u003e device[\"Device\u003cbr\u003e(GPResult/MDM Logs/etc)\"] --\u003e defender[\"Defender\u003cbr\u003e(MpRegistry logs)\"]\rStep 2: Collecting Defender MpRegistry.txt logs You can collect Defender logs, locally using the following command:\n\"%programfiles%\\Windows Defender\\mpcmdrun.exe\" -getfiles\rOnce collection finish, you will see the output path. Extract the cab file to find the MpRegistry.txt\nTip\rI will share more for remote collection of Defender logs, stay tuned!\nStep 3: Analyzing MpRegistry.txt - What to Look For MpRegistry logs have 4 main sections, you can see them in the screenshot:\nEffective policy -\u003e Policy that is currently applied System Policy -\u003e Policy from GPO/SCCM/Defender Portal MDM Policy -\u003e Policy from Intune Preferences -\u003e Policy set up locally (Set-MpPreference or UI) Info\rIt is advisable to use tools like Notepad++ to dig into MpRegistry.txt\nNext, you will need to know what is the registry name of the policy you are applying.\nIn my example here, I will be checking ASR Rules that I set from the Defender portal - Block Adobe Reader from creating child processes with GUID 7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c.\nInfo\rIf you are unsure of the Registry name, I usually check them in this GP Search site for the keyword, and look for the Value section.\nClick for example, regkey for Configure scanning of network files is DisablescanningNetworkFiles\rThen use Notepad++ to search the following, with “Regular Expression” option:\neffective policy|system policy|mdm policy|preferences|7674ba52-37eb-4a4f-a9a1-f0f9a1619a2c\rYou will find the search result, showing the policy is indeed under effective policy + system policy. This means, from system policy (GPO/SCCM/Defender Portal), Defender received the policy. And successfully applied the configuration (to effective policy) : Wrapping Up: Know What is Applied and What is Not With this knowledge, now you should be able to verify what configuration/policy is active on the Defender local side. Whether or not there are policy conflict coming from different sources.\nMpRegistry.txt troubleshooting is only useful, if the configuration from Management Tools reached the endpoint. Meaning, you should be able to see them in system policy or mdm policy. If you are unable to see them under system policy/mdm policy, it means the configuration/policy is not delivered successfully into the endpoint. We will cover more on this scenario troubleshooting in the future.\nThere are very rare scenario you will see configuration in either system policy, mdm policy or preferences, however you don’t see it under the effective policy. In this scenario always remember to make sure Defender Platform is up to date, and open a Support Ticket to MS.\nTip\rLastly, if you are familiar with Get-MpPreference, now you know, it is actually reflecting the value of effective policy in MpRegistry.txt.",
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
    "breadcrumb": "",
    "content": "Professional Certifications Microsoft Certified: Security Operations Analyst Associate (SC-200) Deep knowledge of Microsoft Defender XDR stack: MDE, MDI, MCAS/MDCA, MDC and Sentinel Skills: Incident response, threat hunting, KQL, Defender XDR Hands on Experience:\nKQL queries for threat detection, hunting, and configuration auditing Setting up Microsoft Sentinel, and Defender XDR deployment Automated response workflows using Logic Apps, Powershell and Python with API integrations This certification reflects not just what I studied, but the skills I applied daily while helping customers improve their security operations.\nAssociate of ISC2 Passed the rigorous ISC2 exam, meeting the knowledge requirements across all 8 domains related to Information Systems Security Currently accumulating the required years of professional experience in related domains to obtain the full certification by Jan 2026 This recognition reflects my long-term commitment to the field of cybersecurity and continuous professional growth — not just passing exams, but applying and sharing knowledge for the public goods.\nLearning Certifications Fundamental Coding Interview Prep with Python Strengthened core Python skills with a focus on loops, string operations, and type conversions Hands-on experience implementing basic and advanced algorithms",
    "description": "Professional Certifications Microsoft Certified: Security Operations Analyst Associate (SC-200) Deep knowledge of Microsoft Defender XDR stack: MDE, MDI, MCAS/MDCA, MDC and Sentinel Skills: Incident response, threat hunting, KQL, Defender XDR Hands on Experience:\nKQL queries for threat detection, hunting, and configuration auditing Setting up Microsoft Sentinel, and Defender XDR deployment Automated response workflows using Logic Apps, Powershell and Python with API integrations This certification reflects not just what I studied, but the skills I applied daily while helping customers improve their security operations.",
    "tags": [],
    "title": "Credentials",
    "uri": "/credentials/index.html"
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
    "breadcrumb": "",
    "content": "You can reach me on:\nEmail: Click to Copy Email\rSocial: LinkedIn Reddit",
    "description": "You can reach me on:\nEmail: Click to Copy Email\rSocial: LinkedIn Reddit",
    "tags": [],
    "title": "Contact",
    "uri": "/contact/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Welcome to my blog. I will be updating regularly and will keep it updated. MS Defender\rTracking Defender Policy Deployment with Logs\rLive Response to Remotely Collect Defender Logs",
    "description": "Welcome to my blog. I will be updating regularly and will keep it updated. MS Defender\rTracking Defender Policy Deployment with Logs\rLive Response to Remotely Collect Defender Logs",
    "tags": [],
    "title": "My Blog Sharing",
    "uri": "/blog/index.html"
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
    "title": "Tag :: Live Response",
    "uri": "/tags/live-response/index.html"
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
