!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(145),i=[t];i.push(n(147)),i.push(n(153)),i.push(n(156)),i.push(n(159)),i.push(n(161)),i.push(n(171)),i.push(n(175)),i.push(n(177)),i.push(n(180)),i.push(n(183)),i.push(n(187)),i.push(n(190)),i.push(n(194)),i.push(n(197)),i.push(n(201)),i.push(n(205)),i.push(n(210)),i.push(n(212)),i.push(n(213)),i.push(n(214)),i.push(n(215)),i.push(n(218)),i.push(n(222)),i.push(n(227)),i.push(n(228)),i.push(n(230)),i.push(n(231)),h.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(80),a=n(20),o=n(16);n(124);var s=o.get("stores/directive"),u=n(86);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(127),d=n(114),f=n(128),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["9835610235"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "JKidd Attribute Setting", "bucketingStrategy": null, "variations": [{"id": "10162090038", "actions": [{"viewId": "9835610235", "changes": [{"dependencies": [], "type": "custom_code", "id": "58D2330B-A5D7-4582-A2AC-9D98914400A1", "value": function($){if(window.NYToptly.jkidd){
window["optimizely"].push({
  type: "user",
  attributes: {
    isLoggedIn: NYToptly.jkidd.user.isLoggedIn,
    user_type_jk: NYToptly.jkidd.user.type
  }
});
}
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10162760046", "integrationSettings": null}], "id": "10151050017", "weightDistributions": null, "name": "[Support] JKIDD Attribute Setting_", "groupId": null, "commitId": "10194064123", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10162760046", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8185280121"], "experiments": [{"weightDistributions": null, "audienceName": "[Support] Mobile Viewport,[Support] NYT5 Meter Hit Gateway ", "name": "[Support] Mobile Viewport and [Support] NYT5 Meter Hit Gateway ", "bucketingStrategy": null, "variations": [{"id": "10440140045", "actions": [{"viewId": "8185280121", "changes": [{"dependencies": [], "type": "custom_code", "id": "FDF9A746-2C40-4BFC-8589-EF08A1338B84", "value": function($){window.location.href = 'https://www.nytimes.com/subscriptions/Multiproduct/mobilegateway/index.html';
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "10397259593", "10424763006"], "changes": null, "id": "10416743592", "integrationSettings": null}], "id": "10416664100", "weightDistributions": null, "name": "[Support] Mobile Viewport NYT5 Gateway Redirect", "groupId": null, "commitId": "10433853487", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10416743592", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "NYT5 Cross-Project Bucketing ", "bucketingStrategy": null, "variations": [{"id": "10830183203", "actions": [{"viewId": "8263601258", "changes": [{"name": "Cross-Platform Bucketing Extension", "config": {"text": "My Butterbar"}, "id": "0B56BFC5-4C72-47D4-BB0B-8EE389F2488A", "dependencies": [], "type": "widget", "widget_id": "10826354007"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10839330197", "integrationSettings": null}], "id": "10797588913", "weightDistributions": null, "name": "[Support] Cross-platform Bucketing", "groupId": null, "commitId": "10931784624", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10839330197", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] exo_* does not exist", "name": "[Geo] US or ([Cookie] exo_* does not exist)", "bucketingStrategy": null, "variations": [{"id": "8470320532", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "CBA5DCC7-3F06-4C22-889C-D723162E14EC", "value": function($){var visitor = optimizely.get('visitor');
	if (visitor.location != undefined && (visitor.custom === undefined || visitor.custom['8442630948'] === undefined && visitor.custom['8442321393'] === undefined)) {
		console.log('evaluating function');
		var geo_macro, geo_micro;
		var country = visitor.location.country;
		var eurozone = ['AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'NL', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'SE', 'CH'];
		if (country === "US") {
			geo_macro = "US";
			switch (visitor.location.region) {
				case 'CA':
					geo_region = 'California';
					break;
				case 'NY':
					geo_region = 'New York';
					break;
			}
		} else {
			geo_macro = "INYT";
			if (country === 'GB') {
				geo_region = 'United Kingdom';
			} else if (country === 'CA') {
				geo_region = 'Canada';
			} else if (country === 'AU') {
				geo_region = 'Australia';
			} else if (country === 'DE') {
				geo_region = 'Germany';
			} else if (country === 'IN') {
				geo_region = 'India';
			} else if (eurozone.indexOf(country) !== -1) {
				geo_region = 'Eurozone';
			}
		}
		window["optimizely"].push({
			type: "user",
			attributes: {
				geo_macro: geo_macro,
				geo_region: geo_region
			}
		});
	};
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "7814230912", "9030630106"], "changes": null, "id": "8458725926", "integrationSettings": null}], "id": "8460385332", "weightDistributions": null, "name": "[Support] Geo Attribute Setting", "groupId": null, "commitId": "9870718317", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8458725926", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] fbpx does NOT exist,[Segment] All EDU: *all* segments except K12,[Cookie] exo_* does not exist,[Geo] US", "name": "Facebook Event Pixel: EDU", "bucketingStrategy": null, "variations": [{"id": "8463645112", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/68609c3723147a01e68838b045d5ee6aa607f8fc7396b6d243208aea6948e5cc.js", "dependencies": [], "id": "C0608E8B-4D65-483C-95EE-AAC0DECF4398"}]}], "name": "Facebook Event Pixel: EDU (Added US only on 5/25/18 - GDPR)"}], "audienceIds": ["and", "8471930223", "6679643984", "9030630106", "7814230912"], "changes": null, "id": "8455666309", "integrationSettings": null}], "id": "8461617302", "weightDistributions": null, "name": "EXO - Facebook Event Pixels", "groupId": null, "commitId": "10764292999", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8455666309", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"11081220413": {}, "9497090382": {}, "9997435071": {}}, "integrationStringVersion": null, "viewIds": ["10522331941", "4128620616", "4129021553", "4137230627", "6252880791", "8179870018", "8185280121", "8187250053", "8309420148", "8635391841", "8686224588"], "experiments": [{"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] Test Danny 1", "name": "Force-default Killset | TESTING danny exo_danny", "bucketingStrategy": null, "variations": [{"id": "9859641353", "actions": [{"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "C0462101-9B42-44AA-921B-87DDB3E8B2DB", "value": function($){console.log('Modified Gateway Killset to force default');
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "6992450319", "8138730582"], "changes": null, "id": "9865780727", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Dayparting] Welcome Killset for US Homepage,[Cookie] exo_* does not exist", "name": "Killset: US Welcome Ad OFF | US Geo", "bucketingStrategy": null, "variations": [{"id": "8286643761", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8340731813", "9030630106"], "changes": null, "id": "8289681526", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Dayparting] Welcome Killset for INTL Homepage (WW ex US, INYT),[Cookie] exo_* does not exist", "name": "Killset: Intl. Welcome Ad OFF | WW Geo", "bucketingStrategy": null, "variations": [{"id": "8316935751", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8331673235", "9030630106"], "changes": null, "id": "8328272359", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] Newsletter - opted out / not opted in,[Subscriber Type] Subs ,[Cookie] exo_* does not exist", "name": "Subs - WAT | Bar1 | Retention: Newsletter Opt-in | 2017-04-03", "bucketingStrategy": null, "variations": [{"id": "8305267918", "actions": [{"viewId": "4128620616", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/87b4ab8f6a879b3d425165c028a6139c8dbcee89cde12397da05ddcd50afc9b5.js", "dependencies": [], "id": "CB1C62EA-6474-4B29-AA33-FE43041D43AE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-12273 Opt-in \"Keep up w The Times\" - Anchor 1x / yr"}], "audienceIds": ["and", "8310130736", "6696333431", "9030630106"], "changes": null, "id": "8307281703", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_test_optly", "name": "[Support] Event Debugging USGM BAU | TESTING DD - exo_test_optly", "bucketingStrategy": null, "variations": [{"id": "10013571985", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/024a68cde0717d3205963965811515a69df5884dba0c75785df253165668307e.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/161101c9abfd199f1efe6af5bcd63d60e697c4b49a2fbbb8dfa986e4f7fb177d.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8HYGB.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/d9d87e6d29fa7eb7b9690f1f399f47f4e19bb14655b026d89619194c7e2471be.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/a3ef981a8fec446c85c18d5147ed2d88e1f9fb8ba1ffb5c645900f9478778ceb.js", "dependencies": [], "id": "1E1283CF-D6D7-4749-B886-64FA9D46747A"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "06721534-44FD-472C-BA21-2F64A9B24707"}]}], "name": "BAU: $9.99, navy blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "9925984026"], "changes": null, "id": "10028310450", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting] HD Grace,[Cookie] GraceViewed does not exist,[Subscriber Type] Subs ,[Cookie] exo_* does not exist", "name": "Subs | Welcome, Anchored | Update Payment Info | HD In-grace - WAT | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8345314011", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/0130b6155747ff0fcf585f63c05ce5260945a9fd3546ab87f2547db2b2c4456b.js", "dependencies": [], "id": "F5915F24-4135-46C5-867E-5B50A25C8018"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/74411efb48d5a2b6fbb87f638651c921f0854c4a45fbbcbf514e2a2c8d5d26c1.js", "dependencies": [], "id": "65B1E198-CF0B-48C4-BD3D-8C3B50B3DC8A"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | HD In-grace | Welcome, Anchored | 6QKLR"}], "audienceIds": ["and", "7877803306", "8350622915", "8354152464", "6696333431", "9030630106"], "changes": null, "id": "8349521001", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] In Grace, NOT HD (i.e. any Digital Subscription),[Cookie] GraceViewed does not exist,[Cookie] exo_* does not exist", "name": "Subs | Welcome, Anchored | Update Payment Info | Digi In-grace | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8388432711", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/d90cf7edd54adcadb434b378fc767a6e9713b0ea5bb10b6ebefe8ff08e830ed2.js", "dependencies": [], "id": "C8EA3E99-0E0B-4A00-AA69-C12829DFDFE1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/7a933b436fcafa0bf16ea3ee712ccf036ae58de369c072c71326b8d444effd45.js", "dependencies": [], "id": "791732C1-BB4D-4694-912B-B74071A90CAC"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | Digi In-grace | Welcome, Anchored | 666LW"}], "audienceIds": ["and", "8379916476", "8354152464", "9030630106"], "changes": null, "id": "8385456763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[Bundle] ADA_CR or MAX_ADA_CR", "name": "Subs | Welcome Ad | Crossword | ADA_CR, MAX_ADA_CR only | 2017-08-23 - ongoing", "bucketingStrategy": null, "variations": [{"id": "8508466572", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/537904bb7da0c3a85610458d54034fa7478bb04847c05b632b265df18c516bed.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-16342 Crossword Welcome Ad | 1x / lifetime"}], "audienceIds": ["and", "9030630106", "8612260110"], "changes": null, "id": "8512411082", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting] HD Grace,[Subscriber Type] Subs ,[Cookie] exo_* does not exist", "name": "Subs | Bar1 | Update Payment Info | HD In-grace - WAT | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8347071348", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/f0c94b1972dfea2cdeb9e2c7b3042ef8e4ff502d2bca33cd0ae11b8cb6879805.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | HD In-grace | Bar1 | 6QKLW"}], "audienceIds": ["and", "7877803306", "8350622915", "6696333431", "9030630106"], "changes": null, "id": "8350705198", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs ,[cookie] aaNLOptIn DOES NOT exist,[WAT] Newsletter - opted out / not opted in,[Cookie] exo_* does not exist", "name": "Subs - WAT | Anchor | Retention: Newsletter Opt-in | 2017-12-15", "bucketingStrategy": null, "variations": [{"id": "9835184408", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/eeee6cc3269616e1fe936604276c111c3c992b59a5ba1c99de9103e2371b3502.js", "dependencies": [], "id": "24FA3526-A276-42AA-A7AD-0A40EA45AD4E"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "MARO-262 Opt-in \"Keep up w The Times\" - Anchor 1x / yr"}], "audienceIds": ["and", "6696333431", "9839421060", "8310130736", "9030630106"], "changes": null, "id": "9821091867", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_testing_scaffold=true,[Subscriber Type] Non-Subs", "name": "dev_scaffold exo_testing_scaffold", "bucketingStrategy": null, "variations": [{"id": "8550653286", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/de83ee1a5657cb59753251cd9c79aba6e87424a5581f2895506d2894c2aa8fb8.js", "dependencies": [], "id": "00D8BCD5-C4E7-4EB8-83AD-99D868DF4E8D"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/af33c33b7af4458cd441d107a8bdbe1b3a34335a7f0178977bed0524b783a21b.js", "dependencies": [], "id": "7A4EE910-CDE8-41AE-84CE-F669096E6A81"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/913e5b413a7b3a517c32679656cd8ba58ce790aa582ba3ffa525965904cee7a5.js", "dependencies": [], "id": "9068428E-4E7A-416F-8CF1-47359D9B75E5"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/ddb098d8980b8fde4889e3c62e63414c0328b11542f2fecaa621fe44b3267b75.js", "dependencies": [], "id": "517C7C35-44E7-4B8B-ADE5-7629D28A860C"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8544714400", "6992450319"], "changes": null, "id": "8544813328", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "HD Subs (E and H),[Cookie] bar1UserHubCheck DOES NOT exist,[Cookie] exo_* does not exist", "name": "Subs | Bar1 | User Hub | HD Subs only | 2017-12-07", "bucketingStrategy": null, "variations": [{"id": "9263222968", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/35d613f70dfab4cb47bcb6ff3dd94b59e626c6b6874437db3f476cc21465a531.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-18139 - Quicker Easier Smarter, Light blue border, blue btn: Explore Account"}], "audienceIds": ["and", "9416124035", "9725853419", "9030630106"], "changes": null, "id": "9263113238", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] exo_* does not exist,[Support] JKIDD Logged-out Sub", "name": "Subs | Logged-out Subs via JKIDD | US Geo | 2018-02-27 \u2013\u00a0ongoing", "bucketingStrategy": null, "variations": [{"id": "10367733195", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/6f1dcda203cad22999bed269b81cce99d7de77dbe5bbc7cfed54ece56971c963.js", "dependencies": [], "id": "4D8F7AD2-B8E7-45A0-AF37-36F79F323580"}, {"src": "/actions/6f1dcda203cad22999bed269b81cce99d7de77dbe5bbc7cfed54ece56971c963.js", "dependencies": ["4D8F7AD2-B8E7-45A0-AF37-36F79F323580"], "id": "1F28F7EC-7AF9-4887-8A17-B178C8AEB501"}, {"src": "/actions/6f1dcda203cad22999bed269b81cce99d7de77dbe5bbc7cfed54ece56971c963.js", "dependencies": ["1F28F7EC-7AF9-4887-8A17-B178C8AEB501"], "id": "C05B7A38-F858-4E7E-A302-4E5924BE13FC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/04cedb6e309825cca482e16255c074e9b2853fe4ea147be618d390ce417d10c5.js", "dependencies": [], "id": "BB5CBAB4-3D3D-4702-B4CE-EEBA93325B3D"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "44CEA269-8F4C-4FDF-AA17-207FB94F6D12"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/8476d0ebec2b9d2600bc126f4d3090b07fd6277c2a9f61b9ff105000503579a2.js", "dependencies": [], "id": "24802A83-0A4C-4BAA-8B4F-B72DE4E06FAA"}]}, {"viewId": "8309420148", "changes": [{"dest": "http://www.nytimes.com/marketing/assets/optly/13064/nyt2017_loggedoutsub_mobilegateway_13064.html", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "DD78BBEA-4DA3-4632-A18F-B1FA5C829A94"}]}, {"viewId": "4129021553", "changes": [{"name": "Killset", "config": {"placement_name": "Bar 1"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "0FED52A7-66DD-4353-9B63-89430F5AA4B3"}]}], "name": "US Logged-out"}], "audienceIds": ["and", "7814230912", "9030630106", "10190723693"], "changes": null, "id": "10395370782", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] WW ex US,[Cookie] exo_* does not exist,[Support] JKIDD Logged-out Sub", "name": "Subs | INTL Logged-out Subs via JKIDD | WW Geo | 2018-02-28 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10366694755", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/601681e36c9f3a2c6a5fd7714fd8599fc5685f9367e0b1b60e29f3730bee28dc.js", "dependencies": [], "id": "4D8F7AD2-B8E7-45A0-AF37-36F79F323580"}, {"src": "/actions/601681e36c9f3a2c6a5fd7714fd8599fc5685f9367e0b1b60e29f3730bee28dc.js", "dependencies": ["4D8F7AD2-B8E7-45A0-AF37-36F79F323580"], "id": "1F28F7EC-7AF9-4887-8A17-B178C8AEB501"}, {"src": "/actions/601681e36c9f3a2c6a5fd7714fd8599fc5685f9367e0b1b60e29f3730bee28dc.js", "dependencies": ["1F28F7EC-7AF9-4887-8A17-B178C8AEB501"], "id": "C05B7A38-F858-4E7E-A302-4E5924BE13FC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/39692ad401091f54e251e81d7962b205487f02dbe6dfd0ecbd004a795ef5dec5.js", "dependencies": [], "id": "FAA77829-A811-4363-B8CF-C9532A578078"}]}, {"viewId": "4137230627", "changes": [{"name": "Killset", "config": {"placement_name": "Interstitial"}, "id": "11427226-229B-4623-8A16-6479E27D441D", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "64F736D5-874F-488D-AB9C-93924A405D66", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8185280121", "changes": [{"name": "Killset", "config": {"placement_name": "Growl"}, "id": "826F83FC-0751-4C6E-8DCC-80917180A477", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8309420148", "changes": [{"dest": "http://www.nytimes.com/marketing/assets/optly/13064/inyt2017_loggedoutsub_mobilegateway_13064.html", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "466A39A8-9E58-44F1-9B38-C5EDB08F8FC5"}]}, {"viewId": "4129021553", "changes": [{"name": "Killset", "config": {"placement_name": "Bar 1"}, "id": "5C711539-F423-4C13-82E4-5AA0A94B1123", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Logged-out Subs - Intl"}], "audienceIds": ["and", "7209740780", "9030630106", "10190723693"], "changes": null, "id": "10400102443", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[URL Protocol] Detect HTTP,[Cookie] exo_* does not exist", "name": " Nons | USGM | August BAU (hardcoded Gateway for http articles) | 2018-01-10", "bucketingStrategy": null, "variations": [{"id": "9855818012", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/f1a6c745fe7ad70e1a6fede5c77ce1c3f59fa6f3f96a0a31a4b224ef93164011.js", "dependencies": [], "id": "FDF34802-BAC9-4852-BFBB-F790F5946759"}]}, {"viewId": "4128620616", "changes": []}], "name": "BAU: $9.99, navy blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "9971023501", "9030630106"], "changes": null, "id": "9996931686", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[BlueKai] INTL Formers INYT - 221249 and NOT 221248,[Geo] Rest of World (ex Canada, Australia, UK, Europe, India, US),[Geo] NOT India,[Cookie] exo_* does not exist", "name": "Nons | INYT | Behavioral Targeting: Formers | ROW (ex US,UK.Can,Aus,Eu,India) | 2018-03-14", "bucketingStrategy": null, "variations": [{"id": "10421133245", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/01174d92135f9645f811abe363a9bbfc011f17ef90c2d303343c4049cd038cf1.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/9932e42ae9c42774f2fd1b78b84820156d19c6a2d8fdd35f95005ee6316d787b.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/1fff84db363e2445a405aec50c392eebe9e341268b5ca1c1bc5acbc9e23e1dd1.js", "dependencies": [], "id": "4AE81CEC-2AED-45C8-875F-E20A50A3738B"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/0383dce3fe743177c556624e299ca4ecb9ef0e6c6b4f1aca2e96bf3b3e39e980.js", "dependencies": [], "id": "EC1C8223-B372-4855-A109-DEEC18A4DEB9"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "273F9C16-63A3-4ACB-B249-565BFCDE456A"}]}], "name": "WF-60500 - \"This should bring you back up to speed.\" - grey bg, black text, $1 a week, lp87JWR "}], "audienceIds": ["and", "6992450319", "8281592112", "10193678447", "8325672904", "9030630106"], "changes": null, "id": "10426581177", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "HD Subs (E and H),[Cookie] aauHub DOES NOT exist", "name": "Subs | USGM | Anchor | User Hub - text alignment fix, cookie check | HD Subs only | 2018-02-08", "bucketingStrategy": null, "variations": [{"id": "10281790520", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/b080aee48dff02c9c8f81dc79d48114828391a5a272805b34cddcd4bfbff6ba3.js", "dependencies": [], "id": "9A6806A0-BB6B-40CA-A6E1-1FF5AE042317"}]}], "name": "CRS-18441 - Quicker. Easier. Smarter - grey bg"}], "audienceIds": ["and", "9416124035", "9838502184"], "changes": null, "id": "10239735178", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10322572103", "endOfRange": 5000}, {"entityId": "10344271905", "endOfRange": 10000}], "audienceName": "Digi Subs,[Cookie] aauHubDigi DOES NOT exist", "name": "Subs | USGM | User Hub - cookie check | Digi Subs only | 2018-02-22", "bucketingStrategy": null, "variations": [{"id": "10322572103", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/c89546278b1efbb84d9a7fd77549b6fd42e091399a0af28aafaa5c1a01f6b528.js", "dependencies": [], "id": "80762BCA-9EB9-45AE-BDF6-F15085D96B07"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/0eec3f15564c2bf66dfa65cb308effaeed1e78ad394216e8a4009e55a7cb35d2.js", "dependencies": [], "id": "9A6806A0-BB6B-40CA-A6E1-1FF5AE042317"}]}], "name": "CRS-19156 - Quicker. Easier. Smarter - grey bg"}, {"id": "10344271905", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/7cacdf0acaec94809d10cbfdbcbc49eef5f6a79cb2f321577d9648edbdf5f820.js", "dependencies": [], "id": "CAF71308-FCA4-4AAB-A186-F8B10A24B0AD"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}], "name": "CRS-19156 - Explore your new account. - grey bg"}], "audienceIds": ["and", "10355580897", "10326117267"], "changes": null, "id": "10316062973", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10493156774", "endOfRange": 5000}, {"entityId": "10480516655", "endOfRange": 10000}], "audienceName": "[Cookie] exo_canada_australia_upsell_0319,[Geo] Canada, Australia or dev mode,[Subscriber Type] Non-Subs", "name": "abTest_canada_australia_upsell_0319 exo_canada_australia_upsell_0319", "bucketingStrategy": null, "variations": [{"id": "10493156774", "actions": [{"viewId": "8187250053", "changes": [{"src": "/actions/a528742c5a8b39dad8d4e2952a295c0394d70177b3846c64c2c7546ff686b195.js", "dependencies": [], "id": "15A0E444-B01F-406C-938C-C20FE8095B28"}]}], "name": "Control"}, {"id": "10480516655", "actions": [{"viewId": "8187250053", "changes": [{"src": "/actions/236c9ed91fc003e36bced295280d561107b7fe3f30745afc55d009587e94c204.js", "dependencies": [], "id": "2CF24005-E7F9-43D6-817F-E2F629B9C69C"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10482055439", "10306790465", "6992450319"], "changes": null, "id": "10460069676", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Page Targeting] Learning Network - All Articles/Pages,[Subscriber Type] Non-Subs,[Cookie] exo_* does not exist", "name": "Nons | Learning Network | BAU | 2017-04-03 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8307222151", "actions": [{"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/e1f764779831c4aa7457f399a4306878023fd4fb1d6142aae46c81f7cf78ed71.js", "dependencies": [], "id": "C5945546-1391-4B3E-A0B0-DCDCD144B219"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/63bef6c3bbd6aed8906a01f121beac135bd66b24c779d92c39a52fe55b3b7fe1.js", "dependencies": [], "id": "A3A75FC8-9EAF-402F-925C-7328EA400C42"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/7a2438e6d84e69cebb389db836c203c5f0a79f9c65a07230b90a0c45d2df0f86.js", "dependencies": [], "id": "A556216C-4339-44C1-8A78-F519EE02143A"}]}, {"viewId": "4137230627", "changes": []}], "name": "Learning Network | 69QLF_64JK8"}], "audienceIds": ["and", "8301992165", "6992450319", "9030630106"], "changes": null, "id": "8306482752", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] B2B w ADBLOCK flag,[Cookie] exo_* does not exist", "name": "Killset: B2B Users requesting ADBLOCK", "bucketingStrategy": null, "variations": [{"id": "8356674833", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/38a08b39ded1816ebb76f26f202543d2345853dc06c0dc1801041a797ccf95ce.js", "dependencies": [], "id": "E2CCFEA7-3E4E-48E9-B52B-B23552366EF6"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/3bf3ddcb7717095148370e52c21cf58e1eaec6f16ce6aa9b8e5b36e9d04fab1a.js", "dependencies": [], "id": "A03BDD55-8288-456B-889F-EF945CD2DD62"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/f3116b66e99720292de965a108d5814f5112ad883df575c4db4dc70bc3b9bc6e.js", "dependencies": [], "id": "88EC4AC0-2BD2-448F-9D5D-02A35A171848"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/750139890c0bb35e32ec39ad3bedfdb70f82fa315331f0c0aa6438adca955f7b.js", "dependencies": [], "id": "872E74E2-498F-4D93-9866-DC79EEB0BE75"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/92041004ab557c7fc2ef9b56613319d2bfbf45af53aaf2e668a929ba6c1f00ac.js", "dependencies": [], "id": "0D678A86-30F1-4614-BAD9-C11811778593"}]}, {"viewId": "8635391841", "changes": [{"src": "/actions/23c217e9e4f71e86b71f4e7cc0178fb26b5b91ac1c27964412db72e57790a278.js", "dependencies": [], "id": "8D008812-0CCA-4BFC-AF12-5AD5A8A4A16B"}]}], "name": "Killset: B2B Corp Site Licenses"}], "audienceIds": ["and", "8380850399", "9030630106"], "changes": null, "id": "8352043770", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[Page Targeting] All Interactives for Podcasts", "name": "Killset Anchor Ad on Interactives for Podcasts, e.g. Caliphate | 2018-04-12 \u2013\u00a0ongoing", "bucketingStrategy": null, "variations": [{"id": "10595312177", "actions": [{"viewId": "8179870018", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/5ce7e1c6b0986ab4d035b370ca78554699fad32a94761f8362279c51c5882ef9.js", "dependencies": [], "id": "A670C3A4-0D02-431F-A908-4AA0C7B308BD"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/a737598921f03688274a67069bea3839cdbe116cb4d8d8fc12005e9849f6a794.js", "dependencies": [], "id": "7FFF71D1-3B36-42ED-93ED-1F7A66BB2A26"}]}], "name": "EXO-61 Anchor Ad Killset"}], "audienceIds": ["and", "9030630106", "10560444139"], "changes": null, "id": "10563516977", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[BlueKai] INTL Formers INYT - 221249 and NOT 221248,[Geo] Canada, Australia or dev mode,[Cookie] exo_* does not exist", "name": "Nons | INYT | Behavioral Targeting: Formers | CAN/AUS | 2018-04-12", "bucketingStrategy": null, "variations": [{"id": "10588053797", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/31746a5ee6d32f4676e12a19e761a9c1ea54f6cf45daccd6473dc89c448c0a14.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/47b2bd54a1f04543ff6de2eb74525e6562b587f48423926a48947d3334320cc2.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/4ff06943306a1678a53f33bcfb433677ab3bd020a9aa09c9a113bb81d114ce90.js", "dependencies": [], "id": "4AE81CEC-2AED-45C8-875F-E20A50A3738B"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/3a3e12fa62163162707527a3d7affc6d20df9ad97aae65f1071ab169e2fafa8f.js", "dependencies": [], "id": "EC1C8223-B372-4855-A109-DEEC18A4DEB9"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "273F9C16-63A3-4ACB-B249-565BFCDE456A", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "WF-60500 - \"This should bring you back up to speed.\" - grey bg, black text - 50% off 1 year - lp87JWF"}], "audienceIds": ["and", "6992450319", "8281592112", "10306790465", "9030630106"], "changes": null, "id": "10592891414", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] nyt-gdpr=1,[Cookie] NYT-T does not exist (GDPR)", "name": "GDPR | EEA Geo (Euro plus others) | welcome | 2018-05-10 \u2013\u00a0ongoing", "bucketingStrategy": null, "variations": [{"id": "10604961399", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/aae1daf36fbb8c815832762d2b97e42714c8891509a59c406cfed0e091273376.js", "dependencies": [], "id": "E01543B8-372F-425F-B1C2-C5199458AC87"}]}, {"viewId": "8187250053", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "MEXP-8 GDPR Cookie \"Banner\" Messaging for NYT5"}], "audienceIds": ["and", "10646362745", "10649222910"], "changes": null, "id": "10619190559", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] UK only,[Cookie] exo_* does not exist,[BlueKai] INTL Formers INYT - 221249 and NOT 221248", "name": "Nons | INYT | Behavioral Targeting: Formers | UK only | 2018-03-14", "bucketingStrategy": null, "variations": [{"id": "10405258597", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/b66430f45ae84913c5dc775c58e9a0b848cb121fac3897b2ff602b6cc357076b.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b2a71e02c9f61f35e3b24d4ba6f8540c06e247a9267689be211e14e7ee00d736.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-60500 - \"This should bring you back up to speed.\" - grey bg, black text - \u00a31 a week - lp87JWU"}], "audienceIds": ["and", "6992450319", "10195315710", "9030630106", "8281592112"], "changes": null, "id": "10373149618", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[BlueKai] INTL Formers INYT - 221249 and NOT 221248,[geo] Europe excluding UK,[Cookie] exo_* does not exist", "name": "Nons | INYT | Behavioral Targeting: Formers | Europe (excluding UK) | 2018-04-12", "bucketingStrategy": null, "variations": [{"id": "10585921030", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/5bb6a082b2055b5ccc26aae43480e00c81bb52556f37603a4c569e35041a9052.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/966ee22300b7a68055b3584df2900cfd4adcdb324f5e9bc28b349c72f715313b.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-60500 - \"This should bring you back up to speed.\" - grey bg, black text - \u20ac1 a week - lp87JWU"}], "audienceIds": ["and", "6992450319", "8281592112", "10318320235", "9030630106"], "changes": null, "id": "10584391718", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_* does not exist,[BlueKai] Behavior Targeting - Formers", "name": "Nons | USGM | Behavioral Targeting: Formers | NO DCM TAGS | US Geo | 2018-02-28", "bucketingStrategy": null, "variations": [{"id": "10368942297", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7d1b79a28a6c98c2268138d52bbd09b20b749df63f9b52a105cad4b17f47c974.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/d77d9b1c62b9347582cab7d10e7c8bd1d6028ca94339f5bd0756af4733eeb52d.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-46978 - \"For the stories you missed yesterday. And the stories you don't want to miss tomorrow\" - grey bg, black text"}], "audienceIds": ["and", "6992450319", "7814230912", "8413422098", "9030630106", "10276280308"], "changes": null, "id": "10400500010", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[Segment] EXCLUDE All EDU - WAT, BlueKai,[BlueKai] Behavior Targeting - Abandoners,[Cookie] exo_* does not exist", "name": "Nons | USGM | Behavioral Targeting: LP Abandoners (BlueKai) | NO DCM TAGS | US Geo | 2018-02-28", "bucketingStrategy": null, "variations": [{"id": "10396300217", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/1eb850c8392e6561d80b052df41bd42b6ef63adc13cdc2ad82d1bbefe9cf2416.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/a35127ae6587726cbd968166b3d5e70692b69e2d081613ba1978567468865f35.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-46978 - Thought-provoking journalism. Action-inspiring valued. From 8.99/month. - Grey bg, black text,"}], "audienceIds": ["and", "6992450319", "7814230912", "8413422098", "10222278707", "9030630106"], "changes": null, "id": "10366072793", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_* does not exist,[BlueKai] Behavior Targeting - Highly Engaged", "name": "Nons | USGM | Behavioral Targeting: Engaged | NO DCM TAGS | US Geo | 2018-02-28", "bucketingStrategy": null, "variations": [{"id": "10366003204", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/bcc1544cf3326696c5b7409d053f0192bdfb80d1b272b3c49463d3448be903cd.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/5fd21944fea82f9b4db3f3655187f33b44752a7aaeb7059391a985b943e8de62.js", "dependencies": [], "id": "1B246BCB-DA2F-4860-89F3-D84EE9672625"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-46978 - \"Feel like you're missing out?\" - grey bg, black text"}], "audienceIds": ["and", "6992450319", "7814230912", "8413422098", "9030630106", "10189867646"], "changes": null, "id": "10368661135", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Geo] Rest of World (ex Canada, Australia, UK, Europe, India, US),[Geo] NOT India,[Cookie] exo_* does not exist", "name": "Nons | INYT | Feb. Price Update BAU | ROW (ex India, UK, Can, Eur, Aus) Geo | 2018-02-28 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10313163455", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/1e4085f2c03827b80e37115dce3f7812d4c679a3f1515f116afeedd304d0ba5e.js", "dependencies": [], "id": "52547610-D75B-41C3-9E8E-68EE5E84F552"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/833f6c7729a8d9399681eaad01a3c249836f907ebf3e558bdc6234a573018461.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/c89e7fe1987f4243a722438ffbca2f8ddbfebd1047f023e86237f02e2e37b606.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Green BG: Subscribe to debate - $1/wk lp87JWR"}], "audienceIds": ["and", "6992450319", "8413422098", "10193678447", "8325672904", "9030630106"], "changes": null, "id": "10311965207", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[geo] Europe excluding UK,[Cookie] exo_* does not exist", "name": "Nons | INYT | Price Update BAU (Euro) | Europe ex UK Geo | 2018-03-30 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10518623206", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/5d10c0c0aad9d741dbf10eab4144acb603a113b9da9c3ef8c8e588ca826d0617.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/f68c9fc89f55bac6d0f00d15cf9c13ee578fdeeef2bf82dee0f509fe297650e3.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Green BG: Subscribe to debate -  \u20ac1/wk lp87JWU"}], "audienceIds": ["and", "6992450319", "8413422098", "10318320235", "9030630106"], "changes": null, "id": "10514633810", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Geo] UK only,[Cookie] exo_* does not exist", "name": "Nons | INYT | Feb. Price Update BAU | UK Geo | 2018-02-28 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10315336373", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/a131f03942db81acce927546460d1c8e68e146dad26736d31e43df4a49ff3a3f.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/54ce28ef5302df8ec7d97d94ce89051942c3d0a5b9b9f84a7eebd00abc0490dc.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Green BG: Subscribe to debate - \u00a31/wk lp87JWU"}], "audienceIds": ["and", "6992450319", "8413422098", "10195315710", "9030630106"], "changes": null, "id": "10316258046", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_* does not exist,[Geo] Canada Only", "name": "Nons | INYT | Feb. Price Update BAU | Canada Geo | 2018-02-28 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10341134254", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/d8279fe10e6e14423cc6093b7571427bf0f663c482104a83db066482809f8655.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/182e7757a6bced462bab3d55199bedfb372620f5614cf4f12aa141b451576c8e.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Green BG: Subscribe to debate - 50% off 1 yr - lp87JWF"}], "audienceIds": ["and", "6992450319", "8413422098", "9030630106", "8329145104"], "changes": null, "id": "10334655219", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Geo] India,[Cookie] exo_* does not exist", "name": "Nons | INYT | August 2017 BAU | India Geo | 2017-11-10 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "9500350207", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/3a98db1b2dea5f28db37f5146a7f36e5043d2da923eb09293d4ff132d5862921.js", "dependencies": [], "id": "AC326D1A-EA0D-46FF-9702-91D1F9C75071"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/cd89077b7ffa2336a56ef1cd6f3780d8f06d38d7047465abef78719bc00f4cd5.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/1c719eed90e28f3017b4d71c26c5a882cf1145d0f2d330807b2f8b2fd827be87.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "INYT August BAU - green bg - Subscribe to debate - in-currency, iframe"}], "audienceIds": ["and", "6992450319", "8413422098", "8248972263", "9030630106"], "changes": null, "id": "9502840256", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Geo] Australia,[Cookie] exo_* does not exist", "name": "Nons | INYT | April BAU | Australia Geo | 2018-04-13 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10514841907", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/5d967a625afb76900cdf8351a3eb757b4c1aa937d850e199d15e8ba41a65388f.js", "dependencies": [], "id": "AAE0862E-A907-458F-BFE0-A9B8B6447A15"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/0aa9c032398099263b25c2202b443ed18a85c1af3dbe5530bce82c48bc8eef27.js", "dependencies": [], "id": "8B610310-154A-423C-B06E-5698FA0B27A7"}]}, {"viewId": "4128620616", "changes": []}], "name": "wf77180 beige bg, turqoise - 50% off 1yr - lp87JWF"}], "audienceIds": ["and", "6992450319", "8413422098", "7798550316", "9030630106"], "changes": null, "id": "10521831946", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Segment] All EDU: *all* segments except K12,[Geo] WW ex US,[Cookie] exo_* does not exist,[Page targeting] ex Interactives", "name": "Nons | EDU EDU_INTL | BAU: What Will Today | WW Geo | 2017-12-18 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "9705270487", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/542cbaf54b0c97816fac24145a4abf348da66ea85c4c7ce812d0d33713142c4f.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/e132f4e2fa64afb7a6c3d5f3bc6df2540e1482349b70c3af7094251c9fd24944.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/346d82de16a5db01c1535f10ddbbe93bc32d5bbc9f27cd655588ceaf5f5aba58.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/43f7f364ab27c8528b3debb499969fe42124026ccade19d5a4fbfb6b93caa945.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/edu/lp8LXQ6.html?mktgrfr=gw_mob&campaignId=6Y46F", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Blue bg with iPhone and iPad"}], "audienceIds": ["and", "6992450319", "6679643984", "7209740780", "9030630106", "10755622162"], "changes": null, "id": "9665483993", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] K12,[Cookie] exo_* does not exist,[Page targeting] ex Interactives", "name": "Nons | EDU: K12 only (WAT) | BAU: What Will Today - MARO-226_MC5 | 2017-09-27 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "9421872273", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/1023ebeafafc85436f7725c2021697d3ed2e0bdc1d6e00bce3873d3571eca189.js", "dependencies": [], "id": "5E19E592-D32D-4EF9-9492-8EB0B65E913E"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/49f6b0ce9ffeaaee0002701b8f00bf5755e935711108925f6f4bbeaaec701ee4.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/8f842275aec526c226b7e3b59d004f267d1b3f0a5fe76586c98e88451ef1c1a5.js", "dependencies": [], "id": "53B02125-D175-4486-9B61-158F6941851F"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/6974ec0ce00321ed28b7cec5655b424deffa7ed3c131cee6f7d8e52bae0ad558.js", "dependencies": [], "id": "ED8EFCC2-276F-46EC-9B4D-A7D250497611"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/edu/lp8RU8U.html?mktgrfr=gw_mob&campaignId=6Y498", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "CRS-17356 Blue bg with iPhone and iPad"}], "audienceIds": ["and", "6992450319", "7857642821", "9030630106", "10755622162"], "changes": null, "id": "9415403654", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] All EDU: *all* segments except K12,[Cookie] exo_* does not exist,[Page targeting] ex Interactives", "name": "Nons | EDU EDU_DOM | BAU | COLLEGE: What Will Today - MARO-226_MC5 | US Geo | 2017-12-18 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "9661572475", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/97702f8a31c9874b0f5f492365f65ba71c5231ae09d0bbb93a9acf30cea866c5.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/c20c4ab4b0d837b72eb2f672c1369f93ba897ca95784bc718b8a1243c7dcd7d5.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/69dc4694c25976a0a41df1d8625aa360896a71e8cefb0bdd5fe9d24488d5dea6.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/d2f637dddac4f33d96219df2612a23396af370588bce66598b153694cb0a979e.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8LQFK.html?mktgrfr=gw_mob&campaignId=6XU78", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "MARO-226 Blue bg with iPhone and iPad"}], "audienceIds": ["and", "7814230912", "6992450319", "6679643984", "9030630106", "10755622162"], "changes": null, "id": "9666363372", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[B2B] ASU - Arizona State University", "name": "Nons | B2B - Bar1/Welcome Ad for ASU | US Geo | 2018-05-23 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10753872143", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/886f3b3ce0491830c34ea19390c021593d59a7015167c6b4e9ad59f205d42dc9.js", "dependencies": [], "id": "261E3585-ABF6-43CC-9D55-EAE4610AE0B7"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/c20c4ab4b0d837b72eb2f672c1369f93ba897ca95784bc718b8a1243c7dcd7d5.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/7a6b5c5a50635a60fa253bbc84fdf8373a237b4ca1dac15f6d0eeaf7fb297f53.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/5fea1269311dfbd4c5baa0a1ade5d6b382c65da95b02482270db660e48eae381.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8LQFK.html?mktgrfr=gw_mob&campaignId=6XU78", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": []}], "name": "EXO-73 A.S.U. colors and messaging"}], "audienceIds": ["and", "6992450319", "10752722800"], "changes": null, "id": "10752981500", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[B2B] CUNY", "name": "Nons | B2B - Bar1/Welcome Ad for CUNY | US Geo | 2018-05-23 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10757542220", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0c5a059ac3d8e9e215a5dc31da1cce73f28ae0767a6cd603c5f0a8e8d106c5e7.js", "dependencies": [], "id": "845AC20E-E20B-4FA8-9945-581427E1B7F3"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/c20c4ab4b0d837b72eb2f672c1369f93ba897ca95784bc718b8a1243c7dcd7d5.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/706c24c00d7e5f8e53a285db559ba2ca897381e6ef63016c964158f2b5238cbc.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/c561e0a333d5cde227ed80c4b04ef5cb29c717fca0cf26d3711b92ec6e5510d3.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8LQFK.html?mktgrfr=gw_mob&campaignId=6XU78", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": []}], "name": "EXO-73 CUNY colors and messaging"}], "audienceIds": ["and", "6992450319", "10756862010"], "changes": null, "id": "10763431577", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[Subscriber Type] Non-Subs", "name": "Nons | Newsletter Signup (Regi Building): Morning Briefing | Homepage Native Promo | 2018-05-29 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "10753084590", "actions": [{"viewId": "8635391841", "changes": [{"src": "/actions/f3d9616599cbd332948dc0f9582534b83dac2dadb8d43d12bfb32da5b88cd4dc.js", "dependencies": [], "id": "FACAED7F-865A-4D39-A0CC-91F757545584"}]}], "name": "EXO-96 | Be sure to update the Redirect! | Experience: [Special] Homepage Native Promo campaign ID 6UXQ8 \u2192 Morning Briefing"}], "audienceIds": ["and", "9030630106", "6992450319"], "changes": null, "id": "10751995467", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "exo_maro403", "name": "Test_New_Extension", "bucketingStrategy": null, "variations": [{"id": "10725061381", "actions": [{"viewId": "8179870018", "changes": [{"name": "Welcome Ad -- Data Layer", "config": {"extra_js_2": "", "displayTime": 15, "session_cap": "1", "creator": "tph", "custom_js": "", "nytID": " testNewWelcomeAd", "session_cap_hours": "24", "freq_cap_number": "10", "click3": "", "full_html": "<div id=\"welc_supercontainer\" class=\"nytdGrowlUIContainer font-smoothing\">\n    <div id=\"welcomead_container\">\n        <a class=\"nytdGrowlNotifyCross\" data-et-element-name=\"close\" id=\"close_background\"></a>\n        <div id=\"welcomead_body\">\n            <a href=\"%%CLICKTHRU1%%\" id=\"cta-extended\" target=\"_blank\">\n                <div class=\"welcomeleft\">\n                    <div class=\"headline1\">Test New Extension</div>\n                    <div class=\"headline2\">Prep for primary season with\n                        <br>our political experts.</div>\n                    <img class=\"nyt_welcomead_logo\" src=\"https://mwcm.nyt.com/dam/mkt_assets/exo/img/nyt-logo-379x64-wht.svg\" alt=\"The New York Times\"\n                    />\n                </div>\n\n                <div class=\"welcomeright\">\n                    <div class=\"offertextheader\">\n                        The Times Sale\n                    </div>\n                    <div class=\"offertext\">50% off one year.</div>\n                    \n                    <div class=\"welcomead_cta\" data-et-element-name=\"cta\">SUBSCRIBE NOW</div>\n                </div>\n            </a>\n\n            <div class=\"welcomead_login\">\n                Already a Subscriber?\n                <a href=\"https://myaccount.nytimes.com/auth/login\">Log in</a>\n            </div>\n\n            <button type=\"button\" class=\"welc-close nytdGrowlNotifyCross\" data-et-element-name=\"close\" id=\"closeCross\" aria-disabled=\"false\">\n                <i class=\"icon\"></i>\n                <span class=\"visually-hidden\">Close this modal window</span>\n            </button>\n        </div>\n    </div>\n</div>", "extra_js_4": "", "extra_js_3": "", "messageType": "WelcomeAd", "closeSelector": ".nytdGrowlNotifyCross", "css": ".font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n#welc_supercontainer {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000000130;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.6)), to(white));\n  background-image: linear-gradient(rgba(255, 255, 255, 0.6) 0%, white 100%);\n  background: -ms-linear-gradient(rgba(255, 255, 255, 0.6) 0%, white 100%);\n  text-align: left;\n}\n\n@media screen and (max-width: 720px) {\n  #welc_supercontainer {\n    display: none !important;\n  }\n}\n\n#welcomead_container {\n  position: absolute;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 600px;\n  left: 0;\n  top: 134px;\n  z-index: 1000000130;\n}\n\n#welcomead_body {\n  width: 800px;\n  height: 320px;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1000000130;\n  background-size: 100% auto;\n  background-color: #fff;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n#welcomead_body #close_background {\n  display: block;\n  width: 100%;\n  height: 1080px;\n  position: absolute;\n}\n\n@media screen and (max-width: 800px) {\n  #welcomead_body {\n    width: 700px;\n  }\n}\n\n.welcomead_login {\n  color: #555555;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: -0.1px;\n  line-height: 1.11;\n  text-align: left;\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  cursor: pointer;\n}\n\n.welcomead_login a {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n#close_background {\n  display: block;\n  height: 1080px;\n  width: 100%;\n  position: absolute;\n}\n\n#instl_close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  z-index: 9999;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n#instl_close .subscriber-link {\n  padding-right: 25px;\n  font-size: 12px;\n}\n\n#instl_close .nytdGrowlNotifyCross {\n  position: absolute;\n  right: 0;\n  top: 2px;\n}\n\n#instl_close img {\n  width: 16px;\n  height: 16px;\n}\n\n#cta-extended {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-decoration: none;\n}\n\n.welc-close {\n  position: relative;\n  z-index: 9999;\n  -webkit-transition: background-color 0.2s ease-in;\n  transition: background-color 0.2s ease-in;\n  border-radius: 50%;\n  background-clip: padding-box;\n  font-size: 100%;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  border: none;\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  -webkit-appearance: button;\n  line-height: normal;\n  vertical-align: middle;\n}\n\n.welc-close .icon {\n  display: inline-block;\n  line-height: 0;\n  vertical-align: middle;\n  font-style: normal;\n}\n\n.welc-close:hover {\n  background-color: #333;\n}\n\n.welc-close .icon:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.welc-close .icon:after {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n\n.welc-close .icon:before,\n.welc-close .icon:after {\n  content: '';\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  top: 10px;\n  left: 6px;\n  width: 10px;\n  height: 2px;\n}\n\n.welcomead_cta {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  height: 30px;\n  background: #000;\n  font-size: 11px;\n  line-height: 30px;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px;\n  color: #fff;\n  width: 113px;\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.user-logged-in .welcomead_login {\n  display: none;\n}\n\n#welcomead_body {\n  background: #002a63;\n}\n\n#welcomead_body .welcomeleft {\n  position: relative;\n  float: left;\n  margin-left: 58px;\n}\n\n#welcomead_body .welcomeleft .headline1,\n#welcomead_body .welcomeleft .headline2 {\n  font-family: \"nyt-cheltenham\", georgia, \"times new roman\", times, serif;\n  font-weight: 300;\n  font-size: 31px;\n  letter-spacing: -0.01px;\n  line-height: 33px;\n}\n\n#welcomead_body .welcomeleft .headline1 {\n  color: #fff;\n  margin-top: 80px;\n}\n\n#welcomead_body .welcomeleft .headline2 {\n  color: #ff5c58;\n  margin-top: 4px;\n}\n\n#welcomead_body .welcomeleft .nyt_welcomead_logo {\n  width: 169px;\n  margin-top: 20px;\n}\n\n#welcomead_body .welcomeright {\n  position: relative;\n  float: left;\n  margin-left: 72px;\n}\n\n#welcomead_body .welcomeright .offertextheader {\n  margin-top: 92px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.01px;\n  line-height: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n#welcomead_body .welcomeright .offertext {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 26px;\n  color: #ff5c58;\n  margin-top: 10px;\n}\n\n#welcomead_body .welcomeright .q2urgency {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 27px;\n  color: #ff5c58;\n}\n\n#welcomead_body .welcomeright .welcomead_cta {\n  background: #ff5c58;\n  color: #fff;\n  margin-top: 20px;\n}\n\n#welcomead_body .welcomead_login, #welcomead_body .welcomead_login a {\n  color: #ddd;\n}\n", "extra_js": "", "freq_cap_days": "365", "click2": "https://myaccount.nytimes.com/auth/login", "trackInOptimizely": "cta", "click4": "", "click1": "https://www.nytimes.com/subscription/multiproduct/lp8XKUR.html?campaignId=7QFQ8"}, "id": "84A28D79-D117-4CFD-985D-B85868003978", "dependencies": [], "type": "widget", "widget_id": "10704016257"}]}, {"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"creator": "tph", "custom_js": "", "nytID": "testNewWelcomeAd -- bar1", "full_html": "<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n    <ul class=\"user-subscriptions-menu\">\n        <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\">\n            <a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" style=\"display:none\">SUBSCRIBE NOW</a>\n            <div id=\"hovercard\" class=\"font-smoothing\">\n                <a href=\"%%CLICKTHRU1%%\" id=\"bar1-body\" target=\"_blank\">\n                    <div class=\"headline1\">Elect understanding.</div>\n                    <div class=\"headline2\">\n                        Know what&rsquo;s at stake this\n                        <br>primary season.\n                    </div>\n                    <div class=\"offertextheader\">\n                        The Times Sale Special\n                    </div>\n                    <div class=\"offertext\">50% off one year + Cooking<br>and Crossword on us.</div>\n                    <div id=\"bar1-cta\">SUBSCRIBE NOW</div>\n                    <img class=\"bar1-logo\" src=\"https://mwcm.nyt.com/dam/mkt_assets/exo/img/nyt-logo-379x64-wht.svg\" alt=\"The New York Times\">\n                </a>\n            </div>\n        </li>\n    </ul>\n</div>\n<a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">SUBSCRIBE NOW</a>", "extra_js": "https://mwcm.nyt.com/dam/mkt_assets/exo/bar1/bar1_v3_mag.js", "click4": "4", "click2": "2", "click3": "3", "css": ".font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.sub_small_hide {\n  display: none;\n}\n\n.NYT5Style .masthead-tools {\n  padding-right: 0;\n}\n\n.NYT5Style .masthead-tools #bar1-3panel {\n  display: inline;\n  vertical-align: top;\n  background-image: none;\n}\n\n#bar1-3panel {\n  border: 0;\n  position: relative;\n}\n\n#bar1-nyt5wrapper {\n  opacity: 0;\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #6288A5;\n  border: 1px solid #4D7B9F;\n  border-radius: 3px;\n  color: #fff !important;\n  display: inline-block;\n  font-size: 1em;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  padding: 7px 10px 6px;\n  text-transform: none;\n  text-decoration: none;\n}\n\n#bar1-3panel > a:hover {\n  background-color: #326891;\n  border: 1px solid #265E8B;\n  text-decoration: none;\n}\n\n.NYT4 #bar1-3panel {\n  display: none;\n}\n\n#hovercard {\n  width: 450px;\n  height: 330px;\n  max-width: 450px;\n  display: none;\n  margin-left: -360px;\n  z-index: 1000000152;\n  border: 0;\n  position: absolute;\n  left: 50%;\n  top: 30px;\n  text-align: left;\n  -webkit-box-shadow: 0 0 5px #888;\n          box-shadow: 0 0 5px #888;\n  white-space: normal;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n}\n\n#hovercard:after {\n  bottom: 100%;\n  left: 350px;\n  border: solid transparent;\n  content: \" \";\n  width: 0;\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #fff;\n  border-width: 8px;\n  margin: 0;\n}\n\n#hovercard a {\n  text-decoration: none;\n}\n\n#bar1-body {\n  width: 100%;\n  height: 100%;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n}\n\n#bar1-cta {\n  background: #000;\n  border-radius: 4px;\n  color: #fff;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 700;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  width: 111px;\n}\n\n#hovercard:after {\n  border-bottom-color: #002a63;\n}\n\n#hovercard #bar1-body {\n  background: #002a63;\n}\n\n#hovercard #bar1-body .headline1 {\n  padding-top: 50px;\n  margin-left: 40px;\n  color: #fff;\n  font-family: \"nyt-cheltenham\", georgia, \"times new roman\", times, serif;\n  font-weight: 300;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 27px;\n}\n\n#hovercard #bar1-body .headline2 {\n  margin-top: 4px;\n  margin-left: 40px;\n  color: #ff5c58;\n  font-family: \"nyt-cheltenham\", georgia, \"times new roman\", times, serif;\n  font-weight: 300;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 27px;\n}\n\n#hovercard #bar1-body .bar1-logo {\n  width: 142px;\n  position: absolute;\n  bottom: 32px;\n  right: 28px;\n}\n\n#hovercard #bar1-body .offertextheader {\n  margin-top: 30px;\n  margin-left: 40px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14.5px;\n  letter-spacing: -0.01px;\n  line-height: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n#hovercard #bar1-body .offertext {\n  margin-top: 5px;\n  margin-left: 40px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  letter-spacing: -0.01px;\n  line-height: 21px;\n  color: #ff5c58;\n}\n\n#hovercard #bar1-body .q2urgency {\n  margin-left: 40px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 20px;\n  letter-spacing: -0.01px;\n  line-height: 21px;\n  color: #ff5c58;\n}\n\n#hovercard #bar1-body #bar1-cta {\n  margin-left: 40px;\n  background: #ff5c58;\n  color: #fff;\n  margin-top: 20px;\n  font-size: 13px;\n  border-radius: 3px;\n  width: 126px;\n}\n", "click1": "https://www.nytimes.com/subscription/multiproduct/lp8XKUR.html?campaignId=7FRUJ"}, "id": "73D2BEF6-BD51-4031-A2E7-ACA0EB007644", "dependencies": [], "type": "widget", "widget_id": "bar1poc2_staging"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10705083725"], "changes": null, "id": "10726433259", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] exo_* does not exist", "name": "Nons | Default NYT5 Experience | All Geos | 2018-05-11 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "10446313101", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/7faa39d964d973f0333ee957e83f1c612ef52d456792e0fe1fb65070de730365.js", "dependencies": [], "id": "970E6F29-9505-4475-AA5C-EF073575F9C0"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/e000862780a22f3b7c86480ae4b2bce4a61bafe9274c4664c812653f708c6234.js", "dependencies": [], "id": "D5FFEBEC-0CC4-43EA-988E-4EC8CC79F3AF"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/c701827d2325dc2cabb23fa726a38f4484ec0f17b054c5654fd90fa5a16e9df9.js", "dependencies": [], "id": "40F63DF9-AF95-490E-A6C1-2B3FD1CD8EE6"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8HYGS.html?mktgrfr=gw_mob&campaignId=67LWR&op=1", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "900BFABD-4336-4840-9A67-5A36FFB5A41F"}]}], "name": "Gray, offer-agnostic"}], "audienceIds": ["and", "6992450319", "9030630106"], "changes": null, "id": "10447582313", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] exo_nons_inyt_saleTemplateBreakingNews_0518,[Geo] Rest of World (RoW) or dev mode", "name": "Nons | INYT | Bar1/Welcome | Breaking News Template | ROW ex India/US | 2018-07-XX TESTING SM exo_nons_inyt_saleTemplateBreakingNews_0518", "bucketingStrategy": null, "variations": [{"id": "10759691033", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6a241cedea9ecb9dc1a7284e9661d2556bb7a4bb5bd73469126b1b017b0ae0a7.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/6fce569c3b92167a397191bbab475a45a7cfe7bee914e4923351246eff0bc1c5.js", "dependencies": [], "id": "07CFEE2E-0B55-47D5-8524-10B997108EBE"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/inyt/lp8RRTS.html?mktgrfr=gw_mob&campaignId=", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "D539D762-46C0-4FE3-B975-AFA6BACBE320"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "129000 - $1/wk + Cooking and XWD - ORANGE bg GREY cta - lp8U87R"}], "audienceIds": ["and", "6992450319", "10243070104", "10310431082"], "changes": null, "id": "10760501071", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "exo_maro403", "name": "Test_showOptlyPlacements", "bucketingStrategy": null, "variations": [{"id": "10809004234", "actions": [{"viewId": "8179870018", "changes": [{"name": "Welcome Ad -- Data Layer", "config": {"extra_js_2": "", "displayTime": 15, "session_cap": "1", "creator": "tph", "custom_js": "", "nytID": " testNewWelcomeAd", "session_cap_hours": "24", "freq_cap_number": "10", "click3": "", "full_html": "<div id=\"welc_supercontainer\" class=\"nytdGrowlUIContainer font-smoothing\">\n    <div id=\"welcomead_container\">\n        <a class=\"nytdGrowlNotifyCross\" data-et-element-name=\"close\" id=\"close_background\"></a>\n        <div id=\"welcomead_body\">\n            <a href=\"%%CLICKTHRU1%%\" id=\"cta-extended\" target=\"_blank\">\n                <div class=\"welcomeleft\">\n                    <div class=\"headline1\">Test New Extension</div>\n                    <div class=\"headline2\">Prep for primary season with\n                        <br>our political experts.</div>\n                    <img class=\"nyt_welcomead_logo\" src=\"https://mwcm.nyt.com/dam/mkt_assets/exo/img/nyt-logo-379x64-wht.svg\" alt=\"The New York Times\"\n                    />\n                </div>\n\n                <div class=\"welcomeright\">\n                    <div class=\"offertextheader\">\n                        The Times Sale\n                    </div>\n                    <div class=\"offertext\">50% off one year.</div>\n                    \n                    <div class=\"welcomead_cta\" data-et-element-name=\"cta\">SUBSCRIBE NOW</div>\n                </div>\n            </a>\n\n            <div class=\"welcomead_login\">\n                Already a Subscriber?\n                <a href=\"https://myaccount.nytimes.com/auth/login\">Log in</a>\n            </div>\n\n            <button type=\"button\" class=\"welc-close nytdGrowlNotifyCross\" data-et-element-name=\"close\" id=\"closeCross\" aria-disabled=\"false\">\n                <i class=\"icon\"></i>\n                <span class=\"visually-hidden\">Close this modal window</span>\n            </button>\n        </div>\n    </div>\n</div>", "extra_js_4": "", "extra_js_3": "", "messageType": "WelcomeAd", "closeSelector": ".nytdGrowlNotifyCross", "css": ".font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n#welc_supercontainer {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1000000130;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.6)), to(white));\n  background-image: linear-gradient(rgba(255, 255, 255, 0.6) 0%, white 100%);\n  background: -ms-linear-gradient(rgba(255, 255, 255, 0.6) 0%, white 100%);\n  text-align: left;\n}\n\n@media screen and (max-width: 720px) {\n  #welc_supercontainer {\n    display: none !important;\n  }\n}\n\n#welcomead_container {\n  position: absolute;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  height: 600px;\n  left: 0;\n  top: 134px;\n  z-index: 1000000130;\n}\n\n#welcomead_body {\n  width: 800px;\n  height: 320px;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1000000130;\n  background-size: 100% auto;\n  background-color: #fff;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n#welcomead_body #close_background {\n  display: block;\n  width: 100%;\n  height: 1080px;\n  position: absolute;\n}\n\n@media screen and (max-width: 800px) {\n  #welcomead_body {\n    width: 700px;\n  }\n}\n\n.welcomead_login {\n  color: #555555;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: -0.1px;\n  line-height: 1.11;\n  text-align: left;\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  cursor: pointer;\n}\n\n.welcomead_login a {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n#close_background {\n  display: block;\n  height: 1080px;\n  width: 100%;\n  position: absolute;\n}\n\n#instl_close {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  z-index: 9999;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n#instl_close .subscriber-link {\n  padding-right: 25px;\n  font-size: 12px;\n}\n\n#instl_close .nytdGrowlNotifyCross {\n  position: absolute;\n  right: 0;\n  top: 2px;\n}\n\n#instl_close img {\n  width: 16px;\n  height: 16px;\n}\n\n#cta-extended {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-decoration: none;\n}\n\n.welc-close {\n  position: relative;\n  z-index: 9999;\n  -webkit-transition: background-color 0.2s ease-in;\n  transition: background-color 0.2s ease-in;\n  border-radius: 50%;\n  background-clip: padding-box;\n  font-size: 100%;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  border: none;\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n  transition: background-color 0.2s ease-in;\n  background-color: #999;\n  width: 22px;\n  height: 22px;\n  position: absolute;\n  right: -11px;\n  top: -11px;\n  cursor: pointer;\n  -webkit-appearance: button;\n  line-height: normal;\n  vertical-align: middle;\n}\n\n.welc-close .icon {\n  display: inline-block;\n  line-height: 0;\n  vertical-align: middle;\n  font-style: normal;\n}\n\n.welc-close:hover {\n  background-color: #333;\n}\n\n.welc-close .icon:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.welc-close .icon:after {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n\n.welc-close .icon:before,\n.welc-close .icon:after {\n  content: '';\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  top: 10px;\n  left: 6px;\n  width: 10px;\n  height: 2px;\n}\n\n.welcomead_cta {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  height: 30px;\n  background: #000;\n  font-size: 11px;\n  line-height: 30px;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px;\n  color: #fff;\n  width: 113px;\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.user-logged-in .welcomead_login {\n  display: none;\n}\n\n#welcomead_body {\n  background: #002a63;\n}\n\n#welcomead_body .welcomeleft {\n  position: relative;\n  float: left;\n  margin-left: 58px;\n}\n\n#welcomead_body .welcomeleft .headline1,\n#welcomead_body .welcomeleft .headline2 {\n  font-family: \"nyt-cheltenham\", georgia, \"times new roman\", times, serif;\n  font-weight: 300;\n  font-size: 31px;\n  letter-spacing: -0.01px;\n  line-height: 33px;\n}\n\n#welcomead_body .welcomeleft .headline1 {\n  color: #fff;\n  margin-top: 80px;\n}\n\n#welcomead_body .welcomeleft .headline2 {\n  color: #ff5c58;\n  margin-top: 4px;\n}\n\n#welcomead_body .welcomeleft .nyt_welcomead_logo {\n  width: 169px;\n  margin-top: 20px;\n}\n\n#welcomead_body .welcomeright {\n  position: relative;\n  float: left;\n  margin-left: 72px;\n}\n\n#welcomead_body .welcomeright .offertextheader {\n  margin-top: 92px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: -0.01px;\n  line-height: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n\n#welcomead_body .welcomeright .offertext {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 26px;\n  color: #ff5c58;\n  margin-top: 10px;\n}\n\n#welcomead_body .welcomeright .q2urgency {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 300;\n  font-size: 26px;\n  letter-spacing: -0.01px;\n  line-height: 27px;\n  color: #ff5c58;\n}\n\n#welcomead_body .welcomeright .welcomead_cta {\n  background: #ff5c58;\n  color: #fff;\n  margin-top: 20px;\n}\n\n#welcomead_body .welcomead_login, #welcomead_body .welcomead_login a {\n  color: #ddd;\n}\n", "extra_js": "", "freq_cap_days": "365", "click2": "https://myaccount.nytimes.com/auth/login", "trackInOptimizely": "cta", "click4": "", "click1": "https://www.nytimes.com/subscription/multiproduct/lp8XKUR.html?campaignId=7QFQ8"}, "id": "84A28D79-D117-4CFD-985D-B85868003978", "dependencies": [], "type": "widget", "widget_id": "10704016257"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8185280121", "changes": [{"name": "Universal Growl", "config": {"creator": "TPH", "custom_js": "// 060518 USGM RTS June 5~208123\nvar $;\n\nconsole.log('--local--');\n// -----------------------------------------\n// ------      Select NYT4/NYT5       ------\n\nfunction isNyt5() {\n    var nyt5meta = document.getElementsByName('sourceApp');\n    var nytApps = { 'nyt-v5': true, 'blogs': true };\n    return (typeof nyt5meta[0] !== \"undefined\") && (nyt5meta[0].getAttribute('content') in nytApps);\n}\n\nif (isNyt5()) {\n    require(['foundation/main'], function () {\n        $ = require('jquery/nyt');\n        run($);\n    });\n} else {\n    $ = window.NYTD && window.NYTD.jQuery || window.jQuery;\n    run($);\n}\n\n\nvar growlData = {\n    campaignId: {\n\n        '1': [{\n            selector: '#cta-link-collapsed, .cta-smallScrn',\n            code: '6URFJ'\n        }],\n        '2': [{\n            selector: '#cta-link-collapsed, .cta-smallScrn',\n            code: 'XXXXX'\n        }],\n        '3': [{\n            selector: '#cta-link-collapsed, .cta-smallScrn',\n            code: '6URFL'\n        }],\n        '4': [{\n            selector: '#cta-link-collapsed, .cta-smallScrn',\n            code: '6URFR'\n        }],\n        '5': [{\n            selector: '#cta-link-collapsed, .cta-smallScrn',\n            code: '6URFW'\n        }, {\n            selector: '#cta-link-expanded, #cta-link-expanded-small',\n            code: '6URFY'\n        }]\n    }\n};\n\nfunction run($) {\n    \n    var meterThreshold = window.NYToptly.audience('meter_threshold');\n    var meterCount = window.NYToptly.audience(\"meter_views\");\n    var container = $('.growl-wrapper');\n    var userLoggedIn;\n    var userInfo = window.NYToptly.userInfo;\n    var campaignIdData = growlData.campaignId[meterCount];\n    var growlState = 'true';\n    var preserveCollapseGrowl = false;\n    var storage = window.sessionStorage;\n\n\n\n    try {\n        growlState = localStorage.getItem('growlState');\n    } catch (e) {\n        if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {\n            console.log('Prived mode detected');\n        }\n    }\n\n    // detecting if user is logged in\n    if (userInfo.regi_id === 0) {\n        userLoggedIn = false;\n    }\n    else {\n        userLoggedIn = true;\n        $('html').addClass('user-logged-in');\n    }\n\n    var appendToHref = function (codes) {\n        var i;\n\n        var updateLink = function () {\n            this.href = this.href.replace(\"campaignId=\", \"campaignId=\" + codes[i].code);\n        };\n\n        if (typeof codes !== 'object' || typeof codes.length === 'undefined') {\n            throw new Error('Parameter should be an array');\n        }\n        for (i = 0; i < codes.length; i++) {\n            $(codes[i].selector).each(updateLink);\n        }\n    };\n\n\n    if (meterCount === 2 && userLoggedIn === true) {\n        console.log('User is logged-in no need to show sign up growl');\n        $('#Growl_optly').hide();\n    }\n\n    function toggleBug() {\n        var remArts = $('.rem-arts-small-container');\n        var remArtsWidth = 'width: ' + remArts.outerWidth() + 'px; flex-basis: ' + remArts.outerWidth() + 'px;';\n\n        remArts.attr('style', remArtsWidth);\n\n        $('.tagline-offer-text, .col__cta-container').toggleClass('hideGrowlElements');\n\n        container\n            .toggleClass(\"growl_open growl_closed\")\n            .one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',\n                function (e) {\n                    remArts.removeAttr('style');\n\n\n                    try {\n                        localStorage.setItem('growlState', $('.tagline-offer-text').is(':visible'));\n                        console.log($('.tagline-offer-text').is(':visible'));\n                    } catch (er) {\n                        if (er.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {\n                            console.log('Prived mode detected');\n                        }\n                    }\n                });\n    }\n\n\n\n    if (growlState === 'false' && meterCount !== 5) {\n        preserveCollapseGrowl = true;\n\n        $('.tagline-offer-text, .col__cta-container').attr('style', 'visibility:hidden;');\n        container.addClass('notransition');\n        toggleBug();\n        container[0].offsetHeight; // jshint ignore:line\n        container.removeClass('notransition');\n\n        $('.tagline-offer-text, .col__cta-container').removeAttr('style');\n    }\n\n\n    var controlScroll = function (expand) {\n        var scrolled = false;\n        var hitBottom = false;\n\n        var assetWrapper = $('.growl-wrapper');\n        var smallAsset = $('.growl-col');\n        var mediumAsset = $('.growl-exp');\n        var mediumAssetInner1 = $('.expanded_left__inner');\n        var mediumAssetInner2 = $('.expanded_right--inner');\n\n\n\n\n        function showSmall() {\n            assetWrapper.fadeIn(200);\n            mediumAssetInner1.removeClass('show-medium-inner');\n            mediumAssetInner2.removeClass('show-medium-inner');\n\n            assetWrapper.removeClass('getMedium');\n\n            mediumAsset.removeClass('show-medium');\n            mediumAsset.addClass('hide-medium');\n\n            smallAsset.removeClass('hide-small');\n            smallAsset.addClass('show-small');\n        }\n\n        function showMedium() {\n            assetWrapper.show();\n\n            mediumAssetInner1.addClass('show-medium-inner');\n            mediumAssetInner2.addClass('show-medium-inner');\n\n            assetWrapper.addClass('getMedium');\n\n            smallAsset.removeClass('show-small');\n            smallAsset.addClass('hide-small');\n\n            mediumAsset.removeClass('hide-medium');\n            mediumAsset.addClass('show-medium');\n        }\n\n        function shownone() {\n            assetWrapper.fadeOut(200);\n        }\n\n        $('.closeAsset').on('click', function () {\n            showSmall();\n        });\n\n\n        $(window).scroll(function () {\n\n            var totalHeight = document.body.offsetHeight - 100;\n\n            if ($(window).scrollTop() > 0 && scrolled === false) {\n\n                if (expand === true) {\n\n                    scrolled = true;\n                    showMedium();\n                } else {\n                    scrolled = true;\n                    showSmall();\n                }\n            } else if ($(window).scrollTop() === 0 || ($(window).scrollTop() + $(window).height() < totalHeight && hitBottom === true)) {\n                // scrolled = false;\n                hitBottom = false;\n                showSmall();\n            } else if ($(window).scrollTop() + $(window).height() > totalHeight) {\n                hitBottom = true;\n                shownone();\n            }\n        });\n    };\n\n    $('.toggle_bug').click(function () {\n        toggleBug();\n\n        if (preserveCollapseGrowl === true) {\n            preserveCollapseGrowl = false;\n        } else {\n            preserveCollapseGrowl = true;\n        }\n\n    });\n\n\n\n\n    function updateArticleCount() {\n        var articlesRemaining = meterThreshold - meterCount;\n\n        $('.js-articles-remain-count, .js-smallScrn-meterCount__count').html(articlesRemaining);\n\n        if (articlesRemaining === 1) {\n            $('.articles-remain-copy, .js-smallScrn-meterCount__copy').html('<span class=\"remove_small\">ARTICLE</span> REMAINING');\n        }\n    }\n\n    updateArticleCount();\n\n    // update login link URI\n\n    function updateURI() {\n        var loginLinks = document.querySelectorAll('.login_link');\n        var windowURL = window.location.href;\n\n        loginLinks.forEach(function(link) {\n            var loginUrl = link.href;\n\n            link.href = loginUrl.replace('https://www.nytimes.com/', windowURL);\n        });\n    }\n\n\n\n    var expandGrowl = false;\n\n    if (meterCount === 2) {\n        console.log('mtr2 sup');\n        $('#Growl_optly').css('display', 'none');\n    }\n\n    if (meterCount === 5) {\n        container.addClass('meter-5');\n        expandGrowl = true;\n    }\n\n    function addUriToLinks(selector) {\n        var pageUrl = location.origin + location.pathname;\n        document.querySelectorAll(selector).forEach(function(el) {\n            var separator = el.href.indexOf('?') > -1 ? '&' : '?';\n            el.href = el.href + separator + 'URI=' + pageUrl;\n        });\n    }\n\n    addUriToLinks('.addURI');\n\n\n    controlScroll(expandGrowl);\n\n    appendToHref(campaignIdData);\n\n    updateURI();\n\n    container.animate({bottom: \"0\"}, 750);\n\n}", "nytID": "TPH Test Fall-through", "full_html": "<div class=\"growl-wrapper growl_open font-smoothing\">\n\n    <div class=\"smallScrn-meterCount\">\n        <div class=\"article_remaining_info\"><span class=\"js-smallScrn-meterCount__count\">&nbsp;</span> <span class=\"js-smallScrn-meterCount__copy\">ARTICLES REMAINING</span></div>\n\n        <a href=\"%%CLICKTHRU2%%\" class=\"expanded_login_link sitewideLogInModal addURI\">Log in</a>\n\n        <span class=\"toggle_bug\"><svg class=\"small_close\"><use xlink:href=\"#small_close\"/></svg></span>\n        <span class=\"closeAsset\"><svg class=\"small_close\"><use xlink:href=\"#small_close\"/></svg></span>\n\n    </div>\n\n    <div id=\"growl_bug\" class=\"growl_bug_container toggle_bug\">\n        <svg class=\"bug_collapse\"><use xlink:href=\"#bug_collapse\"/></svg>\n        <svg class=\"bug_open\"><use xlink:href=\"#bug_open\"/></svg>\n    </div>\n\n    <div class=\"growl-col growl-wrapper--inner\">\n        <div class=\"growl-col--inner\">\n            <div class=\"rem-arts-small-container\">\n                <div class=\"js-articles-remain-count articles-remain-count\">&nbsp;</div>\n                <div class=\"articles-remain-copy\"><span class=\"remove_small\">ARTICLES</span> REMAINING</div>\n            </div>\n            <div class=\"tagline-offer-text\">\n                \n                <span class=\"tagline-bold\">Save 50% for one year.</span> One day only. <a href=\"%%CLICKTHRU1%%\" class=\"cta-smallScrn\" target=\"_blank\">Subscribe now</a>\n            </div> \n\n            <div class=\"col__cta-container\">\n                <a href=\"%%CLICKTHRU1%%\" class=\"cta-btn\" id=\"cta-link-collapsed\" target=\"_blank\">SUBSCRIBE NOW</a>\n\n                <div class=\"login-wrapper subscriber-link\">\n                    <!-- <a href=\"%%CLICKTHRU2%%\" class=\"sitewideLogInModal login-modal-trigger addURI\"> -->\n                            <a href=\"%%CLICKTHRU2%%\" class=\"sitewideLogInModal addURI\">\n                        <!-- <a href=\"https://myaccount.nytimes.com/auth/login\" class=\"login_link sitewideLogInModal login-modal-trigger\">Log in</a>         -->\n\n                        <span class=\"subscriber-copy-already\">Subscriber login</span>\n                        <span class=\"subscriber-copy-login-small\">Log in</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"growl-exp growl-wrapper--inner\">\n        <div class=\"growl-exp--header\">\n            <a class=\"closeAsset\">\n                <svg class=\"arrow-icon-expGrowl\"><use xlink:href=\"#close_expanded\"/></svg>\n            </a>\n        </div>\n\n        <div class=\"expanded_left\">\n            <div class=\"expanded_left__inner\">\n                <div class=\"cta-callout__header\">Go beyond the primaries.<br><span class=\"non-bold\">Follow the full story.</span></div>\n                <div class=\"cta-callout__subhead\">50% off for one year.<br>\n                    <span class=\"cta-callout__subhead--rate\">One day only.</span>\n                </div>\n                <!--  \n                    ADD CONTENT FOR LEFT PANEL \n                    OF EXPANDED GROWL HERE\n                -->\n\n                <!-- Do not remove button. Appears on expanded growl at small window widths -->\n                <a href=\"%%CLICKTHRU1%%\" class=\"small_width_cta cta-btn\" id=\"cta-link-expanded-small\" target=\"_blank\">SUBSCRIBE NOW</a>\n\n            </div>\n\n\n            <div class=\"meter-wrap\"><span class=\"js-articles-remain-count\">&nbsp;</span> <span class=\"articles-remain-copy\">articles remaining</span> this month</div>\n        </div>\n\n\n        <div class=\"expanded_right\">\n            <div class=\"expanded_right--inner\">\n\n                <svg class=\"growl_bundle_lockup\"><use xlink:href=\"#lockup_domestic\"/></svg>\n                \n                <div class=\"hide_content_small\">\n                \n                    <div class=\"expanded_right_headline\">See where The Times will take you.</div>\n                \n                    <a href=\"%%CLICKTHRU1%%\" class=\"cta-btn\" id=\"cta-link-expanded\" target=\"_blank\">SUBSCRIBE NOW</a>\n                </div>\n\n            </div>\n            <div class=\"subscriber-link\">Already a subscriber? \n                <a href=\"%%CLICKTHRU2%%\" class=\"sitewideLogInModal addURI\">Log in.</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<svg style=\"display:none\" xmlns=\"http://www.w3.org/2000/svg\">\n\n    <symbol viewBox=\"0 0 20 13\" preserveAspectRatio=\"xMinYMin meet\" id=\"close_expanded\">\n        <path fill=\"#9B9B9B\" fill-rule=\"evenodd\" d=\"M17.726 0L10 8.18 2.274 0 0 2.147l10 10.59 10-10.59z\"/>\n    </symbol>\n\n    <symbol viewBox=\"0 0 9 14\" preserveAspectRatio=\"xMinYMin meet\" id=\"bug_collapse\">\n        <g stroke=\"#FFF\" stroke-width=\"3\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><path d=\"M6.583 11.545L2.417 7M2.417 7l4.166-4.545\"/></g>\n    </symbol>\n    \n    <symbol viewBox=\"0 0 9 14\" preserveAspectRatio=\"xMinYMin meet\" id=\"bug_open\">\n        <g stroke=\"#FFF\" stroke-width=\"3\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><path d=\"M2.417 2.455L6.583 7M6.583 7l-4.166 4.545\"/></g>\n    </symbol>\n\n    <symbol viewBox=\"0 0 11 8\" preserveAspectRatio=\"xMinYMin meet\" id=\"small_close\">\n        <g stroke=\"#FFF\" stroke-width=\"3\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\"><path d=\"M8.364 2.278l-3.03 2.778M2.303 2.278l3.03 2.778\"/></g>\n    </symbol>\n\n    <symbol viewBox=\"0 0 289 102\" preserveAspectRatio=\"xMinYMin meet\" id=\"lockup_domestic\">\n        <g fill-rule=\"nonzero\" fill=\"none\"><path fill=\"#333\" d=\"M193 33h39v24h-39zM193 66h18v27h-18zM213 66h19v27h-19zM234 33h27v8h-27zM234 43h16v50h-16zM252 43h16v50h-16zM193 59h39v5h-39z\"/><path d=\"M284 17V0h-92v5h-11v40h2V7h95v87.6c0 2.1 1.4 3.9 2.7 5.4h-92.1c-.3.7-.8 1.3-1.4 1.8.6.1 1.2.2 1.8.2h94c4 0 6-4 6-10V17h-5zM121 94.8V92H91.7c.1 1.8-1.7 3.3-3.9 3.3H76.2c-2.2 0-3.9-1.5-3.9-3.3H17V9.3c0-1.8.5-2.3 2.3-2.3h125.4c1.8 0 2.3.5 2.3 2.3V13h3V6.8c0-3.8-3-6.8-6.8-6.8H20.8C17 0 14 3 14 6.8V92H0c-.1 5.5 5.3 10 11.9 10h113.3c-2.5-1.4-4.2-4.1-4.2-7.2z\" fill=\"#333\"/><path d=\"M161 98v-2h-35.1c-2.2 0-2-.8-2-3.1V23.1c0-2.3-.2-3.1 2-3.1h46.2c2.2 0 2 .8 2 3.1V45h1.9V21.2c0-4-3.1-7.2-7-7.2h-40c-3.9 0-7 3.2-7 7.2v73.5c0 4 3.1 7.2 7 7.2h34c-1.2-.8-2-2.3-2-3.9z\" fill=\"#333\"/><path d=\"M180.5 75.1c-.5 1.3-1.4 2.3-2.7 2.9v-2.9l1.6-1.4-1.6-1.4v-2c1.4-.1 2.4-1.2 2.4-2.5 0-1.7-1.6-2.3-2.5-2.3-.2 0-.4 0-.7.1v.1h.4c.6 0 1.1.3 1.1.9 0 .4-.4.9-1 .9-1.6 0-3.4-1.3-5.5-1.3-1.8 0-3 1.3-3 2.7 0 1.3.8 1.8 1.6 2.1v-.1c-.3-.2-.4-.4-.4-.9 0-.6.6-1.1 1.3-1.1 1.7 0 4.4 1.4 6.2 1.4h.2v2l-1.6 1.4 1.6 1.4V78c-.7.2-1.3.3-2 .3-2.6 0-4.3-1.6-4.3-4.3 0-.6.1-1.3.3-1.9l1.3-.6v5.9l2.7-1.2v-6L172 72c.4-1.2 1.2-2 2.2-2.5v-.1c-2.6.6-5.2 2.6-5.2 5.6 0 3.5 2.9 5.9 6.3 5.9 3.2.1 5.3-2.3 5.2-5.8z\" fill=\"#262626\"/><path d=\"M184 46h-18c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h18c2.2 0 4-1.8 4-4V50c0-2.2-1.8-4-4-4zm3 48.9c0 1.2.1 2.1-1.1 2.1h-21.8c-1.2 0-1.1-.9-1.1-2.1V53.1c0-1.2-.1-2.1 1.1-2.1h21.8c1.2 0 1.1.9 1.1 2.1v41.8z\" fill=\"#333\"/><path d=\"M204.6 19c0-.7-.6-.8-1.1-.8v.1c.3 0 .5.1.5.3 0 .1-.1.3-.4.3-.2 0-.7-.1-1.1-.3-.4-.1-.8-.3-1.1-.3-.6 0-1.1.5-1.1 1.1 0 .5.4.7.5.7V20c-.1-.1-.2-.1-.2-.3 0-.1.1-.4.5-.4.3 0 .7.1 1.2.3.5.1.9.2 1.2.3v1l-.5.4.5.4v1.4c-.3.2-.6.2-.8.2-.5 0-.9-.1-1.3-.5l1.4-.7V20l-1.7.7c.2-.4.5-.7.9-.9v-.1c-1 .3-1.9 1.2-1.9 2.3 0 1.3 1.1 2.3 2.3 2.3 1.3 0 2.2-1 2.2-2.2h-.1c-.2.4-.5.8-.9 1v-1.4l.5-.4-.5-.4v-1c.5 0 1-.3 1-.9zm-2.9 3.7l-.4.2c-.2-.3-.4-.7-.4-1.3 0-.2 0-.5.1-.7l.7-.3v2.1zm3.5.7l-.4.3.1.1.2-.2.7.7 1-.7v-.1l-.3.2-.3-.3v-2.3l.3-.2.6.5v2c0 1.3-.3 1.5-.8 1.7v.1c.9 0 1.8-.3 1.8-1.9v-2.2l.3-.2-.1-.1-.3.2-.8-.7-.9.7v-2.7h-.1l-1.2.8v.1c.1.1.3.1.3.5v3.7h-.1zm6.1-.4l-.8.6-.8-.7v-.4l1.6-1-.8-1.2-1.7.9v2.2l-.3.3.1.1.3-.2 1.1.8 1.3-1.4zm-1.7-.5v-1.6h.1l.7 1.1-.8.5zm8-3.8c0-.1 0-.2-.1-.3h-.1c-.1.3-.2.4-.6.4-.3 0-.5-.2-.6-.3l-.9 1.1.1.1.3-.3c.2.2.4.3.8.3v2.8l-1.9-3.4c-.1-.3-.4-.6-.9-.6s-1 .5-.9 1.2h.1c0-.2.1-.4.4-.4.2 0 .3.2.4.3v1.1c-.6 0-1 .3-1 .8 0 .3.1.7.5.8v-.1c-.1-.1-.1-.1-.1-.2 0-.2.1-.3.4-.3h.2V23c-.7 0-1.2.4-1.2 1.1 0 .6.5.9 1.1.9v-.1c-.4 0-.5-.2-.5-.4 0-.3.2-.4.5-.4s.5.2.7.4l1-1.1-.1-.1-.2.3c-.4-.3-.6-.4-1-.5v-3.3l2.7 4.7h.2v-4.6c.2-.3.7-.6.7-1.2zM220 23l-.8.6-.8-.7v-.4l1.6-1-.8-1.2-1.7.9v2.2l-.3.3.1.1.3-.2 1.1.8L220 23zm-1.6-.5v-1.6h.1l.7 1.1-.8.5zm7-1.8l-.2.2-.6-.5-.7.7.3.3v2.5l-.8-.5v-2l.3-.2-.8-.7-.7.7.3.3v2.4l-.1.1-.7-.5v-2c0-.5-.2-.6-.5-.8-.2-.2-.4-.3-.4-.5s.2-.3.3-.4v-.1c-.3 0-1 .3-1 .9 0 .3.1.5.3.6.2.2.3.3.3.6v1.9l-.4.3.1.1.3-.3.9.7.8-.6.9.6 1.8-1v-2.2l.3-.6zm6.2-1.8l-.3.3-.7-.6-1.1.8v-.8h-.1V24c-.1 0-.4-.1-.6-.1v-4.5c0-.3-.2-.8-.8-.8-.6 0-1 .5-1 .9h.1c0-.2.1-.4.3-.4.2 0 .4.1.4.6V21c-.6 0-1 .4-1 .8 0 .3.1.7.5.7v-.1l-.2-.2c0-.2.2-.3.4-.3h.1V24c-.5.2-.7.5-.7.9 0 .6.4 1 1.1 1 .5 0 .9-.1 1.3-.2.3-.1.7-.1.9-.1.3 0 .4.1.4.3 0 .2-.1.3-.2.4v.1c.5-.1.9-.4.9-.9s-.5-.8-1-.8c-.3 0-.8.1-1.2.2-.5.1-.9.1-1.1.1-.2 0-.5-.1-.5-.4 0-.3.2-.5.8-.5.3 0 .7 0 1 .1.4.1.8.2 1.1.2.5 0 .9-.2.9-.9v-4.1l.3-.5zm-1.4 2c-.1.1-.2.2-.4.2s-.3-.1-.4-.2v-1.5l.3-.2.5.4v1.3zm0 1c-.1-.1-.2-.2-.4-.2s-.3.1-.4.2V21c.1.1.2.2.4.2s.3-.1.4-.2v.9zm0 1.5c0 .3-.2.5-.5.5h-.3V22c.1-.1.2-.2.4-.2s.3.1.4.2v1.4zm4.6-2.3l-1.1-.8-1.6.9v2.2l-.3.3v.1l.3-.2 1.1.8 1.6-1v-2.3zm-1.8 2.1v-2.4l.8.6v2.4l-.8-.6zm4.9-2.8c-.2.1-.3.1-.4.1-.1 0-.3-.1-.4-.2h-.1l-.6.6-.6-.6-1 .7v.1l.3-.2.3.4v2.1l-.4.3.1.1.2-.2.8.7 1-.7v-.1l-.3.2-.4-.3v-2.3c.2.2.4.3.6.3.6 0 .9-.5.9-1zm4 3.2l-1.1.7-1.5-2.3 1.1-1.7h.1c.1.1.3.3.6.3.2 0 .4-.1.5-.3h.1c0 .7-.5 1.1-.8 1.1-.3 0-.5-.2-.7-.3l-.1.2 1.7 2.5.1-.2zm-3.6-.2l-.4.3.1.1.2-.2.7.7 1-.7-.1-.1-.3.2-.3-.3v-5.1h-.1l-1.2.8v.1c.1.1.3.1.3.5v3.7h.1zm9.1-4.4c0-.7-.6-.8-1.1-.8v.1c.3 0 .5.1.5.3 0 .1-.1.3-.4.3-.2 0-.7-.1-1.1-.3-.4-.1-.8-.3-1.1-.3-.6 0-1.1.5-1.1 1.1 0 .5.4.7.5.7V20c-.1-.1-.2-.1-.2-.3 0-.1.1-.4.5-.4.3 0 .7.1 1.2.3.4.1.9.2 1.2.3v1l-.5.4.5.4v1.4c-.3.2-.6.2-.8.2-.5 0-.9-.1-1.3-.5l1.4-.7V20l-1.7.7c.2-.4.5-.7.9-.9v-.1c-1 .3-1.9 1.2-1.9 2.3 0 1.3 1.1 2.3 2.3 2.3 1.3 0 2.2-1 2.2-2.2h-.1c-.2.4-.5.8-.9 1v-1.4l.5-.4-.5-.4v-1c.5 0 1-.3 1-.9zm-2.9 3.7l-.4.2c-.2-.3-.4-.7-.4-1.3 0-.2 0-.5.1-.7l.7-.3v2.1zm4.1-4l-.7.6.6.6h.1l.7-.6-.7-.6zm1 4.9l-.3.2-.3-.3v-2.3l.3-.2-.1-.1-.2.1-.6-.7-.9.7.1.1.2-.2.3.4v2.1l-.4.3v.1l.2-.2.7.7 1-.7zm5.5-.1l-.2.2-.4-.3v-2.2l.3-.3-.1-.1-.3.2-.8-.7-1 .7-.7-.7-1 .7-.6-.7-.9.7v.1l.2-.2.3.4v2.1l-.3.3.8.6.7-.7-.3-.3v-2.2l.3-.2.5.5v2l-.3.3.8.6.7-.7-.3-.3V21l.3-.2.5.5v2l-.2.2.8.7 1.2-.7zm2.9-.5l-.8.6-.8-.7v-.4l1.6-1-.8-1.2-1.7.9v2.2l1.1.8L258 23zm-1.7-.5v-1.6h.1l.7 1.1-.8.5zm4.7-.3l-.6-.5c.4-.4.6-.9.6-1.2v-.2h-.1c-.1.2-.2.3-.4.3-.3 0-.4-.1-.6-.3l-1.5.8v1.2l.6.4c-.6.5-.7.8-.7 1.1 0 .3.2.6.4.7v-.1c-.1-.1-.1-.1-.1-.3 0-.1.1-.3.4-.3.3 0 .5.2.6.3l1.4-.9v-1zm-.4-1c-.2.4-.7.8-1 1l-.4-.3v-1.2c.1.3.5.6.9.6.3 0 .4 0 .5-.1zm-.5 2.6c-.2-.4-.6-.6-.9-.6-.1 0-.4 0-.6.2.1-.3.6-.7 1.2-1.1l.4.3v1.2h-.1z\" fill=\"#000\"/></g>\n    </symbol>\n\n    <symbol viewBox=\"0 0 190 104\" preserveAspectRatio=\"xMinYMin meet\" id=\"lockup_international\">\n        <g fill=\"#333\" fill-rule=\"nonzero\"><path d=\"M121 95.8V93H91.7c.1 1.8-1.7 3.3-3.9 3.3H76.2c-2.2 0-3.9-1.5-3.9-3.3H17V10.3c0-1.8.5-2.3 2.3-2.3h125.4c1.8 0 2.3.5 2.3 2.3V14h3V7.8c0-3.8-3-6.8-6.8-6.8H20.8C17 1 14 4 14 7.8V93H0c-.1 5.5 5.3 10 11.9 10h113.3c-2.5-1.4-4.2-4.1-4.2-7.2z\"/><path d=\"M161 99v-2h-35.1c-2.2 0-2-.8-2-3.1V24.1c0-2.3-.2-3.1 2-3.1h46.2c2.2 0 2 .8 2 3.1V46h1.9V22.2c0-4-3.1-7.2-7-7.2h-40c-3.9 0-7 3.2-7 7.2v73.5c0 4 3.1 7.2 7 7.2h34c-1.2-.8-2-2.3-2-3.9z\"/><path d=\"M177.8 79v-2.9l1.6-1.4-1.6-1.4v-2c1.4-.1 2.4-1.2 2.4-2.5 0-1.7-1.6-2.3-2.5-2.3-.2 0-.4 0-.7.1v.1h.4c.6 0 1.1.3 1.1.9 0 .4-.4.9-1 .9-1.6 0-3.4-1.3-5.5-1.3-1.8 0-3 1.3-3 2.7 0 1.3.8 1.8 1.6 2.1v-.1c-.3-.2-.4-.4-.4-.9 0-.6.6-1.1 1.3-1.1 1.7 0 4.4 1.4 6.2 1.4h.2v2l-1.6 1.4 1.6 1.4V79c-.7.2-1.3.3-2 .3-2.6 0-4.3-1.6-4.3-4.3 0-.6.1-1.3.3-1.9l1.3-.6v5.9l2.7-1.2v-6L172 73c.4-1.2 1.2-2 2.2-2.5v-.1c-2.6.6-5.2 2.6-5.2 5.6 0 3.5 2.9 5.9 6.3 5.9 3.2.1 5.3-2.3 5.2-5.8-.5 1.3-1.4 2.3-2.7 2.9z\"/><path d=\"M184 47h-18c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4h18c2.2 0 4-1.8 4-4V51c0-2.2-1.8-4-4-4zm3 48.9c0 1.2.1 2.1-1.1 2.1h-21.8c-1.2 0-1.1-.9-1.1-2.1V54.1c0-1.2-.1-2.1 1.1-2.1h21.8c1.2 0 1.1.9 1.1 2.1v41.8z\"/></g>\n    </symbol>\n</svg>", "extra_js_4": "", "extra_js_3": "", "extra_js_2": "", "growl_meter": ["1", "2", "3", "4", "5", "6", "7", "8", "9"], "extra_js": "", "Click4": "", "click2": "https://myaccount.nytimes.com/auth/login", "click3": "", "css": "@charset \"UTF-8\";\n@font-face {\n  font-family: franklin-italic-600;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.ttf) format(\"truetype\");\n  font-style: italic;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin-normal-600;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.ttf) format(\"truetype\");\n  font-style: normal;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-italic-600.ttf) format(\"truetype\");\n  font-style: italic;\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: franklin;\n  src: local(\"\u00e2\u02dc\u00ba\u00ef\u00b8\u017d\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.woff) format(\"woff\"), url(https://g1.nyt.com/fonts/family/franklin/franklin-normal-600.ttf) format(\"truetype\");\n  font-style: normal;\n  font-weight: 600;\n}\n\n.font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.growl-exp {\n  opacity: 0;\n  height: 330px;\n  position: absolute;\n  bottom: 0;\n  z-index: 998;\n  -webkit-transition: opacity 0.45s ease-out, 0.5s;\n  transition: opacity 0.45s ease-out, 0.5s;\n  visibility: hidden;\n}\n\n@media only screen and (max-width: 1270px) {\n  .growl-exp {\n    height: 280px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-exp {\n    height: 196px;\n  }\n}\n\n.growl-exp.show-medium {\n  opacity: 1;\n  z-index: 999;\n  visibility: visible;\n}\n\n.growl-exp.hide-medium {\n  opacity: 0;\n  z-index: 998;\n  visibility: hidden;\n}\n\n.growl-exp--header {\n  z-index: 11111111111;\n  opacity: 1;\n}\n\n.closeAsset {\n  cursor: pointer;\n  position: absolute;\n  top: 15px;\n  right: 23px;\n  z-index: 11111111;\n}\n\n@media only screen and (max-width: 900px) {\n  .closeAsset {\n    display: none;\n  }\n}\n\n.closeAsset .arrow-icon-expGrowl {\n  height: 11px;\n  width: 17px;\n}\n\n.closeAsset .arrow-icon-expGrowl .arrow-icon--path-expGrowl {\n  fill: none;\n  stroke: #9B9B9B;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  -webkit-transition: stroke 0.3s ease-in, 1s;\n  transition: stroke 0.3s ease-in, 1s;\n}\n\n@media only screen and (max-width: 900px) {\n  .closeAsset .arrow-icon-expGrowl .arrow-icon--path-expGrowl {\n    stroke: #fff;\n  }\n}\n\n.closeAsset .arrow-icon-expGrowl .arrow-icon-expGrowl:hover .arrow-icon--path-expGrowl {\n  height: 75px;\n  width: 75px;\n}\n\n.expanded_right_headline {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 1.5;\n  color: #2e2e2e;\n  margin-bottom: 16px;\n}\n\n@media only screen and (max-width: 1270px) {\n  .expanded_right_headline {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n}\n\n.growl-col {\n  opacity: 1;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  -webkit-transition: opacity 0.25s ease-in, 0s;\n  transition: opacity 0.25s ease-in, 0s;\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-col {\n    height: 46px;\n  }\n}\n\n.growl-col.hide-small {\n  display: none;\n  z-index: 998;\n}\n\n.growl-col.show-small {\n  opacity: 1;\n  z-index: 999;\n}\n\n.growl-col--inner {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-col--inner {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n}\n\n.col__cta-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: auto;\n  padding-right: 48px;\n}\n\n@media only screen and (max-width: 900px) {\n  .col__cta-container {\n    display: none !important;\n  }\n}\n\n.meter-5 .col__cta-container {\n  padding-right: 25px;\n}\n\n.tagline-offer-text {\n  padding-left: 16px;\n  font-weight: 500;\n  color: #343434;\n  font-size: 18px;\n  white-space: nowrap;\n}\n\n@media only screen and (max-width: 1024px) {\n  .tagline-offer-text {\n    padding-top: 0;\n    font-size: 16px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .tagline-offer-text {\n    font-size: 13px;\n  }\n}\n\n.tagline-bold {\n  font-weight: 700;\n  color: #303538;\n}\n\na.cta-smallScrn {\n  display: none;\n}\n\n@media only screen and (max-width: 900px) {\n  a.cta-smallScrn {\n    color: #343434;\n    font-size: 13px;\n    font-weight: 600;\n    text-decoration: underline;\n    text-transform: capitalize;\n    display: inline-block;\n  }\n}\n\n.rem-arts-small-container {\n  height: 100%;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-right: 1px solid #ADADAD;\n  width: 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n@media only screen and (max-width: 900px) {\n  .rem-arts-small-container {\n    display: none;\n  }\n}\n\n.articles-remain-count {\n  font-size: 24px;\n  font-weight: 500;\n  color: #343434;\n  margin-bottom: 3px;\n  line-height: 1;\n}\n\n@media only screen and (max-width: 1024px) {\n  .articles-remain-count {\n    font-size: 18px;\n    margin: 0 0 5px 0;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .articles-remain-count {\n    display: none;\n  }\n}\n\n.articles-remain-copy {\n  color: #343434;\n  font-family: franklin-normal-600, \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 9px;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 1046px) and (min-width: 901px) {\n  .remove_small {\n    display: none;\n  }\n}\n\n.login-wrapper {\n  padding-left: 25px;\n}\n\n@media only screen and (max-width: 900px) {\n  .login-wrapper a {\n    color: #fff;\n    font-size: 10px;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .subscriber-copy-already {\n    display: none;\n  }\n}\n\n.subscriber-copy-login-small {\n  display: none;\n}\n\n@media only screen and (max-width: 1024px) {\n  .subscriber-copy-login-small {\n    display: block;\n  }\n}\n\n.user-logged-in .subscriber-link,\n.user-logged-in .growl-wrapper.getMedium .expanded_login_link {\n  display: none;\n}\n\n#instl_supercontainer,\n#instl_container,\n#instl {\n  display: none;\n}\n\n.growl_open {\n  width: 96%;\n}\n\n@media only screen and (min-width: 901px) {\n  .growl_open .bug_open {\n    display: none;\n  }\n}\n\n.growl-wrapper {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  background-color: #EFEFEF;\n  overflow: hidden;\n  padding: 0;\n  max-width: 1170px;\n  height: 60px;\n  position: fixed;\n  margin: 0 0 8px 2%;\n  left: 0;\n  right: 0;\n  bottom: -80px;\n  -webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.23);\n          box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.23);\n  z-index: 1000000100;\n  -webkit-transition: height 0.6s ease-in-out, 0.25s;\n  transition: height 0.6s ease-in-out, 0.25s;\n  border-radius: 2px;\n}\n\n@media only screen and (min-width: 1238px) {\n  .growl-wrapper {\n    margin: 0 0 8px calc((100% - 1170px)/2);\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .growl-wrapper {\n    height: 50px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-wrapper {\n    height: 70px;\n    width: 100%;\n    margin: 0px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n\n.growl-wrapper.getMedium {\n  height: 330px;\n  padding: 0;\n}\n\n@media only screen and (max-width: 1270px) {\n  .growl-wrapper.getMedium {\n    height: 280px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-wrapper.getMedium {\n    height: 220px;\n  }\n}\n\n.growl-wrapper.getMedium .expanded_login_link {\n  display: block;\n}\n\n.growl_bug_container svg {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  left: 50%;\n  margin-left: -4.5px;\n  height: 14px;\n  width: 7px;\n}\n\n@media only screen and (min-width: 901px) {\n  .growl_bug_container {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 23px;\n    height: 100%;\n    background-color: #ADADAD;\n    cursor: pointer;\n    z-index: 1000;\n    border-bottom-right-radius: 2px;\n    border-top-right-radius: 2px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .growl_bug_container {\n    display: none;\n  }\n}\n\n.small_close {\n  width: 11px;\n  height: 7px;\n}\n\n.smallScrn-meterCount {\n  display: none;\n}\n\n@media only screen and (max-width: 900px) {\n  .smallScrn-meterCount {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #343434;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    font-family: franklin-normal-600, \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 9px;\n    font-weight: 600;\n    height: 24px;\n    line-height: 1;\n    position: relative;\n    width: 100%;\n  }\n}\n\n.smallScrn-meterCount .toggle_bug {\n  height: 100%;\n  width: 24px;\n  text-align: center;\n  margin-right: 8px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.growl_closed .smallScrn-meterCount .toggle_bug {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.meter-5 .smallScrn-meterCount .toggle_bug {\n  display: none;\n}\n\n.smallScrn-meterCount .closeAsset {\n  display: none;\n}\n\n.getMedium .smallScrn-meterCount .closeAsset {\n  height: 100%;\n  width: 24px;\n  text-align: center;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 8px;\n  position: static;\n}\n\n.article_remaining_info {\n  margin-left: 20px;\n}\n\na.expanded_login_link {\n  display: none;\n}\n\n@media only screen and (max-width: 900px) {\n  a.expanded_login_link {\n    color: #fff;\n    display: block;\n    font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n    font-weight: 700;\n    text-decoration: underline;\n    text-transform: uppercase;\n    margin-left: auto;\n    margin-right: 12px;\n  }\n}\n\n.growl-wrapper--inner {\n  width: 100%;\n}\n\n.growl-wrapper--inner .cta-btn {\n  background-color: transparent;\n  color: #2D2D2D;\n  height: 30px;\n  padding: 0 25px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 4px;\n  border: 1px solid #2D2D2D;\n  -webkit-transition: all 0.3s 0s, .4s;\n  transition: all 0.3s 0s, .4s;\n  display: inline-block;\n  line-height: 32px;\n  text-decoration: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media only screen and (max-width: 900px) {\n  .growl-wrapper--inner .cta-btn {\n    display: none;\n  }\n}\n\n.growl-wrapper--inner .cta-btn:hover,\n.getMedium .growl-wrapper--inner .cta-btn {\n  background-color: #2D2D2D;\n  color: #fff;\n}\n\n.growl-wrapper--inner .cta-btn:active {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.expanded_left {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 67%;\n  height: 100%;\n  background-color: #ebebeb;\n  float: left;\n  padding: 2%;\n  box-sizing: border-box;\n}\n\n@media only screen and (max-width: 620px) {\n  .expanded_left {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .expanded_left {\n    background-color: #ebebeb;\n  }\n}\n\n.small_width_cta.cta-btn {\n  display: none;\n}\n\n@media only screen and (max-width: 900px) {\n  .small_width_cta.cta-btn {\n    display: inline-block;\n    margin-top: 1em;\n  }\n}\n\n.expanded_left__inner {\n  opacity: 0;\n  top: 400px;\n  -webkit-transition: all 0.25s ease-in-out, 0.85s;\n  transition: all 0.25s ease-in-out, 0.85s;\n  width: 100%;\n}\n\n.expanded_left__inner .show-medium-inner {\n  opacity: 1;\n  top: 0;\n}\n\n.expanded_left__inner .striker-growl-exp {\n  color: #7a9f7e;\n}\n\n.expanded_left__inner .striker-growl-exp::before {\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  background-color: #fd432e;\n  content: \"\";\n  bottom: 39%;\n}\n\n.sale-hero {\n  float: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 174px;\n  height: 233px;\n  padding-right: 5%;\n}\n\n.show-medium-inner {\n  opacity: 1;\n  top: 0;\n  float: left;\n}\n\n.meter-wrap {\n  font-family: franklin-normal-600, \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  color: #fff;\n  font-weight: 500;\n  position: absolute;\n  bottom: 35px;\n  left: 42px;\n}\n\n.meter-wrap .articles-remain-copy {\n  font-weight: 600;\n  font-size: 14px;\n  color: #fff;\n  font-weight: 500;\n}\n\n@media only screen and (max-width: 900px) {\n  .meter-wrap {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 1270px) {\n  .meter-wrap {\n    bottom: 25px;\n    font-size: 12px;\n  }\n  .meter-wrap .articles-remain-copy {\n    font-size: 12px;\n  }\n}\n\n.meter-wrap .articles-remain-copy {\n  text-transform: lowercase;\n}\n\n.expanded_right {\n  position: relative;\n  width: 33%;\n  background-color: #F6F6F6;\n  height: 100%;\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media only screen and (max-width: 900px) {\n  .expanded_right {\n    background-color: #ebebeb;\n  }\n}\n\n@media only screen and (max-width: 620px) {\n  .expanded_right {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .subscriber-link {\n    display: none;\n  }\n}\n\n.expanded_right--inner {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  top: 300px;\n  -webkit-transition: all 0.25s ease-in-out, 0.85s;\n  transition: all 0.25s ease-in-out, 0.85s;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.expanded_right--inner.show-medium-inner {\n  opacity: 1;\n  top: 50%;\n}\n\n@media only screen and (max-width: 900px) {\n  .expanded_right--inner {\n    width: 100%;\n    height: auto;\n  }\n}\n\n.growl_bundle_lockup {\n  width: 209px;\n  height: 73px;\n  margin-bottom: 22px;\n  margin-top: 77px;\n}\n\n@media only screen and (max-width: 1270px) {\n  .growl_bundle_lockup {\n    margin-top: 53px;\n    margin-bottom: 18px;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .growl_bundle_lockup {\n    margin-top: 0;\n  }\n}\n\n.growl_bundle_lockup.international_bundle {\n  width: 134px;\n}\n\n@media only screen and (max-width: 900px) {\n  .hide_content_small {\n    display: none;\n  }\n}\n\n.arrow-icon {\n  -webkit-transition: left 0.3s ease-in, 0s;\n  transition: left 0.3s ease-in, 0s;\n  height: 19.5px;\n  width: 19.5px;\n  display: inline;\n  position: relative;\n  top: 6.5px;\n  left: -6px;\n  padding-bottom: 1px;\n}\n\n.arrow-icon .arrow-icon--path {\n  fill: none;\n  stroke: #ABABAB;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  -webkit-transition: stroke 0.3s ease-in, 0s;\n  transition: stroke 0.3s ease-in, 0s;\n}\n\n.getMedium .subscriber-link {\n  text-align: center;\n  position: absolute;\n  left: 13px;\n  right: 0;\n  bottom: 35px;\n  color: #9b9b9b;\n  font-size: 14px;\n}\n\n.getMedium .subscriber-link a {\n  color: #9b9b9b;\n}\n\n@media only screen and (max-width: 1270px) {\n  .getMedium .subscriber-link a {\n    font-size: 12px;\n  }\n}\n\n@media only screen and (max-width: 1270px) {\n  .getMedium .subscriber-link {\n    bottom: 25px;\n    font-size: 12px;\n  }\n}\n\n.subscriber-link a {\n  font-family: franklin-normal-600, \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #2e2e2e;\n  text-decoration: underline;\n  font-size: 14px;\n  -webkit-transition: color 0.1s ease-in, 0s;\n  transition: color 0.1s ease-in, 0s;\n  white-space: nowrap;\n}\n\n.notransition {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n\n@media only screen and (max-width: 900px) {\n  .growl_closed.growl-wrapper {\n    height: 24px;\n  }\n}\n\n@media only screen and (min-width: 901px) {\n  .growl_closed {\n    width: calc(9.6% + 23px);\n    max-width: 140px;\n  }\n}\n\n@media only screen and (min-width: 901px) {\n  .growl_closed .growl-col--inner .rem-arts-small-container {\n    width: calc(100% - 23px);\n    background-color: #EFEFEF;\n    z-index: 99999;\n    max-width: 117px;\n  }\n}\n\n@media only screen and (min-width: 901px) {\n  .growl_closed .bug_collapse {\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 901px) {\n  .meter-5 .growl_bug_container {\n    display: none;\n  }\n}\n\n.hideGrowlElements {\n  display: none;\n}\n\n.getMedium .growl-wrapper--inner .cta-btn {\n  background-color: #F0534C;\n  border: 1px solid #F0534C;\n  color: #fff;\n}\n\n.getMedium .growl-wrapper--inner .cta-btn:hover {\n  color: #2D2D2D;\n  background-color: transparent;\n  border: 1px solid #2D2D2D;\n}\n\n.expanded_left {\n  background-color: #F0534C;\n  font-size: 26px;\n  line-height: 30px;\n  padding: 3.5% 2% 2% 40px;\n}\n\n@media only screen and (max-width: 900px) {\n  .expanded_left {\n    background-color: #ebebeb;\n    padding: 3.5%;\n    font-size: 18px;\n    line-height: 21px;\n  }\n}\n\n.expanded_right_headline {\n  margin-bottom: 0;\n  line-height: 16px;\n}\n\n.growl_bundle_lockup {\n  margin-bottom: 17px;\n  margin-top: 56px;\n}\n\n.meter-wrap {\n  color: #80600d;\n  left: 40px;\n}\n\n.meter-wrap .articles-remain-copy {\n  color: #80600d;\n}\n\n.cta-callout__header {\n  font-weight: 700;\n  color: #000;\n}\n\n.cta-callout__header .non-bold {\n  font-weight: 400;\n}\n\n@media only screen and (max-width: 900px) {\n  .cta-callout__header {\n    color: #000;\n  }\n}\n\n.cta-callout__subhead {\n  color: #F0534C;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n.cta-callout__subhead--rate {\n  font-weight: 400;\n}\n\n.growl-col .cta-btn {\n  background-color: #F0534C;\n  border: 1px solid #F0534C;\n  color: #fff;\n}\n\n.growl-col .cta-btn:hover {\n  color: #2D2D2D;\n  background-color: transparent;\n  border: 1px solid #2D2D2D;\n}\n\n.growl-exp .cta-btn {\n  background-color: #F0534C;\n  border: 1px solid #F0534C;\n  color: #fff;\n  margin-top: 15px;\n}\n\n.growl-exp .cta-btn:hover {\n  color: #2D2D2D;\n  background-color: transparent;\n  border: 1px solid #2D2D2D;\n}\n\n.user-logged-in .subscriber-link {\n  display: none;\n}\n\n.user-logged-in .growl-wrapper.getMedium .expanded_login_link {\n  display: block;\n}\n\n.user-logged-in .growl-wrapper.getMedium .expanded_login_link {\n  visibility: hidden;\n}\n\n@media only screen and (max-width: 900px) {\n  .user-logged-in .expanded_login_link {\n    visibility: hidden;\n  }\n}\n\n.expanded_left {\n  background: #F0E7DC;\n  width: 60%;\n}\n\n.expanded_right {\n  width: 40%;\n}\n\n.meter-wrap {\n  color: #9B9B9B;\n}\n\n.meter-wrap .articles-remain-copy {\n  color: #9B9B9B;\n}\n\n@media only screen and (max-width: 620px) {\n  .expanded_left {\n    width: 100%;\n  }\n}\n", "click1": "https://www.nytimes.com/subscription/multiproduct/lp8XRTS.html?campaignId="}, "id": "CA72538D-CED8-4ADB-A8E8-451844DA8925", "dependencies": [], "type": "widget", "widget_id": "universalGrowl"}]}], "name": "Variation #1"}], "audienceIds": ["and", "10705083725"], "changes": null, "id": "10796614885", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_* does not exist", "name": "Nons | USGM | Gateway iframed | NYT5 | BAU | 2018-05-31 - ongoing", "bucketingStrategy": null, "variations": [{"id": "10784140193", "actions": [{"viewId": "8187250053", "changes": [{"src": "/actions/e84b4d520b09f97db144cccbf8d368d8613ffa84fdcd05eeafaafeda15e17bbf.js", "dependencies": [], "id": "440B7415-E059-43E1-809E-0575E8CFD066"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?mktgrfr=gw_mob&op=1&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "D1D80CF3-45EE-4DFA-B9D3-2C05E932F2D2"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "9030630106"], "changes": null, "id": "10756683200", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10173502235", "endOfRange": 5000}, {"entityId": "10163345073", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Subs ,[Bundle] Crossword \u00a0- all bundles w/ a Crossword subscription,[Cookie] exo_* does not exist,[Geo] WW ex US", "name": "Subs w/ access to XWD | All Bar1s: Gifting, Retention, Guides/Programs | WW Geo | 2018-01-22", "bucketingStrategy": "impression", "variations": [{"id": "10173502235", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/a501ad3f0b053fe9b7f3d05e2af905112ecc0a35be90f30bbd89faf1fe76eb85.js", "dependencies": [], "id": "790369FC-8613-4C89-BF5C-4FDF63D1ADF2"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Crossword: to Puzzles main page"}, {"id": "10163345073", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/f0fb148cbdeb4180a3bcd80db3a410924d53c80689f4ee1f3503e4842c41b4dd.js", "dependencies": [], "id": "3D8FBA8B-6CAB-49C8-A72B-D6C1EE214DBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918: Gifting - Intl. 50% (not 70% off) | lp8RUXX | 6WU6Y"}, {"id": "10156605622", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/355d4c1b9f632581dbaab12c6b5df7330475a51bc14846e2ab01fb312e1c3115.js", "dependencies": [], "id": "DB6BF328-1A07-413A-B549-5954106A37FF"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Newsletters"}, {"id": "10168022855", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/019269449532b854bf572cd26eff3e6b13a9dc5cf1c0ef6a7514b3072ade7f7c.js", "dependencies": [], "id": "0CAB6147-76F1-47D6-8064-999249F00713"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Saved Stories"}, {"id": "10168196842", "actions": [{"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"creator": "nytExo", "custom_js": "", "nytID": "subs_ret_behaviorRecos_0917", "full_html": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: subs_ret_behaviorRecos_0917, creative: Bar1, source: optimizely, lastModifiedBy: DJP</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">RECOMMENDATIONS\n            <div id=\"hovercard\" class=\"font-smoothing\">\n                    <div id=\"bar1-body\">\n            <div id=\"bar1_hero\">\n            </div>\n                        \n                     <div id=\"bar1-subhed\">\n                         We found your match.</div>\n                     <div id=\"bar1-subhed1\">    \n\t\t\t\t\t\t Click here, and see the stories we think you&rsquo;ll love,<br>\n\t\t\t\t\t\t based on the articles you&rsquo;ve read.</div>\n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">RECOMMENDATIONS</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_v3.js", "click4": "4", "click2": "2", "click3": "3", "css": "@import url(https://g1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.sub_small_hide {\n    display: none;\n}\n.NYT5Style .masthead-tools {\n    padding-right: 0\n}\n.NYT5Style .masthead-tools #bar1-3panel {\n    display: inline;\n    vertical-align: top;\n    background-image: none\n}\n#bar1-3panel {\n    border: 0;\n    position: relative\n}\n#bar1-nyt5wrapper {\n    opacity: 0\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n    -moz-box-sizing: border-box;\n    background-color: #6288A5;\n    border: 1px solid #4D7B9F;\n    border-radius: 3px;\n    color: #fff !important;\n    display: inline-block;\n    font-size: 1em;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    padding: 7px 10px 6px;\n    text-transform: none;\n    text-decoration: none;\n}\n#bar1-3panel > a:hover {\n    background-color: #326891;\n    border: 1px solid #265E8B;\n    text-decoration: none;\n}\n.NYT4 #bar1-3panel {\n    display: none\n}\n\n#hovercard {\n    width: 450px;\n    height: 330px;\n    max-width: 450px;\n    display: none;\n    margin-left: -360px;\n    z-index: 1000000152;\n    border: 0;\n    position: absolute;\n    left: 50%;\n    top: 30px;\n    text-align: left;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px #888;\n    box-shadow: 0 0 5px #888;\n    white-space: normal;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    background: url('https://cdn.optimizely.com/img/3013110282/594f70bc02864da89af366f548a1be2f.png') 0 0 no-repeat;\n    background-size: cover;\n    z-index: 9999999;        \n\n}\n\n\n#bar1_hero {\n    position: absolute;\n    bottom: 36px;\n    left: 80px;\n    width: 290px;\n    height: 140px;\n    background: url('https://cdn.optimizely.com/img/3013110282/9b55a3c09248413cb8830c0376c4e628.png') 0 0 no-repeat;\n    background-size: cover;\n    z-index: 99999999;        \n\n    \n\n}\n #bar1-subhed {\n    position: absolute;\n    top: 54px;\n    left: 75px;\n    font-family: karnak-normal-400, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 27px;\n    line-height: 27px;     \n    color: #000000;\n    text-align: center;\n}\n    \n#bar1-subhed1 {\n    position: absolute;\n    top: 85px;\n    left: 63px;\n    font-family: franklin-normal-500, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 17px;     \n    color: #000000;\n    text-align: center;\n}\n\n\n   \n#bar1-cta {\n    position: absolute;\n    bottom: 16px;\n    left: 172px;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    width: 105px;\n    height: 30px;  \n    margin: 0 auto;\n    background: #f26c4f;\n    font-size: 11px;\n    line-height: 27px;\n    padding: 0;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 2px;\n    color: #fff;\n}\n    #bar1-cta a {\n        display: block;\n        height: 100%;\n        cursor: pointer;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        border: 0px;\n        padding-top: 9px;\n        padding-left: 0 !important;\n    }\n#hovercard:after {\n        bottom: 100%;\n        left: 350px;\n        border: solid transparent;\n        content: \" \";\n        width: 0;\n        height: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #d7e67d;\n        border-width: 8px;\n        margin: 0;\n    }\n\n#hovercard hr {\n    margin: 4px;\n    width: 320px;\n    opacity: 0.5;\n    color: #000\n}\n.hover-subhead {\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 13px;\n    color: #333;\n    margin: 1px 0 0;\n    width: 170px;\n    position: absolute;\n    top: 10px\n}\n#hovercard h3 a,\n#hovercard p a {\n    color: #000 !important;\n    text-decoration: none;\n    display: block\n}\na.nyt-button-actions {\n    background: #f7f7f5;\n    color: #58595b !important;\n    width: 126px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: 1px solid #ccc !important;\n    text-transform: uppercase;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 15px;\n    text-align: center;\n    padding: 6px 0;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    top: 10px;\n    left: 194px;\n    text-decoration: none !important\n}\n#hovercard a.nyt-button-actions:hover {\n    background: #3c6791;\n    color: #fff !important;\n    text-decoration: none !important\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n    color: #fff !important;\n    background: #3c6791;\n    text-decoration: none !important\n}\n\n\n\n\n\n.NYT5Style #hovercard {\n    top: 26px\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n    text-decoration: none;\n    color: #666\n}\n\n.masthead-tools a.bar1-introtext {\n    position: relative;\n    margin-top: 2px\n}\n\n.bar1-introtext {\n    padding-right: 5px\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n    padding-left: 0;\n    border-left: 0\n}\n\n#hovercard::after {bottom: 100%;left: 350px;border: solid transparent;content: \" \";width: 0;height: 0;position: absolute;pointer-events: none;border-bottom-color: #d7d7d8;border-width: 8px;margin: 0;}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    .NYT5Style #hovercard {\n        left: 50%;\n        top: 29px\n    }\n    .NYT5Style #hovercard:before {\n        top: -14px\n    }\n}\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n    display: none\n}", "click1": "https://www.nytimes.com/recommendations"}, "id": "01DAE462-F632-437D-942C-5645E93C8D0D", "dependencies": [], "type": "widget", "widget_id": "bar1poc2_staging"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Pers Recommendations"}, {"id": "10564260360", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/ddea557cccf9ee02508fc0093f8d40a90f374b653aca23e601d0bdb766b55e19.js", "dependencies": [], "id": "8C8488AD-B009-461C-AA0A-9E0AA2029598"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "82721 Guides: April, \"Shrink your carbon footprint\" (green city/town graphic)"}, {"id": "10681180160", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/282dd4d15daca0b412ddbdb5f85adc8b1c8f0d0e26eecb3e02271bd197129ac2.js", "dependencies": [], "id": "D4CAD860-EC79-434C-8DCC-308FD60DE2E2"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "105233 Subs Benefits: Tidy Home Program"}, {"id": "10679840141", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/21eada3ddde7213c7d4abcd3656237ae5bbf0fd79c839a2ff29200518defbca6.js", "dependencies": [], "id": "B299733B-E75C-4A99-861F-79215E8AA686"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "100466 Subs Guides: May, \"How to read a book\""}], "audienceIds": ["and", "6696333431", "8562601520", "9030630106", "7209740780"], "changes": null, "id": "10172711975", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10851443389", "endOfRange": 10000}], "audienceName": "[cookie] exo_edu_b2b", "name": "abTest_LP_gateway_EDU_B2B_0618 exo_edu_b2b", "bucketingStrategy": null, "variations": [{"id": "10853454509", "actions": [{"viewId": "8187250053", "changes": [{"src": "/actions/a3c3b13ace57266244702e859b807021b201b161a7143997682b083018944f73.js", "dependencies": [], "id": "C20E36CD-1C42-422F-8F8E-CC51ACCC027E"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/32ed9434731039f0f1d6aad8b0f578ca9faa129409aade71dd9649514c08b9c4.js", "dependencies": [], "id": "CF215827-29C9-42D3-A20A-5F650B6157F7"}, {"src": "/actions/32ed9434731039f0f1d6aad8b0f578ca9faa129409aade71dd9649514c08b9c4.js", "dependencies": [], "id": "3CB3C5FA-33E1-43E9-916E-352157455BC1"}]}, {"viewId": "10522331941", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Control"}, {"id": "10851443389", "actions": [{"viewId": "8187250053", "changes": [{"src": "/actions/f7b25cabbe57bb5dcd6fa9bc31fb58690bf38da93c978b8595bf7802ea81a92c.js", "dependencies": [], "id": "5903D243-1856-43FC-AD63-79B6F8601D69"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/439a183d7c4caa01b19e088b8f186e81e10330386ec743f994d0b523163790cc.js", "dependencies": [], "id": "F4BEED0C-CCEB-497A-A5B8-453F4BB7925B"}]}, {"viewId": "10522331941", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "10847976319"], "changes": null, "id": "10851143817", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10619191406", "endOfRange": 10000}], "audienceName": "[Cookie] nyt-gdpr=1,[Cookie] NYT-T does not exist (GDPR),[Support] NYT5: Gateway Is NOT Displayed,[Cookie] exo_* does not exist", "name": "GDPR | EEA Geo (Euro plus others) | Anchor | 2018-05-10 - ongoing", "bucketingStrategy": null, "variations": [{"id": "10619191406", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/c89546278b1efbb84d9a7fd77549b6fd42e091399a0af28aafaa5c1a01f6b528.js", "dependencies": [], "id": "80762BCA-9EB9-45AE-BDF6-F15085D96B07"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/e33432e4152779d4070191f2c2ce9fa51ed76ee7dcde5b64d76402a1c11efd29.js", "dependencies": [], "id": "9A6806A0-BB6B-40CA-A6E1-1FF5AE042317"}]}], "name": "anchor"}, {"id": "10619222975", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/7cacdf0acaec94809d10cbfdbcbc49eef5f6a79cb2f321577d9648edbdf5f820.js", "dependencies": [], "id": "CAF71308-FCA4-4AAB-A186-F8B10A24B0AD"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}], "name": "do not use"}], "audienceIds": ["and", "10646362745", "10649222910", "10679360623", "9030630106"], "changes": null, "id": "10602176371", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10888212368", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[cookie] exo_august_bau_test", "name": "Nons | USGM | August BAU | US Geo | 2017-11-14 \u2013 ongoing TESTING ONLY exo_august_bau_test", "bucketingStrategy": null, "variations": [{"id": "10896181260", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/e7e24fe6b766f2a6d8acb459927c47288af80f4299500bc244509b9b32b8aa9d.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/f0d8d925c9cc82bd264cf86ec8932f7ce0476cc9caf9f3cc104297863a4067c1.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "BAU: $9.99, dark blue. \"The strength of facts\u2026\""}, {"id": "10888212368", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/de5f33bf6de16e9bab6fd75c7b589c16bb36901607d47f0fe87f94b82b062a4d.js", "dependencies": [], "id": "086AB826-DAF6-451E-AD70-31E18B1A7BC1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/1081ed7929bd93297c6e18808a22a4bd7e1c777e1f943f21fb7fe7b3653b4e07.js", "dependencies": [], "id": "51A8A465-C827-484F-ADAB-1E33276C8DCC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "BAU: $9.99 with 50% Mobile Gateway Bypass - dark blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "10878321711"], "changes": null, "id": "10878321712", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9436570846", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Segment] EXCLUDE All EDU - WAT, BlueKai,[Cookie] exo_* does not exist", "name": "Nons | USGM | August BAU | US Geo | 2017-11-14 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "9436570846", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/e7e24fe6b766f2a6d8acb459927c47288af80f4299500bc244509b9b32b8aa9d.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/f0d8d925c9cc82bd264cf86ec8932f7ce0476cc9caf9f3cc104297863a4067c1.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "BAU: $9.99, dark blue. \"The strength of facts\u2026\""}, {"id": "10585892346", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/de5f33bf6de16e9bab6fd75c7b589c16bb36901607d47f0fe87f94b82b062a4d.js", "dependencies": [], "id": "086AB826-DAF6-451E-AD70-31E18B1A7BC1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/1081ed7929bd93297c6e18808a22a4bd7e1c777e1f943f21fb7fe7b3653b4e07.js", "dependencies": [], "id": "51A8A465-C827-484F-ADAB-1E33276C8DCC"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "BAU: $9.99 with 50% Mobile Gateway Bypass - dark blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "9030630106"], "changes": null, "id": "9450500834", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10843071918", "endOfRange": 2500}, {"entityId": "10849561912", "endOfRange": 5000}, {"entityId": "10924087330", "endOfRange": 7500}, {"entityId": "11074217040", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-Subs,[cookie] exo_ab_mobile_lp_gw_subtitle,[Device] Mobile,[LPs] lp87JWF & lp8U87X", "name": "abTest_LP_gateway_mobile_subtitle_0618 exo_ab_mobile_lp_gw_subtitle", "bucketingStrategy": null, "variations": [{"id": "10843071918", "actions": [{"viewId": "8187250053", "changes": []}, {"viewId": "6252880791", "changes": [{"src": "/actions/78028fbb3128155e1f52ebcb523aa8396daef051dd9d027acad1477e8831d058.js", "dependencies": [], "id": "CF215827-29C9-42D3-A20A-5F650B6157F7"}, {"src": "/actions/78028fbb3128155e1f52ebcb523aa8396daef051dd9d027acad1477e8831d058.js", "dependencies": [], "id": "FE5D22D5-4ADA-4ECC-ACAF-39227FA884CA"}]}, {"viewId": "10522331941", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Control"}, {"id": "10849561912", "actions": [{"viewId": "8187250053", "changes": []}, {"viewId": "6252880791", "changes": [{"src": "/actions/d8ce9a5c4f3ef3533f4a72b8e950f3757432e79014aee96b60ef79f22365ba1f.js", "dependencies": [], "id": "C7E201F8-A6D3-4E46-95F9-0B89B915E6E8"}, {"src": "/actions/d8ce9a5c4f3ef3533f4a72b8e950f3757432e79014aee96b60ef79f22365ba1f.js", "dependencies": [], "id": "C3DC8D57-3BC9-495C-90F4-0CC707EDF559"}]}, {"viewId": "10522331941", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Variation #1"}, {"id": "10924087330", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/29bae7387eb7c90d687c3f1951fdba033bc4a9b4c8a0a1f1d10e3a71f2b475cf.js", "dependencies": [], "id": "3F195916-EA8D-42AF-BB3A-B14BB563D37A"}, {"src": "/actions/29bae7387eb7c90d687c3f1951fdba033bc4a9b4c8a0a1f1d10e3a71f2b475cf.js", "dependencies": [], "id": "97DA4CCA-F028-4C1F-BA42-D6F5CF93AA65"}]}, {"viewId": "8187250053", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "10522331941", "changes": []}], "name": "Variation #2"}, {"id": "11074217040", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/e2bf16e7d87b507c362497a455ba429ec322cabe5be212ee090c47804dc7dfb1.js", "dependencies": [], "id": "9F9FB7D2-0BF6-4DB9-8DB6-818E5FA34C62"}, {"src": "/actions/e2bf16e7d87b507c362497a455ba429ec322cabe5be212ee090c47804dc7dfb1.js", "dependencies": [], "id": "180BD20B-64EF-4185-8EE9-D6B8858EAFA5"}]}], "name": "Variation #3"}], "audienceIds": ["and", "6992450319", "10846660816", "10274710611", "10991651727"], "changes": null, "id": "10849292576", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] In Grace, NOT HD (i.e. any Digital Subscription),[Cookie] exo_* does not exist", "name": "Subs | Bar1 | Update Payment Info | Digi In-grace | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8390621064", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/86334f781f51d2fa45616f91ad98bb535ee0be290e0c48b1432bd0d63a82eb5b.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": [{"src": "/actions/5b89533e04a8ae0b786125c30d0414ef5b17f11e87cf112dbfbb1cbcc4845f1d.js", "dependencies": [], "id": "D1049982-9AE1-4062-A0F4-787D1254FD27"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/3e779fb3d62582d9810086b9104574919cc24a4a48db7594abb6e5608bd3651a.js", "dependencies": [], "id": "469B3B4A-01F4-416E-83DC-AB9D26F1DDA2"}]}], "name": "Subs | Digi In-grace | Bar1 | 666R8"}], "audienceIds": ["and", "8379916476", "9030630106"], "changes": null, "id": "8376098187", "integrationSettings": null}, {"weightDistributions": [{"entityId": "11033930543", "endOfRange": 2500}, {"entityId": "11044480412", "endOfRange": 5000}, {"entityId": "11050430922", "endOfRange": 7500}, {"entityId": "11138721231", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Bundle] Crossword \u00a0- all bundles w/ a Crossword subscription,[Cookie] exo_* does not exist", "name": "Subs WITH XWD | All Bar1s: Gift, Retention, Newsletters | US Geo | 2018-07-23 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11033930543", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/1505046235c66bceb408d91c34376467ba6ae3973ce4622c7bb83d95a284e66b.js", "dependencies": [], "id": "790369FC-8613-4C89-BF5C-4FDF63D1ADF2"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Crossword: to Puzzles main page"}, {"id": "11044480412", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6534c0f6aacf8885245629f4ee742e1e02a2013750710e00affebc33c8d5eb96.js", "dependencies": [], "id": "3D8FBA8B-6CAB-49C8-A72B-D6C1EE214DBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918: Gifting: Light 6RHWR"}, {"id": "11050430922", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/38bd6aaa93a5bd7b76aafe53a2308054720f6de26dc0da0030090915ea0b2bec.js", "dependencies": [], "id": "0CAB6147-76F1-47D6-8064-999249F00713"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "WF-146194 Subscriber Guide: July 2018"}, {"id": "11138721231", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/bdb754ffea9951a7e960c22542d6d639af94d62032fa2d92c1821786d4793c13.js", "dependencies": [], "id": "7D028DF6-FC11-4161-AA5F-D5199C894429"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "4137230627", "changes": []}], "name": "WF-142665 Newsletter Optin: Get Updates"}], "audienceIds": ["and", "7814230912", "6696333431", "8562601520", "9030630106"], "changes": null, "id": "11040590549", "integrationSettings": null}, {"weightDistributions": [{"entityId": "11097385731", "endOfRange": 2500}, {"entityId": "11099764739", "endOfRange": 5000}, {"entityId": "11079907449", "endOfRange": 7500}, {"entityId": "11134383350", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Cookie] exo_* does not exist,[Bundle] Crossword \u00a0- all bundles w/ a Crossword subscription", "name": "Subs | All Bar1s: Gifting, Crossword, Guides, Newsletter| US Geo | 2018-07-24 \u2013 ongoing", "bucketingStrategy": "impression", "variations": [{"id": "11097385731", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/62bd59d17b3de0f25e3d17e6cfcd563c2d860b70df9780950921ec77f8a18a72.js", "dependencies": [], "id": "BCEB7048-22BE-4CFF-BFA3-0CD85E187BBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-13012 Crossword: to Subscription LP4"}, {"id": "11099764739", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/516f030afa5128cc47a08a4b02b2c8d93af974eb5c4baa77ac41f2aa04f0fe37.js", "dependencies": [], "id": "604E8551-8AB6-4BB4-9038-7F6DCEB85D7F"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Light 6RHWR"}, {"id": "11079907449", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/3caf5f2e87443c31cc3b9fcc7cb69c66aaf45645004e8d76b1b352fe1246aa64.js", "dependencies": [], "id": "3199A994-362F-46AD-9498-9DB1294EB0A8"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "4137230627", "changes": []}], "name": "WF-146194 Subscriber Guide: July 2018"}, {"id": "11134383350", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/480231fa30efd1e065e2abedfdcd5105467843629a3c877fd9e3adbd1617e30f.js", "dependencies": [], "id": "9D6EFF0D-FC5F-42A8-AA64-C88FB58B3013"}]}], "name": "WF-142665 Newsletter Optin: Get Updates"}], "audienceIds": ["and", "7814230912", "6696333431", "9030630106", ["not", "8562601520"]], "changes": null, "id": "11112866453", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8801831749", "endOfRange": 3333}, {"entityId": "10159022862", "endOfRange": 6666}, {"entityId": "11083806538", "endOfRange": 10000}], "audienceName": "[Geo] WW ex US,[Subscriber Type] Subs ,[Cookie] exo_* does not exist,[Bundle] Crossword \u00a0- all bundles w/ a Crossword subscription", "name": "Subs | All Bar1s: Crossword, Retention, Guides/Programs | WW Geo - 2017-09-22", "bucketingStrategy": "impression", "variations": [{"id": "8801831749", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/c6143e16740e92197edb064184fb1486edcc07fb81b41e937312e1b0b3cc80d7.js", "dependencies": [], "id": "990AB303-9B21-4172-8859-34F0FE74AE17"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-13012: Crossword - to Subscription LP"}, {"id": "8783806675", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/0aa5580954eddc5c932a3a2fc3ae1ab1fab020395577e3d862ccc4bcbde9a57e.js", "dependencies": [], "id": "9D104570-AD9F-46C0-8298-81352119446D"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-15969 Retention: Newsletters"}, {"id": "8784914401", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/0e3c330b0457cff18f5636c921440ddba6229e303b28af09fd05882807d5f705.js", "dependencies": [], "id": "E8E0471C-B05E-404A-92D8-00A1EF8EEA8D"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-15969 Retention: Saved Stories"}, {"id": "8787268223", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/56d5f1e1c55191994c01616c5dde36db316d08d7fc86bc71fcecd32b044d4244.js", "dependencies": [], "id": "1F3F0980-2873-4864-902C-4338AA8CC1DA"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}], "name": "CRS-15969 Retention: Pers Recommendations"}, {"id": "10159022862", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/bb6fb18eb90993dc1527ecc6c0af66cf840b17ff47ad14b0f871868c2a5a7d9b.js", "dependencies": [], "id": "DFD558CC-0F21-4EB1-94E2-959F8976EBAF"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-14918: Gifting - Intl. 50% (not 70%) off | lp8RUXX | 6WU6Y (added 2018-01-22)"}, {"id": "10559651078", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/b6453ffccf744761d6c39c18c9fec7039efa757f6e36e1993f8fcd7adcd024f3.js", "dependencies": [], "id": "7A386D7F-AAF5-47D3-89A4-0F8B2E9CA9FE"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}], "name": "82721 - Subs Guides: April, \"Shrink your carbon footprint\" (green city/town graphic)"}, {"id": "10670880094", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/5ea3fb6bca84179e992d579c430f7271cf1bc6038f8652cafdbb1ba85c608770.js", "dependencies": [], "id": "C626B927-0CD2-4372-A64F-D8E52F1CC1D9"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "105233 Subs Benefits: Tidy Home Program"}, {"id": "10683560074", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/6b0c18b99f0d2630b542b36f2890b2767142bb12d8f4e831613079b82239a91c.js", "dependencies": [], "id": "87E74BA3-AC35-4372-906E-AE711FC97E58"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "100466 Guides: May, \"How to read a book\""}, {"id": "11083806538", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/aae781503dc411371be02f676a1cba8cfb1c1a4d84552f49f2c26f308f0f4d53.js", "dependencies": [], "id": "D95169D0-34A9-4794-B13E-C837A60D4FBE"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "WF-146194 Subscriber Guide: July 2018"}], "audienceIds": ["and", "7209740780", "6696333431", "9030630106", ["not", "8562601520"]], "changes": null, "id": "8797442044", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] Canada, Australia or dev mode,[Cookie] exo_nons_inyt_saleTemplateBreakingNews_0518", "name": "Nons | INYT | Bar1/Welcome | Breaking News Template | Canada/Australia | 2018-07-XX | TESTING SM exo_nons_inyt_saleTemplateBreakingNews_0518", "bucketingStrategy": null, "variations": [{"id": "10760640433", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/4740df0bfa50e6fe65adefc2dbdab9b8c38fbae3a992e048401f23ec72da54e9.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/cddcb278159693d7de308f5ff553c733ba01f8e9689aa546bbc9f515e93f797c.js", "dependencies": [], "id": "07CFEE2E-0B55-47D5-8524-10B997108EBE"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/inyt/lp8CRTS.html?mktgrfr=gw_mob&campaignId=", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "D539D762-46C0-4FE3-B975-AFA6BACBE320"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "129000 - 60% 1/yr. - ORANGE bg GREY cta - lp8CRTS"}], "audienceIds": ["and", "6992450319", "10306790465", "10243070104"], "changes": null, "id": "10755121251", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] UK/Europe or dev mode,[Cookie] exo_nons_inyt_saleTemplateBreakingNews_0518", "name": "Nons | INYT | Bar1/Welcome | Breaking News Template | UK and Europe | 2018-07-XX TESTING SM exo_nons_inyt_saleTemplateBreakingNews_0518", "bucketingStrategy": null, "variations": [{"id": "10754890265", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/13e0424122ea931e71035ba9c112ae5483b43952a6d2ea9273ef0dbdeadf754c.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/9d591bebaa1ddd7bc7647dd8d6285b1f45913777b2629d78b24273b61849f47a.js", "dependencies": [], "id": "07CFEE2E-0B55-47D5-8524-10B997108EBE"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/inyt/lp8URTS.html?mktgrfr=gw_mob&campaignId=", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "D539D762-46C0-4FE3-B975-AFA6BACBE320"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "129000 - Up to 60% 1/yr. - ORANGE bg GREY cta - lp8URTS"}], "audienceIds": ["and", "6992450319", "10304050060", "10243070104"], "changes": null, "id": "10763442237", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[cookie] exo_nons_usgm_saleTemplateBreakingNews_0518", "name": "Nons | USGM | Bar1/Welcome/gateway iframe | RTS | Breaking News Template / June 12 | US Geo | 2018-06-11 - 2018-06-12 exo_nons_usgm_saleTemplateBreakingNews_0518", "bucketingStrategy": null, "variations": [{"id": "10752250725", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/94cd6c1c3345c250792d64ab8fda4269954044680ae3521ed6feeb39f01078bd.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/502d4f17ea95eabe0ed7f7d2609a45ac3c43601505c4825af02da9154d4e20bd.js", "dependencies": [], "id": "07CFEE2E-0B55-47D5-8524-10B997108EBE"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8XRTS.html?mktgrfr=gw_mob&campaignId=", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "D539D762-46C0-4FE3-B975-AFA6BACBE320"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/480199e7a709e045b4ddfcb8c164ca23abc2dc918b84d9bd11110485a8724b2c.js", "dependencies": [], "id": "C9B6A3E6-7A82-4FB6-9423-FC208895D766"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "72497 - 50% off 1/yr. One day only. ORANGE bg GREY cta - lp8XRTS"}], "audienceIds": ["and", "6992450319", "7814230912", "10732474187"], "changes": null, "id": "10729572360", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[cookie] exo_august_guides_bar1_0818,[Subscriber Type] Subs ", "name": "Nons | August Guides | bar1 | 2018-08-01 \u2013 ongoing exo_august_guides_bar1_0818", "bucketingStrategy": null, "variations": [{"id": "11155582073", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/55d381fadf6261f10727d706d816bd80ede0fce0375fa5c8b446aa9b843bde68.js", "dependencies": [], "id": "E323DF24-51F4-406E-B002-D9502177EE8E"}]}, {"viewId": "8179870018", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "11087706175", "6696333431"], "changes": null, "id": "11174970910", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[Cookie] exo_* does not exist", "name": "Nons | USGM | August 18 BAU | US Geo | 2018-08-01 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "11081716772", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6bec38d061a13c6a0291359a0407526c6cef9ead358c80b7fc602b65e1363fee.js", "dependencies": [], "id": "E323DF24-51F4-406E-B002-D9502177EE8E"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/48d3ed196beb8c4ed0cd7501ed9593ca77d9d446572e25d1b16c2b8913c45f80.js", "dependencies": [], "id": "621BBC6D-4A4B-4F40-BCE8-9D94BB3D7C85"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/eaf2269d63d073fce5a3f7ab284822e4f967a1caecba3e26eb63b3ed1c6493fa.js", "dependencies": [], "id": "712BD6E9-B6B4-48B5-930E-4FBF10A319FC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/08676a64d2e7ab7dea0e720c25fda509a4968b9096ccdac3eec66ee2039eb4d1.js", "dependencies": [], "id": "A42239EC-8325-46FD-B047-BB1CF0689EBE"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8HYFM.html?mktgrfr=gw_mob&campaignId=77UQR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "859BA212-A66F-4363-8230-EB88B198F67A"}]}], "name": "Variation #1"}], "audienceIds": ["and", "6992450319", "7814230912", "9030630106"], "changes": null, "id": "11103469106", "integrationSettings": null}, {"weightDistributions": [{"entityId": "11114649893", "endOfRange": 3333}, {"entityId": "11186801653", "endOfRange": 6666}, {"entityId": "11087569917", "endOfRange": 10000}], "audienceName": "[Cookie] exo_Gift_LP_Test", "name": "abTest_Gift_LP_Test | 2018-08 exo_Gift_LP_Test", "bucketingStrategy": null, "variations": [{"id": "11114649893", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/9251b62f1e94a4fe8836910bd4c1375a75f34b8605808be9cbe8acf49a81347e.js", "dependencies": [], "id": "3D97C660-6883-4444-9487-68A3657BE152"}]}], "name": "Control"}, {"id": "11186801653", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/f8e6bf9dd03f3003ae89f1c20a6025ac11be5572f9e79d2c948aa4dc5ec7174e.js", "dependencies": [], "id": "C11BE4E9-61F0-4C2B-9A97-8582CE20219E"}]}], "name": "Variation #1"}, {"id": "11087569917", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/a6c77c1d67ba8f0d83f58d54fe8cf10e7921ef701d9a1edc406eda3612c244b6.js", "dependencies": [], "id": "2E06C2CB-FCC6-4244-918B-ECF707870032"}]}], "name": "Variation #2"}], "audienceIds": ["and", "11192532397"], "changes": null, "id": "11179700862", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs ,[cookie] exo_subs_cx_ask_bar1_welcome,[Geo] WW ex India, US or dev mode", "name": "Subs | CX Ask | WW ex US Geo | bar1 | 2018-08-XX \u2013 ongoing exo_subs_cx_ask_bar1_welcome", "bucketingStrategy": null, "variations": [{"id": "11189450453", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/d6abfbd7f9b16f006d3938ac7d995d298d00fd7125bf5ddb1e4aaa49d95e4fe9.js", "dependencies": [], "id": "E323DF24-51F4-406E-B002-D9502177EE8E"}]}, {"viewId": "8179870018", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "6696333431", "11175271136", "8302021295"], "changes": null, "id": "11119263337", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs ,[cookie] exo_subs_cx_ask_bar1_welcome,[Geo] US", "name": "Subs | CX Ask | US Geo | bar1 | 2018-08-XX \u2013 ongoing exo_subs_cx_ask_bar1_welcome", "bucketingStrategy": null, "variations": [{"id": "11177700654", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7a63aee97d489b9c0d11d2e290d7bcb5c969b14d5a1c1c43cfe579cf2e4836c3.js", "dependencies": [], "id": "E323DF24-51F4-406E-B002-D9502177EE8E"}]}, {"viewId": "8179870018", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "6696333431", "11175271136", "7814230912"], "changes": null, "id": "11165870118", "integrationSettings": null}], "id": "8284715063", "weightDistributions": null, "name": "* Digital Media Traffic (NYT5 Metered Assets / Rich Media) ", "groupId": null, "commitId": "11123206926", "decisionMetadata": {"experimentPriorities": [[{"entityId": "11119263337", "endOfRange": null}], [{"entityId": "11165870118", "endOfRange": null}], [{"entityId": "11174970910", "endOfRange": null}], [{"entityId": "10878321712", "endOfRange": null}], [{"entityId": "10851143817", "endOfRange": null}], [{"entityId": "10849292576", "endOfRange": null}], [{"entityId": "10726433259", "endOfRange": null}], [{"entityId": "10796614885", "endOfRange": null}, {"entityId": "10755121251", "endOfRange": null}], [{"entityId": "10763442237", "endOfRange": null}], [{"entityId": "10760501071", "endOfRange": null}], [{"entityId": "10729572360", "endOfRange": null}], [{"entityId": "8385456763", "endOfRange": null}, {"entityId": "8349521001", "endOfRange": null}], [{"entityId": "8376098187", "endOfRange": null}, {"entityId": "8350705198", "endOfRange": null}], [{"entityId": "10619190559", "endOfRange": null}], [{"entityId": "8352043770", "endOfRange": null}], [{"entityId": "8289681526", "endOfRange": null}, {"entityId": "8328272359", "endOfRange": null}], [{"entityId": "10602176371", "endOfRange": null}], [{"entityId": "10563516977", "endOfRange": null}], [{"entityId": "9996931686", "endOfRange": null}], [{"entityId": "10316062973", "endOfRange": null}], [{"entityId": "10239735178", "endOfRange": null}], [{"entityId": "9263113238", "endOfRange": null}], [{"entityId": "11040590549", "endOfRange": null}, {"entityId": "11112866453", "endOfRange": null}, {"entityId": "10172711975", "endOfRange": null}, {"entityId": "8797442044", "endOfRange": null}], [{"entityId": "8512411082", "endOfRange": null}], [{"entityId": "9821091867", "endOfRange": null}], [{"entityId": "8307281703", "endOfRange": null}], [{"entityId": "10400102443", "endOfRange": null}], [{"entityId": "10395370782", "endOfRange": null}], [{"entityId": "9865780727", "endOfRange": null}], [{"entityId": "9665483993", "endOfRange": null}], [{"entityId": "10763431577", "endOfRange": null}, {"entityId": "10752981500", "endOfRange": null}], [{"entityId": "9666363372", "endOfRange": null}], [{"entityId": "9415403654", "endOfRange": null}], [{"entityId": "10373149618", "endOfRange": null}], [{"entityId": "10584391718", "endOfRange": null}], [{"entityId": "10592891414", "endOfRange": null}], [{"entityId": "10426581177", "endOfRange": null}], [{"entityId": "10521831946", "endOfRange": null}], [{"entityId": "9502840256", "endOfRange": null}], [{"entityId": "10334655219", "endOfRange": null}], [{"entityId": "10316258046", "endOfRange": null}], [{"entityId": "10514633810", "endOfRange": null}], [{"entityId": "10311965207", "endOfRange": null}, {"entityId": "11103469106", "endOfRange": null}], [{"entityId": "8306482752", "endOfRange": null}], [{"entityId": "10368661135", "endOfRange": null}], [{"entityId": "10366072793", "endOfRange": null}], [{"entityId": "10400500010", "endOfRange": null}], [{"entityId": "8544813328", "endOfRange": null}], [{"entityId": "10756683200", "endOfRange": null}], [{"entityId": "9450500834", "endOfRange": null}], [{"entityId": "10447582313", "endOfRange": null}], [{"entityId": "10028310450", "endOfRange": null}], [{"entityId": "10460069676", "endOfRange": null}], [{"entityId": "10751995467", "endOfRange": null}], [{"entityId": "11179700862", "endOfRange": null}]], "offerConsistency": true}, "policy": "equal_priority", "changes": [{"value": "<style>.exo_hide_login_by_default {\n  display: none;\n}\n\n.exo_user_not_logged_in .exo_hide_login_by_default {\n\tdisplay: block;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0B16E813-074B-4E0B-8D9C-C4B9F46DC730"}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[B2B] Antlers at Vail,[Cookie] exo_* does not exist", "name": "Antlers at Vail - 12/23/16", "bucketingStrategy": null, "variations": [{"id": "8278370960", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/70cd06891f249b50b61028f4f5d65008f67c9c10a22542b26358ea414bd660d5.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13839 Fixed Header"}], "audienceIds": ["and", "8275464348", "9030630106"], "changes": null, "id": "8261075815", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] National Library of the Czech Republic,[Cookie] exo_* does not exist", "name": "National Library of the Czech Republic - 12/14/16", "bucketingStrategy": null, "variations": [{"id": "8275531699", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/bcb85cc80d5ad01e137ff7f6fbf9de1c17aadc405b3ddb3ff4a37d7fc1cf0f90.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13614 Fixed Header"}], "audienceIds": ["and", "8252297528", "9030630106"], "changes": null, "id": "8279370590", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Big Sky Resort,[Cookie] exo_* does not exist", "name": "Big Sky Resort - 11/10/16", "bucketingStrategy": null, "variations": [{"id": "8293961037", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4de02ee6dd586c39ba480cee754616b8283804fde8782e7a050fc76fe0b2197e.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13122 Fixed Header"}], "audienceIds": ["and", "8273176592", "9030630106"], "changes": null, "id": "8290607071", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] KLNF,[Cookie] exo_* does not exist", "name": "Kramer Levin (was KLNF Libraries) - 08/10/16", "bucketingStrategy": null, "variations": [{"id": "8292451117", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/e6defd0ad4f6fb2c22ea33dc65b1ac067fe21fa4f71c3a22332ca311b4e07929.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-10448 Fixed Header"}], "audienceIds": ["and", "8279371394", "9030630106"], "changes": null, "id": "8290734084", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Conrad Chicago,[Cookie] exo_* does not exist", "name": "Conrad Chicago - 11/9/16", "bucketingStrategy": null, "variations": [{"id": "8297414811", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/c4c8c83890ebdbef4d1d5afaf9ba936b47316537b851578bf506d6da440a5ac0.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13054 Fixed Header"}], "audienceIds": ["and", "8269873343", "9030630106"], "changes": null, "id": "8292962304", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Vancouver Public Library,[Cookie] exo_* does not exist", "name": "Vancouver Public Library - 10/10/16", "bucketingStrategy": null, "variations": [{"id": "8297780473", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4aaa0f309d0bfc4d988e6a0e04b3b1b18bc8ee569ff40ed4de3926c8cf886788.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-12731 Fixed Header"}], "audienceIds": ["and", "8278311314", "9030630106"], "changes": null, "id": "8293001188", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Union Hotel,[Cookie] exo_* does not exist", "name": "Union Hotel - 03/20/17", "bucketingStrategy": null, "variations": [{"id": "8298711682", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0cda1838eb31a0ae963f6efe1bdcc2296bb54c5b6727ab6be18b37ef6ce0edb7.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-14926 Fixed Header"}], "audienceIds": ["and", "8295712999", "9030630106"], "changes": null, "id": "8295513989", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Sewickley Public Library,[Cookie] exo_* does not exist", "name": "Sewickley Public Library - 12/14/16", "bucketingStrategy": null, "variations": [{"id": "8299451611", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/c8f49de3dcea9db40df177b05676c6b7e0104e5b44cf28e0c2a903973f334919.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13613 Fixed Header"}], "audienceIds": ["and", "8277156228", "9030630106"], "changes": null, "id": "8296840679", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Wythe Hotel,[Cookie] exo_* does not exist", "name": "Wythe Hotel - 10/21/16", "bucketingStrategy": null, "variations": [{"id": "8287119419", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0db9158be3b03385c16453f0bb11bd19536dfd5d25b9898276fd19848bccde4e.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-13002 Fixed Header"}], "audienceIds": ["and", "8266808565", "9030630106"], "changes": null, "id": "8301320877", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Life Hotel,[Cookie] exo_* does not exist", "name": "Life Hotel - 04/07/17", "bucketingStrategy": null, "variations": [{"id": "8322167001", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/a8418f3bee46ec9beb0342803612d865e1263e146ab604b96fa68834731293d2.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-15214 Fixed Header"}], "audienceIds": ["and", "8330140946", "9030630106"], "changes": null, "id": "8316104482", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Ottawa Public Library,[Cookie] exo_* does not exist", "name": "Ottawa Public Library - 04/07/17", "bucketingStrategy": null, "variations": [{"id": "8319003874", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/bd35dd40eab120efc35543a3134cf2a06fe7ee37b23bbdeba1e69c7c2b1186d6.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-15238 Fixed Header"}], "audienceIds": ["and", "8325581970", "9030630106"], "changes": null, "id": "8325631400", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Homewood Suites Seattle Convention Center,[Cookie] exo_* does not exist", "name": "Homewood Suites Seattle Convention Center - 04/25/17", "bucketingStrategy": null, "variations": [{"id": "8346030197", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/bc69b13bb210108fde822751431d3625f7e822e1ac3e87ee3405e15810ed3bbf.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-15263 Fixed Header"}], "audienceIds": ["and", "8354161151", "9030630106"], "changes": null, "id": "8342062730", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Condor Hotel,[Cookie] exo_* does not exist", "name": "Condor Hotel - 07/12/17", "bucketingStrategy": null, "variations": [{"id": "8475052028", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/34820ec2c9451a55af6db8b6b027ac956241e0be49a4130f3c478cb85765135f.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-16382 Fixed Header"}], "audienceIds": ["and", "8472101818", "9030630106"], "changes": null, "id": "8482800763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Anatolia College/American College of Thessaloniki,[Cookie] exo_* does not exist,[Subscriber Type] Anonymous", "name": "Anatolia College/American College of Thessaloniki - 07/13/17", "bucketingStrategy": "impression", "variations": [{"id": "8484301108", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/91a8b25058f2b3d0a462daa26a0727ff314a756b9514eb53f3bbfde65d7256b6.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-16414 Fixed Header - Anonymous users only (as of 4/18/18)"}], "audienceIds": ["and", "8480010926", "9030630106", "6693062194"], "changes": null, "id": "8484670567", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] DIIS Library,[Cookie] exo_* does not exist", "name": "DIIS Library (Danish Institute of International Studies) - 09/08/17", "bucketingStrategy": null, "variations": [{"id": "8688262690", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/a3484df75f66082974157791d45ce3a975d81b426a4bd3756e8880926c0c1350.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-17075 Fixed Header"}], "audienceIds": ["and", "8688780979", "9030630106"], "changes": null, "id": "8694350563", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Elk City Carnegie Library", "name": "Elk City Carnegie Library - 11/13/17", "bucketingStrategy": null, "variations": [{"id": "9278308743", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b2eb6834c2222d11a3f0cde145b2bee23cc2efbe788209762ea82509ce9844cb.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-18104 Fixed Header"}], "audienceIds": ["and", "9030630106", "9265637312"], "changes": null, "id": "9394750703", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Hotel Beacon,[Cookie] exo_* does not exist", "name": "Hotel Beacon - 11/13/17", "bucketingStrategy": null, "variations": [{"id": "9388702685", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/08d121ac4afefc14ce4dc2cd58fa03b5b5724d35852a5ed417ce65d0e5ccbb0a.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-18422 Fixed Header"}], "audienceIds": ["and", "9401261308", "9030630106"], "changes": null, "id": "9401240829", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Plaza Premium", "name": "Plaza Premium - 12/26/17", "bucketingStrategy": null, "variations": [{"id": "9869238270", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/41d203f90c0622c8b0478d045552c0bdc942cd32bbad6b54750f3cabd5a8031a.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-18859 Fixed Header"}], "audienceIds": ["and", "9030630106", "9861004187"], "changes": null, "id": "9863575555", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Best Western Wesley Inn & Suites", "name": "Best Western Wesley Inn & Suites - 02/14/18", "bucketingStrategy": null, "variations": [{"id": "10311822395", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/e7caa3154efee4059e4edcd446cec7fa53ab4d56a84291106597deecbef5c880.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-10 Fixed Header"}], "audienceIds": ["and", "9030630106", "10315430941"], "changes": null, "id": "10313172247", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] NYLO HOTEL", "name": "NYLO HOTEL - 02/14/18", "bucketingStrategy": null, "variations": [{"id": "10315281329", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/e07f2c8056c28a46f5b52beca66f0cda91f27871430d47aa759bb0362a47998e.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-8 Fixed Header"}], "audienceIds": ["and", "9030630106", "10315412716"], "changes": null, "id": "10315430807", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] The Knickerbocker", "name": "Knickerbocker Hotel - 02/14/18", "bucketingStrategy": null, "variations": [{"id": "10319530426", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/e8cd221ce59f9c749d07f14387b7031f48a1fc90467187d8a6cfb3b2026c389f.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-9 Fixed Header"}], "audienceIds": ["and", "9030630106", "10322180988"], "changes": null, "id": "10317601078", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Kanazawa University", "name": "Kanazawa University - 03/13/18", "bucketingStrategy": null, "variations": [{"id": "10444013086", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/98959d4031d280241aa302e53e21992c8c685f3d0c85e8ee56f577d5c0e77a8a.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-28 Fixed Header"}], "audienceIds": ["and", "9030630106", "10461140449"], "changes": null, "id": "10447502232", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Wellington County Public Library", "name": "Wellington County Public Library - 03/21/18", "bucketingStrategy": null, "variations": [{"id": "10479573546", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b56375e00d7cd8d36dad0795fbc062fe7314e87ca4693fb0deea71665c128b12.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-37 Fixed Header"}], "audienceIds": ["and", "9030630106", "10464214993"], "changes": null, "id": "10476423765", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Free Library of Philadelphia", "name": "Free Library of Philadelphia - 04/09/18", "bucketingStrategy": null, "variations": [{"id": "10560744946", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/59c94c9ac42f41d04260302aa2b095550638fc4af5845c13e360205f04bf9106.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-57 Fixed Header"}], "audienceIds": ["and", "9030630106", "10560442294"], "changes": null, "id": "10553923763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Patten Free Library", "name": "Patten Free Library - 04/09/18", "bucketingStrategy": null, "variations": [{"id": "10564435091", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/aee128e45c7cffdd6a5f3269d19a1f3cb62ded99b2a7de679322d8e7b6b00551.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-58 Fixed Header"}], "audienceIds": ["and", "9030630106", "10573725553"], "changes": null, "id": "10556733215", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] West Bridgewater Public Library", "name": "West Bridgewater Public Library - 04/09/18", "bucketingStrategy": null, "variations": [{"id": "10557564398", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/702cbad88d2fbb2e8d08b8114bba7bea7108a1e743fa1dffff7bbad88bafe88c.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-60 Fixed Header"}], "audienceIds": ["and", "9030630106", "10554915423"], "changes": null, "id": "10563202491", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Rolling Meadows Library", "name": "Rolling Meadows Library - 04/09/18", "bucketingStrategy": null, "variations": [{"id": "10562333462", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/356f3450930689ca0304ab12ff1b01202ea80bd07d1927149c88ed0ecdde5cbb.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-59 Fixed Header"}], "audienceIds": ["and", "9030630106", "10559603599"], "changes": null, "id": "10585370472", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[Subscriber Type] Anonymous,[B2B] NYUAD Library", "name": "NYUAD Library (NYU Abu Dhabi) | Anons only | 06/06/2018", "bucketingStrategy": "impression", "variations": [{"id": "10793844487", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/8a3695e8eb893ec68677320d150892b63bda6cdba1f0f63e7d88feb84b27fe7d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-19308 Fixed Header"}], "audienceIds": ["and", "9030630106", "6693062194", "10799135423"], "changes": null, "id": "10796449419", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Toronto Public Library", "name": "Toronto Public Library - 06/04/2018", "bucketingStrategy": null, "variations": [{"id": "10809054689", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/15f6fecb48dda68106f3c453198f94ee0868d62997fd5254cb42b8046d286355.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-19385 Fixed Header"}], "audienceIds": ["and", "9030630106", "10824810313"], "changes": null, "id": "10797542684", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Richard Salter Storrs Library", "name": "Richard Salter Storrs Library - 06/04/2018", "bucketingStrategy": null, "variations": [{"id": "10822880349", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/9676a5933f64e1f00f7194d0554ab9f75f8f57e31bd4434fe378542c566bc64d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-67 Fixed Header"}], "audienceIds": ["and", "9030630106", "10803324596"], "changes": null, "id": "10826590263", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Dighton Public Library", "name": "Dighton Public Library - 06/06/2018", "bucketingStrategy": null, "variations": [{"id": "10797588295", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/67482e38d1caa80bfe0ec3682721e0be31091e2d7fbef9cfc5aa2f8f0d3905fa.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-19322 Fixed Header"}], "audienceIds": ["and", "9030630106", "10833460916"], "changes": null, "id": "10833450858", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Leonia Public Library", "name": "Leonia Public Library | 06/06/2018", "bucketingStrategy": null, "variations": [{"id": "10822121986", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/900e878f5033eec461a9fe409ec035e304ed107b1c6b29e142c6e37d914d0477.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-19327 Fixed Header"}], "audienceIds": ["and", "9030630106", "10833431134"], "changes": null, "id": "10796555990", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Berlin Peck Memorial Library", "name": "Berlin Peck Memorial Library | 06/06/2018", "bucketingStrategy": null, "variations": [{"id": "10831031407", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/aa188a81fc4b4f3e80c94ce46f2bc0a3d11f4e2344629c742260a666577cbb2d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-85 Fixed Header"}], "audienceIds": ["and", "9030630106", "10797826771"], "changes": null, "id": "10801365527", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Lubbock Public Library", "name": "Lubbock Public Library - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10838321622", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/6dbde4cfe1cd91bee92f7c7c52ec3df1c8cf915ec25a6cde9ee4ef1132a4d227.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-79 Fixed Header"}], "audienceIds": ["and", "9030630106", "10829253972"], "changes": null, "id": "10819173984", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Minuteman Library Network", "name": "Minuteman Library Network (37 libraries) - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10834222144", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/97996b5a26f6e583e85e96a71134ebcfd865477389b2f62992721909f338f308.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-89 Fixed Header"}], "audienceIds": ["and", "9030630106", "10809075297"], "changes": null, "id": "10830502373", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Glen Ridge Public Library", "name": "Glen Ridge Public Library - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10815103496", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/bb9fa111ba0287f253993672d6dba80e10fe088fc872b1125eb98428c333dd68.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-65 Fixed Header"}], "audienceIds": ["and", "9030630106", "10836132916"], "changes": null, "id": "10825833539", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Hillsdale Free Public Library", "name": "Hillsdale Free Public Library - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10835590475", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/be79ebb04067d497f71b463808d9957f62ba1b8cea36969d9edbff5cd2fc42d4.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-78 Fixed Header"}], "audienceIds": ["and", "9030630106", "10823881723"], "changes": null, "id": "10828282744", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Palisades Park Public Library", "name": "Palisades Park Public Library - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10809075316", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/3fea5d5a3efe6ad98e029d555434513103409f4dff7cbf45fe2d2ed1c1d19336.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-74 Fixed Header"}], "audienceIds": ["and", "9030630106", "10829911735"], "changes": null, "id": "10838361358", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Stanton Hotel", "name": "Stanton Hotel - 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10804486864", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/2e17fc2d9c84f46b59355b08a1d05884363e89b056cf3c1b214d340e4b657bf6.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-69 Fixed Header"}], "audienceIds": ["and", "9030630106", "10828512794"], "changes": null, "id": "10800699330", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Ruhr University Bochum,[Subscriber Type] Anonymous", "name": "Ruhr-University Bochum | Anons only | 06/06/2018", "bucketingStrategy": "impression", "variations": [{"id": "10827491674", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/e0cda77f1e6524320a89c63d5886cb37bffafb86712412b3812b1fa6a398e6cc.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-19309 Fixed Header"}], "audienceIds": ["and", "9030630106", "10823643148", "6693062194"], "changes": null, "id": "10829152999", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Herrick District Library", "name": "Herrick District Library - 07/06/2018", "bucketingStrategy": null, "variations": [{"id": "11057901537", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ff9940c4a61335ad3c2024c2b5b18bb61fdae2084e8e7c68f511f1c44dcba092.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-103 Fixed Header"}], "audienceIds": ["and", "9030630106", "11066872412"], "changes": null, "id": "11057252327", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Fairview Free Public Library", "name": "Fairview Free Public Library - 07/06/2018", "bucketingStrategy": null, "variations": [{"id": "11039412568", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/acc30b7b62dfcbccebdb6cd75d3d1edf2aed26f1e66d87b80e133f6cd5c43ed1.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-106 Fixed Header"}], "audienceIds": ["and", "9030630106", "11059332181"], "changes": null, "id": "11063940550", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Franklin Township Public Library", "name": "Franklin Township Public Library - 07/19/2018", "bucketingStrategy": null, "variations": [{"id": "11105612127", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/bd1aa5bc414ab097516a89de2f4db193506731af966a92219e117b1b74dbba4a.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-108 Fixed Header"}], "audienceIds": ["and", "9030630106", "11077892277"], "changes": null, "id": "11087811226", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] CUNY,[Subscriber Type] Anonymous", "name": "CUNY - 05/25/18", "bucketingStrategy": null, "variations": [{"id": "10757092837", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/46e16237fa4437bd8a664ad0add3ed76bf3775e26e34abe1c0eedc4571baaca9.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-73 Fixed Header"}], "audienceIds": ["and", "9030630106", "10756862010", "6693062194"], "changes": null, "id": "10758583068", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] ASU - Arizona State University,[Subscriber Type] Anonymous", "name": "ASU Arizona State University - 05/25/18", "bucketingStrategy": null, "variations": [{"id": "10756093519", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/2193e88ad8b5a6d6918eee595ef629b5e529f086e571c5c47f3418867b9c2cb8.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-73 Fixed Header"}], "audienceIds": ["and", "9030630106", "10752722800", "6693062194"], "changes": null, "id": "10758633709", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Livingston Public Library (BCCLS)", "name": "Livingston Public Library - 07/19/2018", "bucketingStrategy": null, "variations": [{"id": "11107172175", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/7b54ab893b6fcdb26b00192cd36442901140e319ad6d7d38d91c05f80f315ba6.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-109 Fixed Header"}], "audienceIds": ["and", "9030630106", "11079662108"], "changes": null, "id": "11077902747", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_* does not exist,[B2B] Eastham Public Library,[Subscriber Type] Anonymous", "name": "Eastham Public Library | Anons only | 06/07/2018", "bucketingStrategy": null, "variations": [{"id": "10832071378", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b943a3ae03b2f2ca6a52fd9c300c411dfc49497041655bd180c0ccbcf28eacbc.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "EXO-86 Fixed Header"}], "audienceIds": ["and", "9030630106", "10822634304", "6693062194"], "changes": null, "id": "10798826367", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] Goldsmiths Univ London,[Cookie] exo_* does not exist,[Subscriber Type] Anonymous", "name": "Goldsmiths University London | Anons only | 03/01/17", "bucketingStrategy": null, "variations": [{"id": "8278400161", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b266bbbdc4f0e0bf416435b3f37e57333509a5ae449bf7a3c524bc5e03d94c01.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "CRS-14691 Fixed Header"}], "audienceIds": ["and", "8269256599", "9030630106", "6693062194"], "changes": null, "id": "8267122938", "integrationSettings": null}], "id": "8273730456", "weightDistributions": null, "name": "EXO - B2B Personalization Headers", "groupId": null, "commitId": "11112925595", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8290734084", "endOfRange": null}], [{"entityId": "8293001188", "endOfRange": null}], [{"entityId": "8301320877", "endOfRange": null}], [{"entityId": "8292962304", "endOfRange": null}], [{"entityId": "8290607071", "endOfRange": null}], [{"entityId": "8279370590", "endOfRange": null}], [{"entityId": "8296840679", "endOfRange": null}], [{"entityId": "8261075815", "endOfRange": null}], [{"entityId": "8267122938", "endOfRange": null}], [{"entityId": "8295513989", "endOfRange": null}], [{"entityId": "8316104482", "endOfRange": null}], [{"entityId": "8325631400", "endOfRange": null}], [{"entityId": "8342062730", "endOfRange": null}], [{"entityId": "8482800763", "endOfRange": null}], [{"entityId": "8484670567", "endOfRange": null}], [{"entityId": "8694350563", "endOfRange": null}], [{"entityId": "9394750703", "endOfRange": null}], [{"entityId": "9401240829", "endOfRange": null}], [{"entityId": "9863575555", "endOfRange": null}], [{"entityId": "10313172247", "endOfRange": null}], [{"entityId": "10317601078", "endOfRange": null}], [{"entityId": "10315430807", "endOfRange": null}], [{"entityId": "10447502232", "endOfRange": null}], [{"entityId": "10476423765", "endOfRange": null}], [{"entityId": "10553923763", "endOfRange": null}], [{"entityId": "10556733215", "endOfRange": null}], [{"entityId": "10585370472", "endOfRange": null}], [{"entityId": "10563202491", "endOfRange": null}], [{"entityId": "10758633709", "endOfRange": null}], [{"entityId": "10758583068", "endOfRange": null}], [{"entityId": "10826590263", "endOfRange": null}], [{"entityId": "10797542684", "endOfRange": null}], [{"entityId": "10801365527", "endOfRange": null}], [{"entityId": "10833450858", "endOfRange": null}], [{"entityId": "10796555990", "endOfRange": null}], [{"entityId": "10796449419", "endOfRange": null}], [{"entityId": "10829152999", "endOfRange": null}], [{"entityId": "10798826367", "endOfRange": null}], [{"entityId": "10825833539", "endOfRange": null}], [{"entityId": "10828282744", "endOfRange": null}], [{"entityId": "10819173984", "endOfRange": null}], [{"entityId": "10830502373", "endOfRange": null}], [{"entityId": "10838361358", "endOfRange": null}], [{"entityId": "10800699330", "endOfRange": null}], [{"entityId": "11063940550", "endOfRange": null}], [{"entityId": "11057252327", "endOfRange": null}], [{"entityId": "11087811226", "endOfRange": null}, {"entityId": "11077902747", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": [{"entityId": "10845782220", "endOfRange": 50}, {"entityId": "10848521311", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Subscriber Type] Non-Subs,[Page Targeting] Homepage   ,[Cookie] exo_* does not exist,[Device] Desktop/Laptop/iPad/Tablet only", "name": "Nons | Sitewide 2018 | Homepage | US Geo | 2018-06-14", "bucketingStrategy": null, "variations": [{"id": "10845782220", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4bfc1fbb4fc391bc2b8ae8efd777f705bc47828148c2a1eaafbdb3cc138e5dc6.js", "dependencies": [], "id": "075EF19C-886F-4FB7-A905-FAB2FF03789F"}]}], "name": "EXO-102 Sitewide - Homepage"}, {"id": "10848521311", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6992450319", "6720163093", "9030630106", "9731710762"], "changes": null, "id": "10842991355", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10848733042", "endOfRange": 50}, {"entityId": "10855681513", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Page Targeting] Homepage   ,[Cookie] exo_* does not exist,[Device] Desktop/Laptop/iPad/Tablet only,[Subscriber Type] Subs ", "name": "Subs | Sitewide 2018 | Homepage | US Geo | 2018-06-14", "bucketingStrategy": null, "variations": [{"id": "10848733042", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4bfc1fbb4fc391bc2b8ae8efd777f705bc47828148c2a1eaafbdb3cc138e5dc6.js", "dependencies": [], "id": "075EF19C-886F-4FB7-A905-FAB2FF03789F"}]}], "name": "EXO-102 Sitewide - Homepage"}, {"id": "10855681513", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6720163093", "9030630106", "9731710762", "6696333431"], "changes": null, "id": "10847422842", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10842991381", "endOfRange": 1000}, {"entityId": "10853971633", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Subscriber Type] Non-Subs,[Cookie] exo_* does not exist,[Device] Desktop/Laptop/iPad/Tablet only,[Page Targeting] Exclude the Homepage", "name": "Nons | Sitewide 2018 | ROS | US Geo | 2018-06-14", "bucketingStrategy": null, "variations": [{"id": "10842991381", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/c94e52911243c17cee29077752e7d73d3cd7fb6b827704c9d692c9117e0a20c1.js", "dependencies": [], "id": "075EF19C-886F-4FB7-A905-FAB2FF03789F"}]}], "name": "EXO-102 Sitewide - ROS exc. HP"}, {"id": "10853971633", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6992450319", "9030630106", "9731710762", "8456760649"], "changes": null, "id": "10846752131", "integrationSettings": null}, {"weightDistributions": [{"entityId": "10851571939", "endOfRange": 1000}, {"entityId": "10852153094", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Cookie] exo_* does not exist,[Device] Desktop/Laptop/iPad/Tablet only,[Page Targeting] Exclude the Homepage,[Subscriber Type] Subs ", "name": "Subs | Sitewide 2018 | ROS | US Geo | 2018-06-14", "bucketingStrategy": null, "variations": [{"id": "10851571939", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b9763f0ba48a57c048ef1f3546533b6db24a0e1577a6789099009a285bb816e5.js", "dependencies": [], "id": "075EF19C-886F-4FB7-A905-FAB2FF03789F"}]}], "name": "EXO-102 Sitewide - ROS exc. HP"}, {"id": "10852153094", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "9030630106", "9731710762", "8456760649", "6696333431"], "changes": null, "id": "10858451119", "integrationSettings": null}], "id": "8267114681", "weightDistributions": null, "name": "EXO - Surveys for Audience Insights", "groupId": null, "commitId": "10844832231", "decisionMetadata": {"experimentPriorities": [[{"entityId": "10842991355", "endOfRange": null}, {"entityId": "10847422842", "endOfRange": null}, {"entityId": "10846752131", "endOfRange": null}, {"entityId": "10858451119", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}], "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}, {"type": "url", "value": "alpha.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "sbx.nytimes.com", "match": "substring"}, {"type": "url", "value": "mobile.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "exact"}, {"type": "url", "value": "mobile.nytimes.com", "match": "simple"}]]], "activationType": "manual", "name": "[Mktg Asset] Anchor Ad", "apiName": "AnchorAd", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "4128620616"}, {"category": "other", "staticConditions": null, "activationType": "manual", "name": "[Mktg Asset] Bar1", "apiName": "Bar1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "4129021553"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}, {"type": "url", "value": "sbx.nytimes.com", "match": "substring"}, {"type": "url", "value": "alpha.stg.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "activationType": "manual", "name": "[Mktg Asset] Interstitial", "apiName": "Interstitial", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "4137230627"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.dev.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://mwcm-author.prd.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.stg.nytimes.com/subscriptions", "match": "substring"}, {"type": "url", "value": "https://www.nytimes.com/subscriptions", "match": "substring"}]], "activationType": "manual", "name": "Landing Pages (All) - Manual", "apiName": "landing_pages", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "6252880791"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "activationType": "polling", "name": "Article Page", "apiName": "article_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return document.querySelector("meta[name=PT]") && document.querySelector("meta[name=PT]").getAttribute("content") === "article";
}, "deactivationEnabled": false, "id": "7666612001"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}]], "activationType": "manual", "name": "[Mktg Asset] Welcome Ad on Homepage", "apiName": "WelcomeAd", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8179870018"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}, {"type": "url", "value": "alpha.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "sbx.nytimes.com", "match": "substring"}, {"type": "url", "value": "mobile.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "activationType": "manual", "name": "[Mktg Asset] Growl", "apiName": "Growl", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8185280121"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}, {"type": "url", "value": "alpha.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "sbx.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "activationType": "manual", "name": "[Mktg Asset] Gateway", "apiName": "Gateway", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8187250053"}, {"category": "other", "staticConditions": null, "name": "ROS (Global - All Snippets)", "apiName": "staging_ros_global__all_snippets", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8263601258"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/subscriptions/Multiproduct/mobilegateway/index.html", "match": "substring"}, {"type": "url", "value": "nytimes.com/subscription/mobilegateway.html", "match": "substring"}]], "activationType": "manual", "name": "[Mktg Asset] Mobile Gateway page", "apiName": "mobile_gateway_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8309420148"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}]], "activationType": "polling", "name": "Metered page", "apiName": "3795841958_metered_page", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  var pt = document.querySelector("meta[name=PT]") && document.querySelector("meta[name=PT]").getAttribute("content"), 
      types = ['article', 'oak', 'imageslideshow', 'multimedia', 'times-journeys', 'blogs-posting'];
  return types.indexOf(pt) >= 0;
}, "deactivationEnabled": false, "id": "8378664063"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}]], "activationType": "manual", "name": "[Mktg Asset] Subscription Ad on Homepage", "apiName": "HpSubscriptionAd", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8635391841"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com\\/\\d{4}\\/\\d{2}\\/\\d{2}", "match": "regex"}, {"type": "url", "value": "www.stg.nytimes.com\\/\\d{4}\\/\\d{2}\\/\\d{2}", "match": "regex"}]], "activationType": "manual", "name": "[Mktg Asset] Subscription Ad on Article", "apiName": "ArticleSubscriptionAd", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "8686224588"}, {"category": "other", "staticConditions": null, "activationType": "manual", "name": "[Support] JSON Kidd Available", "apiName": "page_data_ready", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "9835610235"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/subscription", "match": "substring"}]], "activationType": "polling", "name": "Landing Pages (All) - Selective hide at load & Restore Staging", "apiName": "3795841958_landing_pages_all__selective_hide_at_load__restore_st", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return !!window.NYTD && !!window.NYTD.Abra && !!document.querySelector('html').attributes['data-nyt-ab'];
  }, "deactivationEnabled": false, "id": "10522331941"}], "snippetId": "8239712014", "dimensions": [{"segmentId": "4306880011", "id": "4263057003", "apiName": "application_name", "name": "Application Name"}, {"segmentId": "4303553323", "id": "4295554453", "apiName": "source_app", "name": "Source App"}, {"segmentId": "4299911629", "id": "4300961559", "apiName": "oc", "name": "OC"}, {"segmentId": "4296810049", "id": "4306870008", "apiName": "campaign_id", "name": "Campaign ID"}, {"segmentId": null, "id": "8024450760", "apiName": "campaign_code", "name": "Campaign Code"}, {"segmentId": null, "id": "8194503722", "apiName": "cur_page", "name": "Current Page"}, {"segmentId": null, "id": "8259011849", "apiName": "subscription_type", "name": "Subscription Type"}, {"segmentId": null, "id": "8266141332", "apiName": "subscription_mode", "name": "Subscription Mode"}, {"segmentId": null, "id": "8412620746", "apiName": "user_type", "name": "User Type"}, {"segmentId": null, "id": "8412720818", "apiName": "pass_trafficking", "name": "Bucketed Into trafficking experience"}, {"segmentId": null, "id": "8441661383", "apiName": "geo_country", "name": "Country"}, {"segmentId": null, "id": "8442321393", "apiName": "geo_region", "name": "Country or Region of Interest"}, {"segmentId": null, "id": "8442630948", "apiName": "geo_macro", "name": "US vs. INYT"}, {"segmentId": null, "id": "8468288802", "apiName": "agent_id", "name": "Agent ID"}, {"segmentId": null, "id": "8468480580", "apiName": "cig_segment", "name": "CIG Segment"}, {"segmentId": null, "id": "9836550441", "apiName": "lightbox_viewed", "name": "lightbox_viewed"}, {"segmentId": null, "id": "9866219442", "apiName": "event_debug", "name": "[Support] Data Debugging"}, {"segmentId": null, "id": "10164770032", "apiName": "isLoggedIn", "name": "[Support] JKidd Login Status"}, {"segmentId": null, "id": "10167440018", "apiName": "user_type_jk", "name": "[Support] JKidd User Type"}], "projectJS": function(){// polyfill to fix the NodeList forEach issue
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

var checkUrl = function(string) {
    return window.location.href.indexOf(string) > -1;
};
if(document.cookie.indexOf('optly_debug') > -1 || !(document.cookie.indexOf('optly_sandbox')>-1 || window.location.search.indexOf('optly_sandbox')>-1) && checkUrl('.nytimes.com') && !checkUrl('.app.html') && !checkUrl('.embedded.html')){
if(!(window.optly_events && window.optly_events.start)) {
  window.NYToptly = (function() {
        "use strict";
    var opt_console = {};
    if (document.cookie.indexOf('optly_debug') > -1 || document.cookie.indexOf('opt_console') > -1) {
        opt_console.log = function() {
            console.log.apply(console, arguments);
        };
    }
    else {
        opt_console.log = function() {};
    }
    window.optly_events = {start:true,targeting:null,gateway:null};
    window.optimizely = window.optimizely || [];

    //placements are each ad unit on the page
    //placements are only activated on pagegroups with the correct page type
    var placements = [
      {
        name: "Bar1",
        page: "Bar1",
        pageTypes: ["article","homepage","oak","section front","sectionfront","games-crosswords","blogs-posting","blogs-summary","topic"],
        metaTags: [],
        selector: "#Bar1"
      },
      {
        name: "AnchorAd",
        page: "AnchorAd",
        pageTypes: ["mobile_article", "article", "oak", "imageslideshow", "multimedia", "times-journeys", "classifieds", "blogs-posting","topic","sectionfront","blogs-summary"],
        metaTags: [],
        selector: "#Anchor_optly"
      },
      {
        name: "Interstitial",
        page: "Interstitial",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Interstitial_optly"
      },
      //Remove Landing Page from placement Activation mapping and add Meter-dependent assets
      {
        name: "Growl",
        page: "Growl",
        pageTypes: ["mobile_article","article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Growl_optly"
      },
      {
        name: "WelcomeAd",
        page: "WelcomeAd",
        pageTypes: ["homepage"],
        metaTags: [],
        selector: "#WelcomeAd_optly"
      },
      {
        name: "Gateway",
        page: "Gateway",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","blogs-posting"],
        metaTags: [],
        selector: "#Gateway_optly"
      },
      {
        name: "LP",
        page: "landing_pages",
        pageTypes: ["lp"],
        metaTags: [],
        selector: "#container"
      }, 
      {
        name: "HpSubscriptionAd",
        page: "HpSubscriptionAd",
        pageTypes: ["homepage"],
        metaTags: []
      }, 
      {
        name: "ArticleSubscriptionAd",
        page: "ArticleSubscriptionAd",
        pageTypes: ["article"],
        metaTags: []
      }
      ],
      userInfo, pt, optutils, init = false;
      var meter_pages = ["mobile_article","article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"];

    var initialize = function() {
      init = true;
      opt_console.log("[OptimizelyNYT] ProjectJS start");
      pt = Getters.getPageType();
      optutils = window.optimizely.get("utils");
      if(document.cookie.indexOf('optly_debug') > -1){
        Utils.initLogging();
      }
      Utils.removeClass();
      Utils.pushPageStatus('8284715063','6252880791','lp_changed');
      Utils.debug();
      opt_console.log("[OptimizelyNYT] detected page type: '" + pt + "'");

      // TODO: unified position management
      var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        opt_console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
      if(meter_pages.indexOf(pt)>-1){
        optutils.waitForElement("body").then(function(){
          appendDiv('Growl_optly');
          appendDiv('Gateway_optly');
          appendDiv('Anchor_optly');
          appendDiv('Interstitial_optly');
        });
      }
      if (pt === "homepage") {
        optutils.waitForElement("body").then(function() {
          appendDiv('WelcomeAd_optly');
        });
      }
      if(pt === "lp"){
        optutils.waitForElement("body").then(function(){
          appendDiv("LP_optly");
          appendDiv("LP_lightbox_optly");
        });
      }
      if(pt==="section front"){
        optutils.waitForElement(".masthead-tools").then(function(){
        var newLi = document.createElement("li");
        newLi.setAttribute('id',"Bar1");
        var masthead = document.querySelector('.masthead-tools');
        masthead.insertBefore(newLi,masthead.firstChild);
        });
      }
      //POC III Solution for adding elements to the page
      //Temporary Interstitial Removal for IE
      var utils_optim = optimizely.get('utils');
      utils_optim.waitForElement('#growl-optout').then(function(){
        var growl_optout = document.getElementById('growl-optout');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };
      });
      utils_optim.waitForElement('#growl-skipthis').then(function(){
        var growl_optout = document.getElementById('growl-skipthis');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };
      });
      opt_console.log("[OptimizelyNYT] Fetching NYT user data: ");
      NytContext.getContext(function (error, context) {
        if (!error) {
          // activate
          window.NYToptly.userInfo = context;
          userInfo = context;
          window.optly_events.targeting = context;
          window.optimizely.push({"type":"user","attributes":{"agentId":window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id}});
          opt_console.log("[OptimizelyNYT] User Data: ", userInfo);
          //Activate mobilegateway page when necessary
          if(window.location.href.indexOf('mobilegateway')>-1){
          View.action('ACTIVATE_PAGE','mobile_gateway_page');
          }
          View.action("ACTIVATE_VIEWS");
        } else {
          opt_console.log("[OptimizelyNYT] Error:", error);
        }
      });

    };

    var Getters = {

      // @return {string}.toLowerCase()
      getPageType: function() {
        // update to account for LP page type
        var checkPath = function(string){
          return window.location.pathname.indexOf(string) > -1;
        };
        var checkDomain = function(string){
          return window.location.hostname.indexOf(string) > -1;
        };
        var checkContent = function(element){
          return element && element.getAttribute("content");
        };
        var pt = document.querySelector("meta[name=PT]") || null;
        var sa = document.querySelector("meta[name=sourceApp]") || null;
        if(checkContent(sa) === "times-journeys"){
          return sa;
        }
        if(checkContent(sa) === "nytv"){
          return "video";
        }
        if(checkContent(sa) === "nyt-v5" && checkContent(pt) === "Multimedia"){
          return "multimedia";
        }
        if(checkContent(pt) === "Topic" || (checkContent(pt)==="collection" && checkContent(sa) === "nyt-v5")){
          return "topic";
        }
        if(checkContent(sa) === "games-crosswords"){
          return "games-crosswords";
        }
        if(checkContent(pt) === "Blogs" && window.location.pathname === "/"){
          return "blogs-summary";
        }
        if(checkContent(pt) === "Blogs"){
          return "blogs-posting";
        }
        if(checkPath("blogs/directory")){
          return "blogs-sf";
        }
        if(checkPath('/classifieds')){
          return "classifieds";
        }
        if(checkDomain("myaccount")){
          return "myaccount";
        }
        if(checkPath('/subscription')){
          return "lp";
        }
        if(checkPath('international-contact/international-contact')){
          return "contact";
        }
        //Automatically return Homepage, Article, Section Front, Search and Imageslideshow Types
        if(pt) {
          pt = document.querySelector("meta[name=PT]").getAttribute("content").toLowerCase();
          if(pt==='article' && screen.width < 768){
            return 'mobile_article';
          }
          return pt;
        }
        else {
          return "none";
        }

      },

      getUserType: function() {
        if (!userInfo) {
          return "anon";
        }
        switch (userInfo.user_type) {
        case "sub":
        case "regi":
          return userInfo.user_type;
        default:
          return "anon";
        }
      },
      getUsername: function() {
        if(userInfo.name) {
          return userInfo.name;
        }
        return "";
      },
      getBundleSubscriptions: function() {
        var bundles = [];
        if(userInfo && userInfo.bundle_subscriptions) {
          bundles = userInfo.bundle_subscriptions.map(function(x){ return x.bundle; }).filter(Boolean);
        }
        return bundles;
      },

      getWatSegment: function() {
        return userInfo.wat;
      },

      getIpSegments: function() {
        return userInfo.ip_segments;
      },

      getMeter: function() {
        return userInfo.meter_count;
      },

      getThreshold: function(){
        return userInfo.threshold;
      },

      hitPaywall: function(){
        return userInfo.hitPaywall;
      },

      meterCounted: function(){
        return userInfo.counted;
      },

      hasBundle: function(name) {
        var bundles = this.getBundleSubscriptions();
        return (bundles.indexOf(name) > -1);
      },
      getUserInfoObj:function(){
        return userInfo;
      },

      getInfoLoaded: function() {
        if (userInfo !== null) {
          return true;
        } else {
          return false;
        }
      },
      getSourceApp: function() {
        var sourceApp = document.querySelector("meta[name=sourceApp]");
        if(sourceApp) {
          return sourceApp.getAttribute("content").toLowerCase();
        }
      },
      getCountryText: function(html){
        var re = /%%COUNTRY%%/g;
        var returnHTML = html;
        if (window.NYToptly.getQueryParameter("location")){
          returnHTML = returnHTML.replace(re, window.NYToptly.getQueryParameter("location"));
        } else if(window.optimizely.data.visitor && window.optimizely.data.visitor.location != undefined) {
          returnHTML = returnHTML.replace(re, window.optimizely.data.visitor.location.country);
        } else {
          returnHTML = returnHTML.replace(re, "US");
        }
        return returnHTML;
      },
      getUserRequestInfo: function(){
        var origin = window.location.protocol + "//" + window.location.hostname;
        switch(origin){
          case "https://www.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.stg.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.stg.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.dev.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.dev.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          default:
            return {
                    request:"jsonp",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback="
                    };
        } 
      }
    };

    var user_api_domain = window.location.protocol + "//" + window.location.hostname;
    var Config = {
      USER_INFO_API: user_api_domain + "/svc/web-products/userinfo-v3.json",
      CIG_IP_SEG_API: "https://cigsvc.nytimes.com/r1/jp/ip_seg_v2.rep"
    };


   var Utils = {
      initLogging: function() {
                    var g, h, i, j, k, n, w;
                    Array.prototype.diff = function(a) {
                        return this.filter(function(i) {
                            return a.indexOf(i) < 0;
                        });
                    };
                    var log_have_priority = false;
                    var log_have_audiences = false;
                    var log_experiments = {};
                    var log_priorities = {};
                    var log_pages = {};
                    var priority_number = {};
                    var log_opt_data;
                    var logCampaignDecision = function(event) {
                        if (log_have_priority === false) {
                            log_opt_data = optimizely.get('data');
                            log_experiments = log_opt_data.experiments;
                            log_priorities = log_opt_data.campaigns[8284715063].decisionMetadata.experimentPriorities;
                            for (i = 0; i < log_priorities.length; i++) {
                                for (g = 0; g < log_priorities[i].length; g++) {
                                    var experience_id = log_priorities[i][g].entityId;
                                    var variations = log_opt_data.experiments[experience_id].variations;
                                    for (h = 0; h < variations.length; h++) {
                                        var this_variation = variations[h];
                                        var actions = this_variation.actions;
                                        var changed_pages = [];
                                        for (n = 0; n < actions.length; n++) {
                                            if (actions[n].changes.length > 0) {
                                                changed_pages.push(log_opt_data.pages[actions[n].pageId].name);
                                            }
                                        }
                                    }
                                    var pages_object = {
                                        pages: changed_pages
                                    };
                                    var experience_name = log_experiments[experience_id].name;
                                    priority_number[experience_id] = i + 1;
                                    console.log(i + 1, experience_name, pages_object, log_experiments[experience_id].audienceName);
                                    log_pages = log_opt_data.pages;
                                    log_have_priority = true;
                                }
                            }
                        }
                        if (event.data.campaign.id != "8284715063") {
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + event.data.campaign.name);
                            } else {
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                            }
                        } else {
                            if (!log_have_audiences) {
                                var checkTraffickingAudiences = function(d_t_aud) {
                                    var log_opt_data = log_opt_data || optimizely.get('data');
                                    var traffickingData = log_opt_data.campaigns[8284715063] ? log_opt_data.campaigns[8284715063] : false;
                                    if (traffickingData) {
                                        var audience_array = [];
                                        var experiments = traffickingData.experiments;
                                        for (j = 0; j < experiments.length; j++) {
                                            var audiences = experiments[j].audienceIds;
                                            if (audiences != undefined) {
                                                for (k = 0; k < audiences.length; k++) {
                                                    if (parseInt(audiences[k]) && audience_array.indexOf(audiences[k]) === -1) {
                                                        audience_array.push(audiences[k]);
                                                    }
                                                }
                                            }
                                        }
                                        var tempArray;
                                        var returnAudienceNames = function(array) {
                                            tempArray = [];
                                            for (w = 0; w < array.length; w++) {
                                                tempArray.push(log_opt_data.audiences[array[w]].name);
                                            }
                                            return tempArray;
                                        };
                                        var matchers = returnAudienceNames(d_t_aud);
                                        var failers = returnAudienceNames(audience_array.diff(d_t_aud));
                                        console.log('Matches: ', matchers);
                                        console.log('Fails: ', failers);
                                    }
                                };
                                checkTraffickingAudiences(event.data.decisionTicket.audienceIds);
                                log_have_audiences = true;
                            }
                            if (event.data.decision.pageId === "6252880791" && event.data.decision.experimentId === null) {
                                window.optly_events.lp_test = false;
                            } else if (event.data.decision.pageId === "6252880791") {
                                window.optly_events.lp_test = true;
                            }
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + log_opt_data.pages[event.data.decisionTicket.pageId].name);

                            } else {
                                console.log("For Page: " + log_pages[event.data.decisionTicket.pageId].name);
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                                console.log("Priority Level: ", priority_number[event.data.decision.experimentId]);
                            }

                        }
                    };
                    window.optimizely = window.optimizely || [];
                    window["optimizely"].push({
                        type: "addListener",
                        filter: {
                            type: "lifecycle",
                            name: "campaignDecided"
                        },
                        // Add the campaignDecided function as a handler.
                        handler: logCampaignDecision
                    });
                }
      ,
pushPageStatus: function(campaign_id,page_id,event_name){
                  var pushPageEvent = function(event){
        if (event.data.campaign.id === campaign_id && event.data.decisionTicket.pageId === page_id) {
          optly_events[event_name] = !!event.data.decision.experimentId;
        }
        };
        window.optimizely = window.optimizely || [];
        window["optimizely"].push({
          type: "addListener",
          filter: {
            type: "lifecycle",
            name: "campaignDecided" 
          },
          // Add the campaignDecided function as a handler.
          handler: pushPageEvent
        });

      },

      removeClass: function() {
        HTMLElement.prototype.removeClass = function(remove) {
          var newClassName = "";
          var i;
          var classes = this.className.split(" ");
          for(i = 0; i < classes.length; i++) {
            if(classes[i] !== remove) {
              newClassName += classes[i] + " ";
            }
          }
          this.className = newClassName;
        };
      },

      getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      },

      getCookie: function(a, b) {
        b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
        return b ? b.pop() : "";
      },

      setCookie: function(c_name,value,exdays,c_domain) {
        c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
      },

      setExpiration: function(cookieLife) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
        return  expr.toGMTString();
      },

      loadScript: function(url, callback) {
       if(typeof url === 'string'){
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
      }
      },

      encodeEntities: function (value) {
        var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

        var NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;

        return value.
          replace(/&/g, "&amp;").
          replace(SURROGATE_PAIR_REGEXP, function (value) {
            var hi = value.charCodeAt(0);
            var low = value.charCodeAt(1);
            return "&#" + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ";";
          }).
          replace(NON_ALPHANUMERIC_REGEXP, function (value) {
            return "&#" + value.charCodeAt(0) + ";";
          }).
          replace(/</g, "&lt;").
          replace(/>/g, "&gt;");
      },

      hiddenPre: document.createElement("pre"),

      /**
       * decodes all entities into regular string
       * @param value
       * @returns {string} A string with decoded entities.
       */
      decodeEntities: function (value) {
        var hiddenPre = this.hiddenPre;

        if (!value) {
          return "";
        }

        hiddenPre.innerHTML = value.replace(/</g, "&lt;");
        // innerText depends on styling as it doesn't display hidden elements.
        // Therefore, it's better to use textContent not to cause unnecessary reflows.
        return hiddenPre.textContent;
      },

      debug: function() {
        if(localStorage.getItem("nytest")) {
          debugger;
        }
      },

      setAnchorTrackingParams: function(name, container) {
          var optUtils = window["optimizely"].get('utils');
          window.NYToptly.skipMtrAnchorTrackingParams = true;
          opt_console.log('[OptimizelyNYT] Set up tracking params to the links');
          require(["auth/mtr", "jquery/nyt"], function(Mtr, $) {
              optUtils.waitUntil(function() { 
                  return Mtr.trackingParams[name]; 
              }).then(function() {
                  var tp = Mtr.trackingParams[name],
                      etArgs = $.extend({}, tp.common, tp.links),
                      qs = Utils.buildEtParametersString(etArgs),
                      links = container.querySelectorAll('a');
                  
                  Array.from(links).forEach(function(link) {
                      Utils.processLink(link, qs);
                  });
                  // trigger event so that custom js in experience knows 
                  // that we are done modifying the links
                  var etParamsSetEvent = document.createEvent('Event');
                  etParamsSetEvent.initEvent('etParamsSetFlag', true, true);
                  document.dispatchEvent(etParamsSetEvent);
                  window.optly_events.etParamsSetEvent = true;
              });
          });
        },

      processLink: function(link, qs) {
          var url = link.href, separator = "?";
          link.setAttribute('target', '_blank');
          if (!url || (
              !url.match(/myaccount/) &&
              !url.match(/subscription/)))  { return; }
          if (link.search !== '') { separator = "&"; }
          link.search = link.search + separator + qs;
      },

      buildEtParametersString: function (params) {
          var i, paramNames = Object.keys(params), qs = [];
          for (i = 0; i < paramNames.length; ++i) {
              qs.push(paramNames[i] + '=' + params[paramNames[i]]);
          }
          qs = qs.join('&');
          qs = qs.replace(/ /g, '+');
          qs = qs.replace(/\//g, '%2F');
          return qs;
      },

      sendImpressionToEtTracker: function(name) {
        var optUtils = window["optimizely"].get('utils');
        opt_console.log('[OptimizelyNYT] Send ' + name + ' impression to ET tracker');
        require(["auth/mtr", "jquery/nyt"], function(Mtr, $) {
            optUtils.waitUntil(function() {
                return Mtr.trackingParams[name] && ('TAGX' in window);
            }).then(function() {
                var tp = Mtr.trackingParams[name],
                    action = name.toLowerCase() + '-load',
                    args = $.extend({}, tp.common, tp.load),
                    desc = 'impression';
                TAGX.EventProxy.trigger(action, args, desc);
                });
            });
      }, 
      runWhenReady: function runWhenReady(testFunction, inFunction, defaultFunction, mlsecs, reps) {
          var repetition = reps || 5;

          setTimeout(function z() {
              if (testFunction()) {
                  inFunction();
              } else if (--repetition) {
                  setTimeout(z, mlsecs);
              } else if (defaultFunction) {
                  defaultFunction();
              }
          }, mlsecs);
      },
      sendTrackingToDataLayer: function(dataObj) {
         dataObj = dataObj || {};
         Utils.runWhenReady(
            function() {
               return (window.dataLayer && window.dataLayer.push);
            },
            function() {
               window.dataLayer.push(dataObj);
               // log to console
               var eventName = (dataObj && dataObj.event) || "unknown event";
               var assetName = (dataObj && dataObj.module && dataObj.module.name) || "unknown asset";
               if(eventName === "impression") {
                  opt_console.log('[OptimizelyNYT] Send ' + assetName + ' ' + eventName + ' to Data Layer');
               }
               else {
                  var eventType = (dataObj && dataObj.eventData  && dataObj.eventData.type) || "unknown eventType";
                  var elementName = (dataObj && dataObj.module && dataObj.module.element && dataObj.module.element.name) || "unknown elementName";
                  opt_console.log('[OptimizelyNYT] Send ' + assetName + ' ' + eventName + ' (' + eventType + ') on ' + elementName + ' to Data Layer');
               }
            },
            null, 100, 100
         );
      }
        
   };

    // TODO: use lightweight HTTP lib
    var AJAX = {
      jsonp: function(urlWithCallback, callbackName, callback) {
        var script = document.createElement("script");
        script.src = urlWithCallback + "" + callbackName;
        window[callbackName] = function(data) {
          callback(null, data);
          delete window[callbackName];
        };
        document.head.appendChild(script);
      },

      get: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(null);

        xhr.onreadystatechange = function() {
          var DONE = 4; // readyState 4 means the request is done.
          var OK = 200; // status 200 is a successful return.

          if (xhr.readyState === DONE) {

            if (xhr.status === OK) {
              callback(null, xhr.responseText);
            } else {
              callback(xhr.status, null);
              opt_console.log("[OptimizelyNYT] Error: " + xhr.status); // An error occurred during the request.
            }
          }
        };
      }
    };

    var NytContext = {
      getContext: function (callback) {
        var that = this;
        var context = {
          regi_id: undefined, // NYT user ID (identifies regi, sub)
          agent_id: undefined, // NYT Agent ID (identifies browser)
          user_type: undefined, // anon, regi, sub
          ip_segments: [], // does IP belongs to edu range?
          wat: "", // CIG "segment", i.e. EDU, K12, K12_ACTIVE_SUBS
          meter_count: undefined, // Current Meter from Meter Service
          counted: undefined, 
          hitPaywall: false,
          name: undefined,
          bundle_subscriptions: []
        };

        // simulating async.parallel
        //MTR.js does not get called on Home Page, should I change the expected Callbacks accordingly or make the common callback call?
        //Remove gateway parameter check
        var expectedCallbacks = 2;
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          expectedCallbacks = 3;
        }
        var commonCallback = function () {
          expectedCallbacks--;
          if (expectedCallbacks === 0) {
            callback(null, context);
          }
        };

        this._getUserInfo(function (error, userInfo) {

          if (!error) {
            context.regi_id = parseInt(userInfo.id, 10);
            context.agent_id = Utils.getCookie("nyt-a");
            context.user_type = that._getUserType(userInfo);
            context.wat = userInfo.demographics.wat;
            context.name = userInfo.name;
            context.bundle_subscriptions = userInfo.demographics.bundle_subscriptions && userInfo.demographics.bundle_subscriptions ? userInfo.demographics.bundle_subscriptions : undefined;
            context.full_object = userInfo;
          }
          commonCallback();
        });

        this._getCigIPStatus(function (error, cigObj) {
          if (!error) {
            context.cigObj = cigObj;
          }
          commonCallback();
        });

        this._getMeterService(function (optly_meter_obj) {
          context.meter_count = optly_meter_obj.meter_count;
          context.hitPaywall = optly_meter_obj.hit_paywall;
          context.counted = optly_meter_obj.counted;
          context.threshold = optly_meter_obj.threshold;
          commonCallback();
        });
      },

      _getUserType: function (userInfo) {
        if (JSON.stringify(userInfo.subscription).match(/HD|MM|MSD|MTD|TPR/)) {
          return "sub";
        }

        if (parseInt(userInfo.id, 10)) {
          return "regi";
        }

        return "anon";
      },

      _isLoggedIn: function () {
        return Utils.getCookie("nyt-d") ? true : false;
      },

      _getUserInfo: function (callback) {

        // this will be overridden based on AJAX response
        var payload = {
          "meta": {},
          "data": {
            "id": "0",
            "name": "",
            "subscription": [],
            "demographics": {}
          }
        };

        var domElement = document.getElementById("user-info-data");
        var isDataAvailableOnPage = false;
        if (domElement) {
          try {
            payload = JSON.parse(domElement.innerHTML);
            isDataAvailableOnPage = true;
            opt_console.log("[OptimizelyNYT] UserInfo is available on the page, no need to fetch");
            opt_console.log("[OptimizelyNYT] User Data: ", payload);
          } catch (error) {
            isDataAvailableOnPage = false;
            opt_console.log("[OptimizelyNYT] Error: Unable to parse UserInfo JSON");
          } finally {
            if (isDataAvailableOnPage) {
              callback(null, payload.data); // sync
              return; // exiting
            }
          }
        }
        if(window.location.origin === "https://myaccount.stg.nytimes.com"||window.location.origin === "https://myaccount.nytimes.com"){
          callback(null, payload.data);
          return;
        }
        var request_info_object = Getters.getUserRequestInfo();
        if(request_info_object.request === "get"){
          AJAX.get(request_info_object.url, function (error, response) {
                        payload = {};
                        payload.data = null;
            if (!error) {
              try {
                payload = typeof response === "object" ? response : window.JSON.parse(response);
              } catch (error) {
                opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
                // using default empty values
              }
            }
            callback(error, payload.data);

          });
        }
        else{
          AJAX.jsonp("https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback=", 'userInfoCallback', function (error, response) {
                    payload = {};
                    payload.data = null;
          if (!error) {
            try {
              payload = typeof response === "object" ? response : window.JSON.parse(response);
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
          }
          callback(error, payload.data);

        });
        }
      },

      //TODO: support EDU & CORP
      _getCigIPStatus: function (callback) {
        var cigObj = {edu:{},b2b:{}};
        var edu_cookie_content = Utils.getCookie('edu_cig_opt');
        var b2b_cookie_content = Utils.getCookie('b2b_cig_opt');
        if(edu_cookie_content && b2b_cookie_content){
          cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
          cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
          callback(null, cigObj);
          return;
        }
        var apiUrl = Config.CIG_IP_SEG_API + "?";
        var testIp = Utils.getParameterByName("test_ip") || Utils.getParameterByName("testIp");
        if (testIp) {
          apiUrl += "test_ip=" + Utils.encodeEntities(testIp) + "&";
        }
        apiUrl += "jsoncallback=";
        AJAX.jsonp(apiUrl, "callback", function (error, response) {
          // this will be overridden based on AJAX response

          var data = {
            segments: [{
              c: {
                corp: "no"
              },
              e: {
                edu: "no"
              }
            }]
          };
          if (!error) {
            try {
              data = typeof response === "object" ? response.payload : window.JSON.parse(response).payload;
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
            var EDUsegments = data.segments[0].e;
            var CORPsegments = data.segments[0].c;
            if(!edu_cookie_content){
              if((cigObj.edu.isEduUser = EDUsegments.edu !== "no")){
                cigObj.edu.nickName = EDUsegments.nick_name ?  EDUsegments.nick_name : undefined;
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),1,'.nytimes.com');
              }
              else{
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),'.nytimes.com');
              }              
            }
            else{
              cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
            }
            if(!b2b_cookie_content){
              if((cigObj.b2b.isCorpUser = CORPsegments.corp !== "no")){
                cigObj.b2b.orgName = CORPsegments.org_name ? CORPsegments.org_name : undefined;
                cigObj.b2b.orgType = CORPsegments.type ? CORPsegments.type : undefined;
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),30,'.nytimes.com');
               }
               else{
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),'.nytimes.com');
               }
            }
            else{
              cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
            }
          }
          callback(error, cigObj);

        });
      },

      _getMeterService: function (callback) {
        var optly_meter_obj = {
          "meter_count": 0,
          "hit_paywall": false,
          "counted" : false,
          "threshold":10
        };
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          //Poll for 
         var optutils = optimizely.get('utils');
          var cancelPolling = optutils.poll(
          function(){
          if(typeof window.require === 'function'){
            opt_console.log('Found require');

             window.require(['foundation/main'],function(){
            window.require(['auth/mtr','jquery/nyt'], function(mtr,$){
              mtr.meterReady.done(function(){
              optly_meter_obj.meter_count = mtr.getMeterPagesCount();
                opt_console.log("Deferred meter count is", optly_meter_obj.meter_count);
              optly_meter_obj.hit_paywall = mtr.hitPaywall;
                opt_console.log("Deferred hit paywall is ", optly_meter_obj.hit_paywall);
              optly_meter_obj.counted = mtr.counted || optly_meter_obj.counted;
              optly_meter_obj.threshold = mtr.threshold || optly_meter_obj.threshold;
                callback(optly_meter_obj);
              });
            window.optly_meter = mtr.getMeterPagesCount();
            opt_console.log("Old Optly Meter is " + optly_meter);
            },
            function(err){
              opt_console.log(err);
              callback(optly_meter_obj);
            });
               });


            cancelPolling();
          }else{
            opt_console.log('Polling for Require');
          }
          },50);   
        }
    }};

    var View = {
      action: function(event, payload) {

        switch (event) {
        case "ACTIVATE_PAGE":
          window["optimizely"].push({
            type: "page",
            pageName: payload
          });
          break;

        case "LOAD_WIDGET_PLACEMENT":
            //Widget loaded will handle all widgets
            //widgets include fallthrough, killset, normal async, a/b test
          placements.forEach(function(element) {
            if(element.name == payload.name && element.kill !== true && element.activated !== true && ((payload.multi == "true")? element.multi === payload.codename : true) && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              opt_console.log("[OptimizelyNYT] ", event.toUpperCase(), payload);
              element.html = payload.html;
              element.css = payload.css;
              element.selector = payload.selector;
              element.script = payload.script;
              element.script_2 = payload.script_2;
              element.script_3 = payload.script_3;
              element.script_4 = payload.script_4;
              element.activated = true;
              element.callback = payload.callback;
              optutils.waitForElement(element.selector).then(function() {
                document.querySelector(element.selector).innerHTML = element.html;
                document.querySelector(element.selector).setAttribute('class',
                document.querySelector(element.selector).getAttribute('class') + " optly");
                Utils.loadScript(element.script);
                if(element.script_2 != ""){Utils.loadScript(element.script_2);};
                if(element.script_3 != ""){Utils.loadScript(element.script_3);};
                if(element.script_4 != ""){Utils.loadScript(element.script_4);};
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = element.css;
                document.getElementsByTagName("head")[0].appendChild(style);
                if(element.callback) {
                  element.callback();
                }
              });
            }
          });
          break;
        case "ACTIVATE_VIEWS":
          placements.forEach(function(element) {
            if(element.page && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              View.action("ACTIVATE_PAGE", element.page);
            }
          });
          break;
        }
      }
    };

    //TODO set these as attributes rather than returning variables
    /* exported Targeting */
    var Targeting = {
      getAudience: function(type) {
        switch(type) {
        case "user":
          return Getters.getUserType();
        case "bundles":
          return Getters.getBundleSubscriptions();
        case "seg_wat":
          return Getters.getWatSegment();
        case "seg_ip":
          return Getters.getIpSegments();
        case "meter_views":
          return Getters.getMeter();
        case "meter_threshold":
          return Getters.getThreshold();
        case "hit_paywall":
          return Getters.hitPaywall();
        case "counted":
          return Getters.meterCounted();
        }
      }
    };

    return {
      initialize: initialize,
      active: init,
      audience: Targeting.getAudience,
      getPageType: Getters.getPageType,
      getName: Getters.getUsername,
      loadScript: Utils.loadScript,
      setCookie: Utils.setCookie,
      viewAction: View.action,
      debugView: View,
      activateExperiment: Targeting.activateMulti,
      passThrough: Targeting.passThrough,
      userInfo: userInfo,
      getQueryParameter: Utils.getParameterByName,
      ajax: AJAX.get,
      getCountryText: Getters.getCountryText,
      initLogging: Utils.initLogging,
      skipMtrAnchorTrackingParams: false,
      setAnchorTrackingParams: Utils.setAnchorTrackingParams,
      sendImpressionToEtTracker: Utils.sendImpressionToEtTracker,
      runWhenReady: Utils.runWhenReady,
      sendTrackingToDataLayer: Utils.sendTrackingToDataLayer,
      opt_console: opt_console
    };
  })();

  window.optimizely = window.optimizely || [];

  window.optimizely.push({
    type: "addListener",
    filter: {
      type: "lifecycle",
      name: "initialized"
    },
    handler: function() {
      if(window.NYToptly.active !== true) {
        window.NYToptly.initialize();
      }
    }
  });
  }
}
if(window.location.href.indexOf("/get-started/thank-you") > -1){
    window.optimizely = window.optimizely || []; 
    window.optimizely.push({
    type: "user",
    attributes: {
        subscription_mode: SERVER_SIDE_DATA.mode,
        subscription_type: SERVER_SIDE_DATA.purchase_info.purchase_details.bundleName
    }
});}
}, "namespace": "a3013110282", "listTargetingCookies": [], "dcpKeyfieldLocators": [{"dcp_datasource_id": "4300326370", "is_optimizely": true, "type": "uid", "name": ""}], "dcpServiceId": "4295653407", "audiences": [{"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|Edu_B2C_Formers/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_ip\") == \"edu\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "224163", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "6679643984", "name": "[Segment] All EDU: *all* segments except K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') == \"anon\"", "type": "code", "name": null, "match": null}], ["or", {"value": "NYToptly.jkidd.user.isLoggedIn === false", "type": "code", "name": null, "match": null}]]], "id": "6693062194", "name": "[Subscriber Type] Anonymous"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') == \"sub\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "sub", "type": "custom_attribute", "name": "10167440018", "match": null}], ["or", {"value": "optimizely.get('visitor').custom[\"10756924637\"].value === \"sub\"", "type": "code", "name": null, "match": null}]]], "id": "6696333431", "name": "[Subscriber Type] Subs "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.getPageType().toLowerCase() == \"homepage\"", "type": "code", "name": null, "match": null}]]], "id": "6720163093", "name": "[Page Targeting] Homepage   "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') !== \"sub\"", "type": "code", "name": null, "match": null}], ["not", ["or", {"value": "sub", "type": "custom_attribute", "name": "10167440018", "match": null}]]]], "id": "6992450319", "name": "[Subscriber Type] Non-Subs"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], ["or", ["not", ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "United States of America", "type": "query", "name": "location", "match": "exact"}]]]], "id": "7209740780", "name": "[Geo] WW ex US"}, {"conditions": ["and", ["or", ["or", {"value": "AU", "type": "location", "name": null, "match": null}], ["or", {"value": "Australia", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "Aus", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "7798550316", "name": "[Geo] Australia"}, {"conditions": ["and", ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}], ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], "id": "7814230912", "name": "[Geo] US"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/K12/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7857642821", "name": "[WAT] K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/HD_Grace/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7877803306", "name": "[WAT] HD_Grace"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "danny", "match": "exact"}], ["or", {"value": "true", "type": "cookies", "name": "exo_danny", "match": "exact"}]]], "id": "8138730582", "name": "[Cookie] Test Danny 1"}, {"conditions": ["and", ["or", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]], "id": "8248972263", "name": "[Geo] India"}, {"conditions": ["and", ["or", ["or", {"value": "National Library of the Czech Republic", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8252297528", "name": "[B2B] National Library of the Czech Republic"}, {"conditions": ["and", ["or", ["or", {"value": "Wythe Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8266808565", "name": "[B2B] Wythe Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Goldsmiths Univ London", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269256599", "name": "[B2B] Goldsmiths Univ London"}, {"conditions": ["and", ["or", ["or", {"value": "Conrad Chicago", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269873343", "name": "[B2B] Conrad Chicago"}, {"conditions": ["and", ["or", ["or", {"value": "Big Sky Resort", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8273176592", "name": "[B2B] Big Sky Resort"}, {"conditions": ["and", ["or", ["or", {"value": "Antlers at Vail", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8275464348", "name": "[B2B] Antlers at Vail"}, {"conditions": ["and", ["or", ["or", {"value": "Sewickley Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8277156228", "name": "[B2B] Sewickley Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Vancouver Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8278311314", "name": "[B2B] Vancouver Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "KLNF", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8279371394", "name": "[B2B] KLNF"}, {"conditions": ["and", ["or", ["or", {"value": "221249", "type": "vendor.bluekai", "name": "campaigns", "match": null}], ["or", {"value": "true", "type": "query", "name": "digi_formers", "match": "exact"}]], ["or", ["not", ["or", {"value": "221248", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "8281592112", "name": "[BlueKai] INTL Formers INYT - 221249 and NOT 221248"}, {"conditions": ["and", ["or", ["or", {"value": "Union Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8295712999", "name": "[B2B] Union Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('section/learning') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "learning", "type": "query", "name": "contentCollection", "match": "exact"}], ["or", {"value": "lesson-plans", "type": "query", "name": "contentCollection", "match": "exact"}], ["or", {"value": "The%20Learning%20Network", "type": "query", "name": "contentCollection", "match": "exact"}]]], "id": "8301992165", "name": "[Page Targeting] Learning Network - All Articles/Pages"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}]], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "US", "type": "cookies", "name": "abTestLocation", "match": "exact"}, {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "AUD", "type": "query", "name": "previewCurrency", "match": "exact"}, {"value": "EUR", "type": "query", "name": "previewCurrency", "match": "exact"}, {"value": "GBP", "type": "query", "name": "previewCurrency", "match": "exact"}, {"value": "USD", "type": "query", "name": "previewCurrency", "match": "exact"}]]], "id": "8302021295", "name": "[Geo] WW ex India, US or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_NOT_OPT_IN/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_OPT_OUT/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8310130736", "name": "[WAT] Newsletter - opted out / not opted in"}, {"conditions": ["and", ["or", ["or", {"value": "Ottawa Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8325581970", "name": "[B2B] Ottawa Public Library"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]]], "id": "8325672904", "name": "[Geo] NOT India"}, {"conditions": ["and", ["or", ["or", {"value": "CA", "type": "location", "name": null, "match": null}], ["or", {"value": "CA", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "8329145104", "name": "[Geo] Canada Only"}, {"conditions": ["and", ["or", ["or", {"value": "Life Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8330140946", "name": "[B2B] Life Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_tuesday,friday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "8331673235", "name": "[Dayparting] Welcome Killset for INTL Homepage (WW ex US, INYT)"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_thursday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], "id": "8340731813", "name": "[Dayparting] Welcome Killset for US Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_wednesday,thursday", "type": "time_and_day", "name": null, "match": null}]]], "id": "8350622915", "name": "[Dayparting] HD Grace"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "GraceViewed", "match": "exists"}]]]], "id": "8354152464", "name": "[Cookie] GraceViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Homewood Suites Seattle Convention Center", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8354161151", "name": "[B2B] Homewood Suites Seattle Convention Center"}, {"conditions": ["and", ["or", ["or", {"value": "( window.NYToptly.audience('bundles').indexOf('E') == -1 || window.NYToptly.audience('bundles').indexOf('H') == -1 )", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "290505", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "8379916476", "name": "[Bundle] In Grace, NOT HD (i.e. any Digital Subscription)"}, {"conditions": ["and", ["or", ["or", {"value": "ADBLOCK", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "221326", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "8380850399", "name": "[Cookie] B2B w ADBLOCK flag"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "survey_triggered", "match": "exists"}]]]], "id": "8404891843", "name": "[Cookie] survey_triggered does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\") === undefined || window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|K12|Edu_B2C_Formers/) === null ", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience(\"seg_ip\") !== \"edu\"", "type": "code", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]], ["not", ["or", {"value": "224163", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "8413422098", "name": "[Segment] EXCLUDE All EDU - WAT, BlueKai"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.getPageType().toLowerCase() !== \"homepage\"", "type": "code", "name": null, "match": null}]]], "id": "8456760649", "name": "[Page Targeting] Exclude the Homepage"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "fbpx", "match": "exists"}]]]], "id": "8471930223", "name": "[Cookie] fbpx does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "The Condor Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8472101818", "name": "[B2B] Condor Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Anatolia College/American College of Thessaloniki", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8480010926", "name": "[B2B] Anatolia College/American College of Thessaloniki"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/') > -1", "type": "code", "name": null, "match": null}]]], "id": "8485734812", "name": "[Page Targeting] nytimes.com domain only"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_testing_scaffold", "match": "exact"}]]], "id": "8544714400", "name": "[Cookie] exo_testing_scaffold=true"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('CW') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR_CK') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_RET') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('G') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8562601520", "name": "[Bundle] Crossword \u00a0- all bundles w/ a Crossword subscription"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8612260110", "name": "[Bundle] ADA_CR or MAX_ADA_CR"}, {"conditions": ["and", ["or", ["or", {"value": "DIIS Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8688780979", "name": "[B2B] DIIS Library"}, {"conditions": ["and", ["or", ["or", {"value": "document.cookie.indexOf('exo_') == -1", "type": "code", "name": null, "match": null}]]], "id": "9030630106", "name": "[Cookie] exo_* does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Elk City Carnegie Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "9265637312", "name": "[B2B] Elk City Carnegie Library"}, {"conditions": ["and", ["or", ["or", {"value": "Hotel Beacon", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "9401261308", "name": "[B2B] Hotel Beacon"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('E') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('H') !== -1", "type": "code", "name": null, "match": null}]]], "id": "9416124035", "name": "HD Subs (E and H)"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "bar1UserHubCheck", "match": "exact"}]]]], "id": "9725853419", "name": "[Cookie] bar1UserHubCheck DOES NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}], ["or", {"value": "ipad", "type": "device", "name": null, "match": null}], ["or", {"value": "tablet", "type": "device", "name": null, "match": null}]]], "id": "9731710762", "name": "[Device] Desktop/Laptop/iPad/Tablet only"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "aauHub", "match": "exact"}]]]], "id": "9838502184", "name": "[Cookie] aauHub DOES NOT exist"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "aaNLOptIn", "match": "exact"}]]]], "id": "9839421060", "name": "[cookie] aaNLOptIn DOES NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "Plaza Premium", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "9861004187", "name": "[B2B] Plaza Premium"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_test_optly", "match": "exact"}]]], "id": "9925984026", "name": "[Cookie] exo_test_optly"}, {"conditions": ["and", ["or", ["or", {"value": "document.location.protocol !== \"https:\";", "type": "code", "name": null, "match": null}]]], "id": "9971023501", "name": "[URL Protocol] Detect HTTP"}, {"conditions": ["and", ["or", ["or", {"value": "221227", "type": "vendor.bluekai", "name": "campaigns", "match": null}]], ["or", ["not", ["or", {"value": "221249", "type": "vendor.bluekai", "name": "campaigns", "match": null}, {"value": "221251", "type": "vendor.bluekai", "name": "campaigns", "match": null}, {"value": "221331", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "10189867646", "name": "[BlueKai] Behavior Targeting - Highly Engaged"}, {"conditions": ["and", ["or", ["or", {"value": "false", "type": "custom_attribute", "name": "10164770032", "match": null}]], ["or", ["or", {"value": "sub", "type": "custom_attribute", "name": "10167440018", "match": null}]]], "id": "10190723693", "name": "[Support] JKIDD Logged-out Sub"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "CA", "type": "location", "name": null, "match": null}, {"value": "AU", "type": "location", "name": null, "match": null}, {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "|||EU", "type": "location", "name": null, "match": null}, {"value": "IN", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "10193678447", "name": "[Geo] Rest of World (ex Canada, Australia, UK, Europe, India, US)"}, {"conditions": ["and", ["or", ["or", {"value": "GB", "type": "location", "name": null, "match": null}], ["or", {"value": "GB", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "10195315710", "name": "[Geo] UK only"}, {"conditions": ["and", ["or", ["or", {"value": "221331", "type": "vendor.bluekai", "name": "campaigns", "match": null}]], ["or", ["not", ["or", {"value": "221249", "type": "vendor.bluekai", "name": "campaigns", "match": null}, {"value": "221251", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]]], "id": "10222278707", "name": "[BlueKai] Behavior Targeting - Abandoners"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_inyt_saleTemplateBreakingNews_0518", "match": "exact"}]]], "id": "10243070104", "name": "[Cookie] exo_nons_inyt_saleTemplateBreakingNews_0518"}, {"conditions": ["and", ["or", ["or", {"value": "iphone", "type": "device", "name": null, "match": null}], ["or", {"value": "mobile", "type": "device", "name": null, "match": null}], ["or", {"value": "true", "type": "query", "name": "mobile", "match": "exact"}]]], "id": "10274710611", "name": "[Device] Mobile"}, {"conditions": ["and", ["or", ["or", {"value": "221249", "type": "vendor.bluekai", "name": "campaigns", "match": null}, {"value": "221251", "type": "vendor.bluekai", "name": "campaigns", "match": null}]]], "id": "10276280308", "name": "[BlueKai] Behavior Targeting - Formers"}, {"conditions": ["and", ["or", ["or", {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "|||EU", "type": "location", "name": null, "match": null}], ["or", {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "10304050060", "name": "[Geo] UK/Europe or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "CA", "type": "location", "name": null, "match": null}, {"value": "AU", "type": "location", "name": null, "match": null}], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "CA", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "AU", "type": "query", "name": "location", "match": "exact"}]]], "id": "10306790465", "name": "[Geo] Canada, Australia or dev mode"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}, {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "CA", "type": "location", "name": null, "match": null}, {"value": "AU", "type": "location", "name": null, "match": null}, {"value": "|||EU", "type": "location", "name": null, "match": null}]], ["or", {"value": "US", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "ROW", "type": "query", "name": "Location", "match": "exact"}]]], "id": "10310431082", "name": "[Geo] Rest of World (RoW) or dev mode"}, {"conditions": ["and", ["or", ["or", {"value": "NYLO HOTEL", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10315412716", "name": "[B2B] NYLO HOTEL"}, {"conditions": ["and", ["or", ["or", {"value": "Best Western Wesley Inn & Suites", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10315430941", "name": "[B2B] Best Western Wesley Inn & Suites"}, {"conditions": ["and", ["or", ["or", {"value": "|||EU", "type": "location", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "GB", "type": "location", "name": null, "match": null}]]]], "id": "10318320235", "name": "[geo] Europe excluding UK"}, {"conditions": ["and", ["or", ["or", {"value": "The Knickerbocker", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10322180988", "name": "[B2B] The Knickerbocker"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "aauHubDigi", "match": "exact"}]]]], "id": "10326117267", "name": "[Cookie] aauHubDigi DOES NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('E') === -1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('H') === -1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience('user') == \"sub\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10355580897", "name": "Digi Subs"}, {"conditions": ["and", ["or", ["or", {"value": "screen.width < 768", "type": "code", "name": null, "match": null}]]], "id": "10397259593", "name": "[Support] Mobile Viewport"}, {"conditions": ["and", ["or", ["or", {"value": "pay", "type": "query", "name": "gwt", "match": "exact"}]]], "id": "10424763006", "name": "[Support] NYT5 Meter Hit Gateway "}, {"conditions": ["and", ["or", ["or", {"value": "Kanazawa University", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10461140449", "name": "[B2B] Kanazawa University"}, {"conditions": ["and", ["or", ["or", {"value": "Wellington County Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10464214993", "name": "[B2B] Wellington County Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_canada_australia_upsell_0319", "match": "exact"}]]], "id": "10482055439", "name": "[Cookie] exo_canada_australia_upsell_0319"}, {"conditions": ["and", ["or", ["or", {"value": "West Bridgewater Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10554915423", "name": "[B2B] West Bridgewater Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Rolling Meadows Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10559603599", "name": "[B2B] Rolling Meadows Library"}, {"conditions": ["and", ["or", ["or", {"value": "Free Library of Philadelphia", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10560442294", "name": "[B2B] Free Library of Philadelphia"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('interactive/2018/podcasts') > -1", "type": "code", "name": null, "match": null}]]], "id": "10560444139", "name": "[Page Targeting] All Interactives for Podcasts"}, {"conditions": ["and", ["or", ["or", {"value": "Patten Free Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10573725553", "name": "[B2B] Patten Free Library"}, {"conditions": ["and", ["or", ["or", {"value": "1", "type": "cookies", "name": "nyt-gdpr", "match": "exact"}], ["or", {"value": "1", "type": "query", "name": "gdpr", "match": "exact"}]]], "id": "10646362745", "name": "[Cookie] nyt-gdpr=1"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "NYT-T", "match": "exists"}]]]], "id": "10649222910", "name": "[Cookie] NYT-T does not exist (GDPR)"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "pay", "type": "query", "name": "gwt", "match": "exact"}]]]], "id": "10679360623", "name": "[Support] NYT5: Gateway Is NOT Displayed"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "cookies", "name": "exo_maro403", "match": "exists"}]]], "id": "10705083725", "name": "exo_maro403"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_usgm_saleTemplateBreakingNews_0518", "match": "exact"}]]], "id": "10732474187", "name": "[cookie] exo_nons_usgm_saleTemplateBreakingNews_0518"}, {"conditions": ["and", ["or", ["or", {"value": "document.cookie.indexOf('%22nickName%22%3A%22ASU%22') > -1", "type": "code", "name": null, "match": null}]]], "id": "10752722800", "name": "[B2B] ASU - Arizona State University"}, {"conditions": ["and", ["or", ["or", {"value": "document.location.href.indexOf('https://www.nytimes.com/interactive/') !== 0", "type": "code", "name": null, "match": null}]]], "id": "10755622162", "name": "[Page targeting] ex Interactives"}, {"conditions": ["and", ["or", ["or", {"value": "CUNY", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "CCNY", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Kingsborough", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Hunter", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Lehman", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "NYC Tech", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Bklyn College", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "Baruch", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "York College", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]]], "id": "10756862010", "name": "[B2B] CUNY"}, {"conditions": ["and", ["or", ["or", {"value": "Berlin Peck Memorial Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10797826771", "name": "[B2B] Berlin Peck Memorial Library"}, {"conditions": ["and", ["or", ["or", {"value": "NYUAD Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10799135423", "name": "[B2B] NYUAD Library"}, {"conditions": ["and", ["or", ["or", {"value": "Richard Salter Storrs Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10803324596", "name": "[B2B] Richard Salter Storrs Library"}, {"conditions": ["and", ["or", ["or", {"value": "Minuteman Library Network", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10809075297", "name": "[B2B] Minuteman Library Network"}, {"conditions": ["and", ["or", ["or", {"value": "Eastham Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10822634304", "name": "[B2B] Eastham Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Ruhr University Bochum", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10823643148", "name": "[B2B] Ruhr University Bochum"}, {"conditions": ["and", ["or", ["or", {"value": "Hillsdale Free Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10823881723", "name": "[B2B] Hillsdale Free Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Toronto Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10824810313", "name": "[B2B] Toronto Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Stanton Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10828512794", "name": "[B2B] Stanton Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Lubbock Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10829253972", "name": "[B2B] Lubbock Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Palisades Park Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10829911735", "name": "[B2B] Palisades Park Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Leonia Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10833431134", "name": "[B2B] Leonia Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Dighton Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10833460916", "name": "[B2B] Dighton Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Glen Ridge Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "10836132916", "name": "[B2B] Glen Ridge Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_ab_mobile_lp_gw_subtitle", "match": "exact"}]]], "id": "10846660816", "name": "[cookie] exo_ab_mobile_lp_gw_subtitle"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_edu_b2b", "match": "exact"}]]], "id": "10847976319", "name": "[cookie] exo_edu_b2b"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_august_bau_test", "match": "exact"}]]], "id": "10878321711", "name": "[cookie] exo_august_bau_test"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('lp87JWF') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('lp8U87X') > -1", "type": "code", "name": null, "match": null}]]], "id": "10991651727", "name": "[LPs] lp87JWF & lp8U87X"}, {"conditions": ["and", ["or", ["or", {"value": "Fairview Free Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11059332181", "name": "[B2B] Fairview Free Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Herrick District Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11066872412", "name": "[B2B] Herrick District Library"}, {"conditions": ["and", ["or", ["or", {"value": "Franklin Township Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11077892277", "name": "[B2B] Franklin Township Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Livingston Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "11079662108", "name": "[B2B] Livingston Public Library (BCCLS)"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_august_guides_bar1_0818", "match": "exact"}]]], "id": "11087706175", "name": "[cookie] exo_august_guides_bar1_0818"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_subs_cx_ask_bar1_welcome", "match": "exact"}]]], "id": "11175271136", "name": "[cookie] exo_subs_cx_ask_bar1_welcome"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_Gift_LP_Test", "match": "exact"}]]], "id": "11192532397", "name": "[Cookie] exo_Gift_LP_Test"}], "integrationSettings": [{"functions": {fetchData: function() {
    var data = {"campaigns": []};
    if (window["bk_results"] && window["bk_results"].hasOwnProperty("campaigns")) {
      var campaigns = window["bk_results"]["campaigns"];
      for (var i= 0, numCampaigns=campaigns.length; i<numCampaigns; i++) {
        if (campaigns[i]["campaign"]) {
          data["campaigns"].push(campaigns[i]["campaign"]);
        }
      }
      window["optimizely"].push(["storeThirdPartyData", "bluekai", data]);
    }
  }
}
, "dataFetchMethod": "custom_javascript", "id": "bluekai"}], "anonymizeIP": false, "projectId": "3795841958", "visitorAttributes": [], "accountId": "3013110282", "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: 'anchorad_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner) {
    document.querySelector("#Anchor").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
}
else {

    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: AnchorAd, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: "AnchorAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js,
                campaign_id = widget.campaignId;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
                console.log("[OptimizelyNYT] AnchorAd Impression ID:" + widget.nytID);
            window.optimizely.push({
                type: "event",
                eventName: "anchorad_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            var anchorList = document.querySelectorAll("#Anchor a");
            //var anchorArray = Array.from(anchorList);
            anchorList.forEach(function(a) {
                if(a.href.indexOf('/subscription') > -1){
                    a.onclick = function() {
                        console.log("[OptimizelyNYT] AnchorAd Click ID:" + id);
						            window.optimizely.push({
                            type: "event",
                            eventName: "anchorad_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            if(js !== ""){ 
              eval(js);
            }
        },
        selector: "#Anchor"
    };
    var behavior = optimizely.get('behavior');
    var anchor_query = function(hours){
        var impressions = behavior.query({
            "version": "0.2",
            "filter":[
                {
                    "field":["name"],
                    "value":"anchorad_impression"
                },
                {
                    "field":["age"],
                    "comparator": "lt",
                    "value": hours*60*60*1000
                },
                {
                    "field":["tags","codename"],
                    "value":widget.nytID
                }
            ],
            "reduce":{
                "aggregator":"count"
            }
        });
        return impressions;
    };
    if(widget.anchor_meter.indexOf('Sub') > -1){
        console.log('Anchor Detects Sub Experience');
        var anchor_ad_session_impressions = anchor_query(widget.anchor_ad_session_hours);
        var anchor_ad_lifetime_impressions = anchor_query(widget.anchor_ad_cap_days*24);
        if(anchor_ad_session_impressions < widget.anchor_ad_session_cap && anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
            console.log("Session Impressions:" + anchor_ad_session_impressions + " was less than " + widget.anchor_ad_session_cap);
            console.log("Lifetime Impressions:" + anchor_ad_lifetime_impressions + " was less than " + widget.anchor_ad_impression_cap);
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
        else{
            if(anchor_ad_session_impressions < widget.anchor_ad_session_cap){
            console.log("Session Impressions: " + anchor_ad_session_impressions + " was greater than or equal to session cap of " + widget.anchor_ad_session_cap);
            }
            if(anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
                console.log("Lifetime Impressions: " + anchor_ad_lifetime_impressions + " was greater than or equal to lifetime cap of " + widget.anchor_ad_impression_cap);
            }
        }
    }
    else if(window.NYToptly.audience('counted') && widget.anchor_meter.indexOf(window.NYToptly.audience("meter_views").toString())>-1){
        console.log('Pass Meter');
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
    else{
        console.log('Anchor already viewed in past, ', widget.anchor_days,' Days');
        console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Failed Anchor Meter');
        console.log('Anchor set to appear at Meter ' + widget.anchor_meter);
        console.log('Current Meter at ' + window.NYToptly.audience("meter_views"));
    }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'bar1poc2_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    document.querySelector("#Bar1").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Bar1, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: "Bar1",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js,
                utils = optimizely.get('utils');
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            "" !== js && eval(js), console.log("[OptimizelyNYT] Bar1 Impression ID:" + id), window.optimizely.push({
                type: "event",
                eventName: "bar1_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            }), document.querySelectorAll("#Bar1 a").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Bar1 Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "bar1_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                            agentId: agent_id
                        }
                    })
                }.bind(void 0, id)
            });
            var bar1_hover_triggered = false;
            document.querySelector('#Bar1').onmouseover = function() {
                if (!bar1_hover_triggered) {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "bar1_hover",
                        tags: {
                            agentId: agent_id
                        }
                    });
                    bar1_hover_triggered = true
                }
            };
            utils.waitUntil(function() {
                return 'TAGX' in window && 'EventProxy' in window.TAGX;
            }).then(function() {
                var event = {
                    name: 'impression',
                    data: {
                        module: 'Bar1',
                        region: 'FixedTop',
                        contentId: id,
                        mediaId: 'Bar1',
                        priority: true
                    },
                    type: 'impression'
                };
                TAGX.EventProxy.trigger(event.name, event.data, event.type);
                console.log("[OptimizelyNYT] ET: Bar1 Impression ID:" + id);
            });
        },
        selector: "#Bar1"
    };
    if (document.querySelector('#Bar1') && !window.NYToptly.getQueryParameter('gwt')) {
        (function() {
            if (typeof window.CustomEvent === "function") return false;

            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var bar1event = new CustomEvent('bar1rendered', {
            detail: undefined
        });
        document.dispatchEvent(bar1event);
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    } else {
        console.log('Bar 1 container not present')
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'killset_pocII',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Welcome Ad"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var optly_killset = true;
console.log('Killset applied to ' + widget.placement_name);
var killed_selector;
switch(widget.placement_name){
	case "Growl":
		killed_selector = "#Growl_optly";
		break;
	case "Interstitial":
		killed_selector = "#Interstitial_optly";
		break;
  case "Anchor Ad":
    killed_selector = "#Anchor_optly";
    break;
}
if(killed_selector){
var newDiv = document.createElement("div");
newDiv.setAttribute('class',"optly_killset " + widget.placement_name);
var killed_element = document.querySelector(killed_selector);
killed_element.insertBefore(newDiv,killed_element.firstChild);}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Welcome Ad"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: 'abchannelpass_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-widget-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"abchannelpass\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("widget.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-abchannelpass_staging';
widget._styleTag.innerHTML = '.abchannelpass { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        window.NYToptly.viewAction('LOAD_WIDGET_PASS_PLACEMENT', widget.no_placement);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-abchannelpass_staging');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'lp',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (optimizely.state && optimizely.state.directives && optimizely.state.directives.isEditor) {
    document.querySelector("#LP_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    var widgetObj = {
        name: "LP",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        script: widget.extra_js,
        codename: widget.nytID,
        selector: "#LP_optly",
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            console.log("[OptimizelyNYT - Landing Page Ext.] LP Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "lp_impression",
                tags: {
                    id: id
                }
            }), document.querySelectorAll("body [data-cta]").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT - Landing Page Ext.] LP Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "lp_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                        }
                    })
                }
            }), "" !== widget.custom_js && eval(js)
        }
    };
    window.location.href.indexOf("subscription") > -1 && window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj)
}
if (widget.framework_restore !== 'true') {
    var utils = optimizely.get('utils');
    utils.waitForElement('.exo_loading').then(function() {
        console.log("[OptimizelyNYT - Landing Page Ext.] Remove Spinner");
        document.querySelector('.exo_loading').classList.remove('exo_loading');
    });
    utils.waitForElement('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').then(function() {
        console.log("[OptimizelyNYT - Landing Page Ext.] Show Page");
        document.querySelector('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').style.visibility = 'visible';
    });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'Growlpoc_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"full_html","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner) {
    var appendDiv = function(id) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] " + id + " div inserted");
    };
    appendDiv('Gateway_optly');
    document.querySelector('#Gateway_optly').innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    if (typeof(window.NYToptly) !== "undefined") {
        window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
    }
    if (widget.custom_js !== "") {
        eval(widget.custom_js);
    }
} else {

    widget.full_html = window.NYToptly.getCountryText(widget.full_html);

    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Gateway, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: 'Gateway',
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID;
            var js = widget.custom_js;
            var name = this.name;
            var container = document.getElementById('gatewayUnit');
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            if (js !== "") {
                eval(js);
            }
            console.log("[OptimizelyNYT] gateway Impression ID:" + id);
            window['optimizely'].push({
                type: "event",
                eventName: "gateway_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            window.NYToptly.sendImpressionToEtTracker(name);
            window.NYToptly.setAnchorTrackingParams(name, container);

            document.querySelectorAll('#gw-bg .gw-clickable,#cta-extended,#Gateway_optly .buttonsContainer a').forEach(function(node) {
                node.onclick = function() {
                    console.log("[OptimizelyNYT] gateway Click ID:" + id);
                    window['optimizely'].push({
                        type: "event",
                        eventName: "gateway_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                            agentId: agent_id
                        }
                    });
                };
            });
        },
        selector: "#gatewayUnit"
    };
    if (window.location.search.indexOf('gwt=pay') > -1) {
        window.NYToptly.viewAction('LOAD_WIDGET_PLACEMENT', widgetObj);
        window.optly_events.gateway = true;
        var element = document.getElementById("gateway_hider");
        element.parentNode.removeChild(element);
        if (window.nytAnalytics) {
            window.nytAnalytics.MeterTrigger({
                "name": "gateway"
            });
        }
    } else {
        window.optly_events.gateway = false;
        console.log('No Gateway Parameter');
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"full_html","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'growl_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
  appendDiv('Growl_optly');
 document.querySelector('#Growl_optly').innerHTML = widget.full_html;
 var style = document.createElement("style");
 style.type = "text/css";
 style.innerHTML = widget.css;
 document.getElementsByTagName("head")[0].appendChild(style);
 window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
  if(widget.custom_js !== "") {
    eval(widget.custom_js);
  }
} else {
  
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
  
  if (widget.full_html.indexOf('adxInfo mktInfo')) {
 		widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
	}

	var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Growl, source: optimizely, creator: " + widget.creator + "</span>";

	widget.full_html = mktInfo + widget.full_html;

  var widgetObj = {
    name: 'Growl',
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.extra_js,
    script_2: widget.extra_js_2,
    script_3: widget.extra_js_3,
    script_4: widget.extra_js_4,
    callback: function() {
      var id = widget.nytID;
      var js = widget.custom_js;
      var name = this.name;
      var container = document.getElementById('Growl_optly');
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      if(js !== "") {
      	eval(js);
      }
      console.log("[OptimizelyNYT] growl Impression ID:" + id);
      window['optimizely'].push({
        type: "event",
        eventName: "growl_impression",
        tags: {
         codename: id,
         agentId: agent_id
        }
			});
      
      window.NYToptly.sendImpressionToEtTracker(name);
      
      document.querySelectorAll('#Growl_optly a').forEach(function(node) {
        if(node.href.indexOf('/subscription') > -1){
        node.onclick = function() { 
          console.log("[OptimizelyNYT] growl Click ID:" + id);
          window['optimizely'].push({
            type: "event",
            eventName: "growl_clicked",
            tags: {
             codename: id,
             campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
        		 agentId: agent_id
            }
          });
        };
      }
      });
      var opt_close = document.querySelector('#growl-close');
      opt_close.onclick = function(){
					var opt_growl = document.getElementById('Growl_optly');
					opt_growl.parentNode.removeChild(opt_growl);
			};
      
    },
    selector: "#Growl_optly"
  };
 var meter_count_string = window.NYToptly.audience("meter_views").toString();
 var debugFlag = (window.location.search.indexOf("debug=1") > -1);
  if((window.NYToptly.audience('counted') || debugFlag) && 
     ( meter_count_string === widget.growl_meter || 
	   meter_count_string === widget.growl_meter_2 || 
	   meter_count_string === widget.growl_meter_3
	 )
  ){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
  }
  else{
  var child_div = document.createElement("div");
  document.querySelector('#Growl_optly').appendChild(child_div);
  console.log('Meter Counted is ',window.NYToptly.audience('counted'));
  console.log('Growl Fail Meters');
  console.log('Current Growl Meters at ');
  }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'WelcomeAd',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"closeSelector","default_value":".nytdGrowlNotifyCross"},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] " + id + " div inserted");
    };
    appendDiv('WelcomeAd_optly');
    document.querySelector("#WelcomeAd_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: WelcomeAd, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: "WelcomeAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            console.log("[OptimizelyNYT] Welcome Ad Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "welcomead_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            }), "" !== js && eval(js), document.querySelectorAll("#WelcomeAd_optly a#cta-extended").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Interstitial Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "welcomead_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                            agentID: agent_id
                        }
                    });
                }
            });
            var opt_close = document.querySelector(widget.closeSelector);
            opt_close.onclick = function() {
                var opt_welcome_ad = document.getElementById('WelcomeAd_optly');
                opt_welcome_ad.parentNode.removeChild(opt_welcome_ad)
            };
        },
        selector: "#WelcomeAd_optly"
    };
    var behavior = optimizely.get('behavior');
    var welcome_query = function(hours) {
        var impressions = behavior.query({
            "version": "0.2",
            "filter": [{
                "field": ["name"],
                "value": "welcomead_impression"
            }, {
                "field": ["age"],
                "comparator": "lt",
                "value": hours * 60 * 60 * 1000
            }, {
                "field": ["tags", "codename"],
                "value": widget.nytID
            }],
            "reduce": {
                "aggregator": "count"
            }
        });
        return impressions;
    }
    var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
    var welcome_ads_long_cap = welcome_query(24 * widget.freq_cap_days);
    var welcome_ads_shown = false;
    if (welcome_ads_small_cap < widget.session_cap) {
        console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
    }
    if (widget.freq_cap_number != "" && widget.freq_cap_days != "") {
        if (welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number) {
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
            welcome_ads_shown = true;
        } else {
            console.log("Failed Frequency Cap ", welcome_ads_long_cap, widget.freq_cap_number);
        }
    } else if (welcome_ads_small_cap < widget.session_cap) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        welcome_ads_shown = true;
    } else {
        console.log('Welcome Ad already shown');
    }

    if (!welcome_ads_shown) {
        var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('mtr-debug') > -1);
        if (debugFlag) {
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"closeSelector","default_value":".nytdGrowlNotifyCross"},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'cancel_subscription',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"cancel_subscription\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-cancel_subscription';
widget._styleTag.innerHTML = '.cancel_subscription { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
  $( '<div id="black_ribbon"></div>' ).insertBefore( $("body"));
document.querySelector("#black_ribbon").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
  $("#closeButtonImg").click(function(){
$(".innerPopup").css("display","none");
});
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-cancel_subscription');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'black_header',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"black_header\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-black_header';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);#extension-css,#masthead,#navigation,.has-ribbon #ribbon{margin-top:38px!important}.font-smoothing{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#b2bpers-container{position:fixed;width:100%;top:0;left:0;z-index:1000000140}#b2bpers-ad{position:absolute;background-color:#000;text-align:center;font-size:14px;color:#fff;font-family:franklin-normal-700,sans-serif;font-weight:700;right:6px;top:-1px;width:100%;padding:10px 0}#b2bpers-ad a{color:#fff;text-decoration:underline}.app-collection .shell{padding-top:90px}.NYT5Style #shell{padding-top:30px}@media screen and (max-width:768px){#b2bpers-container{display:none!important}}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
//  $( '<div id="b2bpers-container" class="font-smoothing"><div id="b2bpers-ad"></div></div>' ).insertBefore( "#masthead-cap " );
  $( ".black_header" ).append( "<div id=\"b2bpers-container\" class=\"font-smoothing\"><div id=\"b2bpers-ad\"></div></div>");
  document.querySelector("#b2bpers-ad").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
	window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_impression"
}); 
  document.querySelector("#b2bpers-ad").onclick = function(){
		window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_click"
});}
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-black_header');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner ||
    window.location != window.parent.location &&
    window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] " + id + " div inserted");
    };
    appendDiv('Growl_optly');

    document.querySelector('#Growl_optly').innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    window.NYToptly.loadScript(widget.extra_js),
        window.NYToptly.loadScript(widget.extra_js_2),
        window.NYToptly.loadScript(widget.extra_js_3),
        window.NYToptly.loadScript(widget.extra_js_4),
        eval(widget.custom_js);

    if (widget.custom_js !== "") {
        eval(widget.custom_js);
    }
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);

    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Growl, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: 'Growl',
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID;
            var js = widget.custom_js;
            var name = this.name;
            var container = document.getElementById('Growl_optly');
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            if (js !== "") {
                eval(js);
            }
            console.log("[OptimizelyNYT] growl Impression ID:" + id);
            window['optimizely'].push({
                type: "event",
                eventName: "growl_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            window.NYToptly.sendImpressionToEtTracker(name);
            window.NYToptly.setAnchorTrackingParams(name, container);

            document.querySelectorAll('#Growl_optly a').forEach(function(node) {
                if (node.href.indexOf('subscription') > -1) {
                    node.onclick = function() {
                        console.log("[OptimizelyNYT] growl Click ID:" + id);
                        window['optimizely'].push({
                            type: "event",
                            eventName: "growl_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            var opt_close = document.querySelector('#growl-close');
            opt_close.onclick = function() {
                var opt_growl = document.getElementById('Growl_optly');
                opt_growl.parentNode.removeChild(opt_growl);
            };

        },
        selector: "#Growl_optly"
    };
    var meter_count = window.NYToptly.audience("meter_views");
    var meter_count_string = meter_count.toString();
    var threshold = NYToptly.audience('meter_threshold');
    if ((window.location.search.indexOf('gwt=pay') === -1) && 
        meter_count <= threshold && (widget.growl_meter.indexOf(meter_count_string) !== -1)
    ) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    } else if (meter_count > threshold) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', "optly_killset growl");
        var growl_element = document.querySelector('#Growl_optly');
        growl_element.insertBefore(newDiv, growl_element.firstChild);
        console.log('Meter Count over Threshold');
    } else {
        console.log('Meter Counted is ', window.NYToptly.audience('counted'));
        console.log('Growl Fail Meters');
        console.log('Current Growl Meters at ');
    }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'survey',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"survey_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-survey';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);/* EXTENSION CSS*/.font-smoothing {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        require(['foundation/main'], function () {
  require(['foundation/models/user-data'], function (userData) {

        var rmid = /RMID=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var agentId = /nyt-a=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var w = 1366;
        var h = 768;
        if (document.all || document.layers) {
            w = screen.availWidth;
            h = screen.availHeight;
        }
        var popW = 650;
        var popH = 350;
        var topPos = (h - popH) / 2;
        var leftPos = (w - popW) / 2;

        window.open('https://www.nytimes.com/marketing/surveys/' + widget.htmlFileName + '.html?rgi=' + userData.id + '&RMID=' + rmid + '&AgentID=' + agentId,'survey','scrollbars=no,width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  });
});
NYToptly.setCookie('survey_triggered',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "survey_triggered"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-survey');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":"5"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner ||
    window.location != window.parent.location &&
    window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] " + id + " div inserted");
    };
    appendDiv('Growl_optly');

    document.querySelector('#Growl_optly').innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    window.NYToptly.loadScript(widget.extra_js),
        window.NYToptly.loadScript(widget.extra_js_2),
        window.NYToptly.loadScript(widget.extra_js_3),
        window.NYToptly.loadScript(widget.extra_js_4),
        eval(widget.custom_js);

    if (widget.custom_js !== "") {
        eval(widget.custom_js);
    }
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);

    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Growl, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: 'Growl',
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID;
            var js = widget.custom_js;
            var name = this.name;
            var container = document.getElementById('Growl_optly');
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            if (js !== "") {
                eval(js);
            }
            console.log("[OptimizelyNYT] growl Impression ID:" + id);
            window['optimizely'].push({
                type: "event",
                eventName: "growl_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            window.NYToptly.sendImpressionToEtTracker(name);
            window.NYToptly.setAnchorTrackingParams(name, container);

            document.querySelectorAll('#Growl_optly a').forEach(function(node) {
                if (node.href.indexOf('subscription') > -1) {
                    node.onclick = function() {
                        console.log("[OptimizelyNYT] growl Click ID:" + id);
                        window['optimizely'].push({
                            type: "event",
                            eventName: "growl_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            var opt_close = document.querySelector('#growl-close');
            opt_close.onclick = function() {
                var opt_growl = document.getElementById('Growl_optly');
                opt_growl.parentNode.removeChild(opt_growl);
            };

        },
        selector: "#Growl_optly"
    };
    var meter_count = window.NYToptly.audience("meter_views");
    var meter_count_string = meter_count.toString();
    var threshold = NYToptly.audience('meter_threshold');
    var debugFlag = (window.location.search.indexOf("debug=1") > -1);

    if ((window.NYToptly.audience('counted') || debugFlag || widget.persistent === 'true') && meter_count <= threshold && (widget.growl_meter.indexOf(meter_count_string) !== -1)) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    } else if (meter_count > threshold) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('class', "optly_killset growl");
        var growl_element = document.querySelector('#Growl_optly');
        growl_element.insertBefore(newDiv, growl_element.firstChild);
        console.log('Meter Count over Threshold');
    } else {
        console.log('Meter Counted is ', window.NYToptly.audience('counted'));
        console.log('Growl Fail Meters');
        console.log('Current Growl Meters at ');
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"growl_meter","default_value":"5"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8473813042',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"fbpx_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1594297750840102');
fbq('track', 'PageView');
// Sample call to track custom event
fbq('trackCustom', 'IPMatch', {
    sub_bundle: widget.subBundle
});

NYToptly.setCookie('fbpx',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "fbpx"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8495224061',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8495224061";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":".page a"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"itemsForRemove","default_value":".pageHeaderWithMenu, .header__description, #more_subscriptions, #faq_section, .pageFooter"},{"name":"addAfterItem","default_value":".product__container"},{"name":"testElement","default_value":".pageFooter"},{"name":"optly_disable","default_value":"0"},{"name":"iframeJS","default_value":""},{"name":"custom_js","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8495224061';
widget._styleTag.innerHTML = '. {    background-color: #fff575;    border-bottom: 1px solid #e0d769;    color: #555;    padding: 10px;    font-weight: bold;    text-align: center;    font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var runWhenReady = function runWhenReady(testFunction, inFunction, defaultFunction, mlsecs, reps) {
    var repetition = reps || 5;

    setTimeout(function z() {
        if (testFunction()) {
            inFunction();
        } else if (--repetition) {
            setTimeout(z, mlsecs);
        } else if (defaultFunction) {
            defaultFunction();
        }
    }, mlsecs);
};

widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU1%%/g, widget.click1);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU2%%/g, widget.click2);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU3%%/g, widget.click3);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU4%%/g, widget.click4);

if (widget.parentHTML.indexOf('adxInfo mktInfo')) {
    widget.parentHTML = widget.parentHTML.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
}

var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: Gateway, source: optimizely, creator: " + widget.creator + "</span>";

widget.parentHTML = mktInfo + widget.parentHTML;

var widgetObj = {
    name: 'Gateway',
    html: widget.parentHTML,
    callback: function() {

        var id = widget.nytID;
        var js = widget.custom_js;
        var name = this.name;
        var gatewayContainer = document.getElementById("gatewayUnit");
        var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;

        if (+widget.optly_disable) {
            var str = '';
            if (widget.iframeSrc.indexOf("?") >= 0) {
                str = "&optimizely_disable=true";
            } else {
                str = "?optimizely_disable=true";
            }
            widget.iframeSrc += str;
        }

        if (!widget.parentHTML) {
            var wrapper = document.createElement("div");
            wrapper.id = "optimizelyIframeContainer";
            gatewayContainer.appendChild(wrapper);
        }

        // apply inline javascript for parent container
        script = document.createElement('script');
        script.text = widget.custom_js;
        document.getElementsByTagName('head')[0].appendChild(script);

        var container = document.getElementById("optimizelyIframeContainer");
        container.className = "hidden";

        var iframe = document.createElement("iframe");
        iframe.setAttribute('id', "optimizelyIframe");
        iframe.setAttribute('src', widget.iframeSrc);

        container.appendChild(iframe);

        // set iframe style in parent window
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = widget.parentCSS;
        document.getElementsByTagName('head')[0].appendChild(style);

        var buildTagxQueryString = function(params) {
            var i;
            var paramNames = Object.keys(params);
            var qs = [];
            for (i = 0; i < paramNames.length; ++i) {
                qs.push(paramNames[i] + '=' + params[paramNames[i]]);
            }
            qs = qs.join('&');
            qs = qs.replace(/ /g, '+');
            qs = qs.replace(/\//g, '%2F');
            return qs;
        };

        var processElement = function() {

            console.log('[INFO] Process iframe');

            var doc = iframe.contentDocument;
            container.removeAttribute('class');

            // add QS params to  links in iframe
            /*require(['auth/mtr'], function(Mtr) {
                var tp = Mtr.trackingParams.Gateway;
                var tagxArgs = $.extend({}, tp.common, tp.links);
                var qs = buildTagxQueryString(tagxArgs);
                var i, links = doc.querySelectorAll('.product__container__wrap a');
                for (i = 0; i < links.length; ++i) {
                    var url = links[i].href;
                    if (!url || (!url.match(/myaccount/) &&
                            !url.match(/subscription/))) {
                        continue;
                    }

                    var separator = "?";
                    if (url.indexOf(separator) > -1) {
                        separator = "&";
                    }
                    links[i].setAttribute('href', url + separator + qs);
                    links[i].setAttribute('target', '_blank');
                }
            });*/

            // set style in iframe
            style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = widget.iframeCSS;

            doc.getElementsByTagName('head')[0].appendChild(style);

            // apply javascript for iframe
            script = document.createElement('script');
            script.text = widget.iframeJS;
            doc.getElementsByTagName('head')[0].appendChild(script);

            // so that iframe links will open in parent page:
            base = document.createElement('base');
            base.target = "_parent";
            doc.getElementsByTagName('head')[0].appendChild(base);

            if (js !== "") {
                eval(js);
            }

            window['optimizely'].push({
                type: "event",
                eventName: "gateway_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            window.NYToptly.sendImpressionToEtTracker(name);
            window.NYToptly.setAnchorTrackingParams(name, doc);

            doc.querySelectorAll(widget.selectorsForClickEvent).forEach(function(node) {
                node.onclick = function() {
                    console.log("[OptimizelyNYT] gateway Click ID:" + id);
                    window['optimizely'].push({
                        type: "event",
                        eventName: "gateway_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                            agentId: agent_id
                        }
                    });
                };
            });

            console.log("[OptimizelyNYT] Gateway Impression ID:" + id);

            // Removing elements from Iframe
            if (widget.itemsForRemove) {
                var itemsForRemove = doc.querySelectorAll(widget.itemsForRemove);
                for (i = 0; i < itemsForRemove.length; ++i) {
                    itemsForRemove[i].parentNode.removeChild(itemsForRemove[i]);
                }
            }

            //Add custom iFrame elements
            if (widget.addAfterItem) {
                var insertAfter = function(el, referenceNode) {
                    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
                };
                var bundle_section = doc.querySelector(widget.addAfterItem);
                var newEl = document.getElementById('iframe__addon');
                if (newEl) {
                    insertAfter(newEl, bundle_section);
                }
            }

        };

        var processDefault = function() {

            console.log('[INFO] Process default');

            var gatewayContainer = document.getElementById('gatewayUnit');

            require(['auth/mtr', 'ecomm/etTracker', 'auth/gateway/creatives'], function(Mtr, EtTracker, Creatives) {

                gatewayContainer.innerHTML = Creatives.defaultGateway;

                var links = gatewayContainer.getElementsByTagName('a');

                var tp = Mtr.trackingParams.Gateway;
                var tagxArgs = $.extend({}, tp.common, tp.links);
                var qs = buildTagxQueryString(tagxArgs);

                for (var i = 0; i < links.length; ++i) {
                    var url = links[i].href;
                    if (!url || (!url.match(/myaccount/) &&
                            !url.match(/subscription/))) {
                        continue;
                    }

                    var separator = "?";
                    if (url.indexOf(separator) > -1) {
                        separator = "&";
                    }
                    links[i].setAttribute('href', url + separator + qs);
                }

            });

        };

        var isElementExists = function() {
            //console.log('[INFO] Evaluate isElementExists()');

            var state = false;

            try {
                if (iframe.contentDocument && iframe.contentDocument.querySelectorAll(widget.testElement).length) {
                    //console.log('[INFO] Evaluate isElementExists(): return true');
                    state = true;
                } else {
                    //console.log('[INFO] Evaluate isElementExists(): return false');
                    state = false;
                }
            } catch (e) {
                //console.log( "[ERROR] " + e.message );
                state = false;
            } finally {
                return state;
            }

        };

        runWhenReady(
            isElementExists,
            processElement,
            processDefault,
            100, 100
        );

    },
    selector: "#gatewayUnit"
};

if (window.location.search.indexOf('gwt=pay') > -1) {
    window.NYToptly.viewAction('LOAD_WIDGET_PLACEMENT', widgetObj);
    window.optly_events.gateway = true;
    var element = document.getElementById("gateway_hider");
    element.parentNode.removeChild(element);
} else {
    window.optly_events.gateway = false;
    console.log('No Gateway Parameter');
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8495224061";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":".page a"},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"itemsForRemove","default_value":".pageHeaderWithMenu, .header__description, #more_subscriptions, #faq_section, .pageFooter"},{"name":"addAfterItem","default_value":".product__container"},{"name":"testElement","default_value":".pageFooter"},{"name":"optly_disable","default_value":"0"},{"name":"iframeJS","default_value":""},{"name":"custom_js","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8495224061');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8644680304',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "8644680304";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"selector","default_value":"#g-graphic.sub-promo-click"},{"name":"css","default_value":""},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        /************************************************* 
 *  Inserts html & css into the specified selector.
 **************************************************/



if (widget.full_html) {
    widget.full_html = widget.full_html.replace(/%%CTA_1%%/g, widget.cta_1);
    widget.full_html = widget.full_html.replace(/%%CTA_2%%/g, widget.cta_2);
    widget.full_html = widget.full_html.replace(/%%CTA_3%%/g, widget.cta_3);
}

var widgetObj = {
    name: "HpSubscriptionAd",
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.external_js,
    selector: widget.selector,
    callback: function() {
        var id = widget.nytID,
            js = widget.inline_js;
        console.log("[OptimizelyNYT] HpSubscriptionAd ID:" + id);

        if (js) {
            script = document.createElement('script');
            script.text = js;
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        window.optimizely.push({
            type: "event",
            eventName: "HP_Subs_Promo_impression",
            tags: {
                codename: id
            }
        });
        document.querySelectorAll(widget.selector + " a").forEach(function(a) {
            a.onclick = function() {
                console.log("[OptimizelyNYT] HpSubscriptionAd Click ID:" + id);
                window.optimizely.push({
                    type: "event",
                    eventName: "HP_Subs_Promo_clicked",
                    tags: {
                        codename: id,
                        campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                    }
                });
            }.bind(void 0, id);
        });
    }
};


window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8644680304";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"selector","default_value":"#g-graphic.sub-promo-click"},{"name":"css","default_value":""},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8665654182',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8665654182";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"text","default_value":"My Butterbar"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8665654182';
widget._styleTag.innerHTML = '. {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;	font-weight: bold;  text-align: center;  font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = optimizely.get('utils');

utils.waitForElement('body')
  .then(function(elem) {
    // Prepend the extension html to the body
    elem.insertAdjacentHTML('afterbegin', extension.$html);
  });

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8665654182";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"text","default_value":"My Butterbar"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8665654182');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8734521774',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "8734521774";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"selector","default_value":"#SubsPromo_optly"},{"name":"insert","default_value":"after"},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        /************************************************* 
 *  Inserts html & css into the specified selector.
 **************************************************/



if (widget.full_html) {
    widget.full_html = widget.full_html.replace(/%%CTA_1%%/g, widget.cta_1);
    widget.full_html = widget.full_html.replace(/%%CTA_2%%/g, widget.cta_2);
    widget.full_html = widget.full_html.replace(/%%CTA_3%%/g, widget.cta_3);
}

var widgetObj = {
    name: "ArticleSubscriptionAd",
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.external_js,
    selector: widget.selector,
    callback: function() {
        var id = widget.nytID,
            js = widget.inline_js;
        console.log("[OptimizelyNYT] ArticleSubscriptionAd ID:" + id);

        if (js) {
            script = document.createElement('script');
            script.text = js;
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        window.optimizely.push({
            type: "event",
            eventName: "Article_Subs_Promo_impression",
            tags: {
                codename: id
            }
        });
        document.querySelectorAll("#Bar1 a").forEach(function(a) {
            a.onclick = function() {
                console.log("[OptimizelyNYT] ArticleSubscriptionAd Click ID:" + id);
                window.optimizely.push({
                    type: "event",
                    eventName: "Article_Subs_Promo_clicked",
                    tags: {
                        codename: id,
                        campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                    }
                });
            }.bind(void 0, id);
        });
    }
};


window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8734521774";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"selector","default_value":"#SubsPromo_optly"},{"name":"insert","default_value":"after"},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });
PluginManager.registerAnalyticsTracker('9497090382', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['9497090382'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            if(decisionData.experimentId && decisionData.variationId && (decisionData.pageId === '8391210423'||decisionData.pageId === '4129021553')){
var utils = optimizely.get('utils');
var locationUrl = window.location.href;
var pageId = decisionData.pageId;
var layerExp = {};
if(decisionData.experimentName.indexOf('ab_') > -1){
	layerExp.type = 'abtest';
}
else{
	layerExp.type = 'p13n';
}
  layerExp = {
    experience: decisionData.experimentName,
    variant: decisionData.variationName,
    placement: pageId,
    type: layerExp.type
};
window.bk_optly = window.bk_optly || [];
	window.bk_optly.push(layerExp);
}
          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['9497090382'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        if(decisionData.experimentId && decisionData.variationId && (decisionData.pageId === '8391210423'||decisionData.pageId === '4129021553')){
var utils = optimizely.get('utils');
var locationUrl = window.location.href;
var pageId = decisionData.pageId;
var layerExp = {};
if(decisionData.experimentName.indexOf('ab_') > -1){
	layerExp.type = 'abtest';
}
else{
	layerExp.type = 'p13n';
}
  layerExp = {
    experience: decisionData.experimentName,
    variant: decisionData.variationName,
    placement: pageId,
    type: layerExp.type
};
window.bk_optly = window.bk_optly || [];
	window.bk_optly.push(layerExp);
}
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '9660362170',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div class=\"lp_abandoner_lightbox\">");t.b("\n" + i);t.b("    ");t.b(t.t(t.d("widget.full_html",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "9660362170";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"custom_js","default_value":""},{"name":"close_selector","default_value":""},{"name":"nytID","default_value":""},{"name":"timeout","default_value":0},{"name":"full_html","default_value":""},{"name":"css","default_value":".lp_abandoner_lightbox {}"},{"name":"selector","default_value":"#LP_lightbox_optly"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-9660362170';
widget._styleTag.innerHTML = '.lp_abandoner_lightbox {    display: none;    margin: 0 auto;    position: fixed;    top: 20%;    z-index: 100;}body.noScroll {    overflow: hidden;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = optimizely.get('utils');
utils.waitForElement(widget.selector).then(function() {
    var style, script, links, timeout,
        placement = document.querySelector(widget.selector);
    var $ = optimizely.get('jquery');

    var showPopup = function() {
        var element = $('.lp_abandoner_lightbox');
        if (element.length === 0 || element.is(':visible')) {
            return;
        }
        element.fadeIn(300);
        $('body').addClass('noScroll');
        $(document).trigger('lp_abandoner_lightbox_impression');
        window.optimizely.push({
            type: "event",
            eventName: "lp_abandoner_lightbox_impression",
            tags: {
                codename: widget.nytID
            }
        });
        console.log("[OptimizelyNYT] LP Abandoner Lightbox Impression ID:" + widget.nytID);
        element.find(widget.close_selector).click(function() {
            $('body').removeClass('noScroll');
            element.fadeOut(300, function() {
                $(this).remove();
            });
        });
    };

    if (widget.$html) {
        placement.innerHTML = widget.$html;
    }
    if (widget.css) {
        style = document.createElement("style");
        style.setAttribute('type', "text/css");
        style.innerHTML = widget.css;
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    if (widget.custom_js) {
        script = document.createElement('script');
        script.text = widget.custom_js;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    var enableLightbox = function() {
        $('body').on('mouseleave', function() {
            var wait = setTimeout(showPopup, 300);
            var stopWait = function() {
                clearTimeout(wait);
            };
            $('body').on('mouseenter', stopWait);
            $(window).on('blur', stopWait);
        });
        console.log("[OptimizelyNYT] LP Abandoner Lightbox enabled");
    };
    var disableLightbox = function() {
        $('body').off('mouseleave');
        console.log("[OptimizelyNYT] LP Abandoner Lightbox disabled");
    };

    timeout = (widget.timeout || 0) * 1000;
    setTimeout(enableLightbox, timeout);
    $(document).on('lp_abandoner_lightbox_enable', enableLightbox);
    $(document).on('lp_abandoner_lightbox_disable', disableLightbox);

    links = placement.querySelectorAll('a[href]');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log("Confirmation Cross Sell Click: " + widget.nytID);
            window.optimizely.push({
                type: "event",
                eventName: "lp_abandoner_lightbox_clicked",
                tags: {
                    codename: widget.nytID
                }
            });
        });
    });
    console.log("[OptimizelyNYT] LP Abandoner Lightbox Loaded ID:" + widget.nytID);
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "9660362170";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"custom_js","default_value":""},{"name":"close_selector","default_value":""},{"name":"nytID","default_value":""},{"name":"timeout","default_value":0},{"name":"full_html","default_value":""},{"name":"css","default_value":".lp_abandoner_lightbox {}"},{"name":"selector","default_value":"#LP_lightbox_optly"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-9660362170');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        
      },
    });
PluginManager.registerAnalyticsTracker('9997435071', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['9997435071'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            var opt_console = {};
var showLog = document.cookie.indexOf('optly_debug') > -1 || document.cookie.indexOf('optly_sandbox') > -1;
opt_console.log = function(a,b){if(showLog){console.log(a,b);}};

var state = window.optimizely.get('state');
if(decisionData.experimentId && decisionData.variationId) {
    if(decisionData.experimentName.indexOf('abTest') === -1) {
        opt_console.log('[OptimizelyNYT] ET: skipping non-abtest: ', decisionData.experimentName);
    } else {
        opt_console.log('[OptimizelyNYT] ET building event');
        var utils = optimizely.get('utils');
        var locationUrl = window.location.href;
        var event = {};
        var testName = decisionData.experimentName.replace('abTest', 'MKT');
        testName = testName.split(' ')[0];
        var variation = state.getVariationMap()[decisionData.experimentId];
        event = {
            name: 'abtest',
            data: {
                test: testName,
                variant: variation.index,
                subject: 'ab-expose',
                url: locationUrl,
                skipAugment: true,
                instant: 1,
                priority: true
            },
            type: 'exposure'
        };
        utils.waitUntil(function () {
            return 'TAGX' in window;
        }).then(function () {
            // Excluding already running abTests
            var excludedTests = [
                'MKT_us_offer_test_0418'
            ];
            window.NYToptly.ETAllocTracked = window.NYToptly.ETAllocTracked || excludedTests;
            if (window.NYToptly.ETAllocTracked.indexOf(event.data.test) !== -1) {
                opt_console.log('[OptimizelyNYT] ET exposure test already tracked: ', event.data.test);
                return;
            }
            opt_console.log('[OptimizelyNYT] ET exposure call sent: ', event);
            TAGX.EventProxy.trigger(event.name, event.data, event.type);
            window.NYToptly.ETAllocTracked.push(event.data.test);
        });
    }
}
          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['9997435071'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        var opt_console = {};
var showLog = document.cookie.indexOf('optly_debug') > -1 || document.cookie.indexOf('optly_sandbox') > -1;
opt_console.log = function(a,b){if(showLog){console.log(a,b);}};

var state = window.optimizely.get('state');
if(decisionData.experimentId && decisionData.variationId) {
    if(decisionData.experimentName.indexOf('abTest') === -1) {
        opt_console.log('[OptimizelyNYT] ET: skipping non-abtest: ', decisionData.experimentName);
    } else {
        opt_console.log('[OptimizelyNYT] ET building event');
        var utils = optimizely.get('utils');
        var locationUrl = window.location.href;
        var event = {};
        var testName = decisionData.experimentName.replace('abTest', 'MKT');
        testName = testName.split(' ')[0];
        var variation = state.getVariationMap()[decisionData.experimentId];
        event = {
            name: 'abtest',
            data: {
                test: testName,
                variant: variation.index,
                subject: 'ab-expose',
                url: locationUrl,
                skipAugment: true,
                instant: 1,
                priority: true
            },
            type: 'exposure'
        };
        utils.waitUntil(function () {
            return 'TAGX' in window;
        }).then(function () {
            // Excluding already running abTests
            var excludedTests = [
                'MKT_us_offer_test_0418'
            ];
            window.NYToptly.ETAllocTracked = window.NYToptly.ETAllocTracked || excludedTests;
            if (window.NYToptly.ETAllocTracked.indexOf(event.data.test) !== -1) {
                opt_console.log('[OptimizelyNYT] ET exposure test already tracked: ', event.data.test);
                return;
            }
            opt_console.log('[OptimizelyNYT] ET exposure call sent: ', event);
            TAGX.EventProxy.trigger(event.name, event.data, event.type);
            window.NYToptly.ETAllocTracked.push(event.data.test);
        });
    }
}
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    

PluginManager.registerWidget({
      widgetId: '10512033713',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "10512033713";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"restoreSelectors","default_value":".hero__content, .product__container"},{"name":"css","default_value":".hero__content {\n  opacity: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.hero__content.restored {\n  opacity: 1;\n  -webkit-transition: 0.25s opacity;\n  transition: 0.25s opacity;\n}\n\n.product__container {\n  opacity: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.product__container.restored {\n  opacity: 1;\n  -webkit-transition: 0.25s opacity;\n  transition: 0.25s opacity;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = window.optimizely.get('utils');
var style = document.createElement('style');

style.innerHTML = extension.css;
document.head.appendChild(style);

console.log("[INFO] Selective hide & restore extension applied.");

var restoreElements = function() {
    var elements = document.querySelectorAll(extension.restoreSelectors);

    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        el.classList.add("restored");
    }

};

setTimeout(restoreElements, 3000);

var campaignDecided = function(event) {
    utils.waitForElement('.abTest').then(function() {
        restoreElements();
    });
};

window.optimizely = window.optimizely || [];
window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "campaignDecided"
    },
    handler: campaignDecided
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10512033713";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"restoreSelectors","default_value":".hero__content, .product__container"},{"name":"css","default_value":".hero__content {\n  opacity: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.hero__content.restored {\n  opacity: 1;\n  -webkit-transition: 0.25s opacity;\n  transition: 0.25s opacity;\n}\n\n.product__container {\n  opacity: 0;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.product__container.restored {\n  opacity: 1;\n  -webkit-transition: 0.25s opacity;\n  transition: 0.25s opacity;\n}"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: '10678632873',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "10678632873";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner) {
    document.querySelector("#Anchor").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
}
else {
console.log("AnchorAd apply.js Line 7");
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: AnchorAd, source: optimizely, creator: " + widget.creator + "</span>";

    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: "AnchorAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js,
                campaign_id = widget.campaignId;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
                console.log("[OptimizelyNYT] AnchorAd Impression ID:" + widget.nytID);
            window.optimizely.push({
                type: "event",
                eventName: "anchorad_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            var anchorList = document.querySelectorAll("#Anchor a");
            var anchorArray = Array.from(anchorList);
            anchorArray.forEach(function(a) {
                if(a.href.indexOf('/subscription') > -1){
                    a.onclick = function() {
                        console.log("[OptimizelyNYT] AnchorAd Click ID:" + id);
						window.optimizely.push({
                            type: "event",
                            eventName: "anchorad_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            if(js !== "") { eval(js); }
        },
        selector: "#Anchor"
    };
    var behavior = optimizely.get('behavior');
    var anchor_query = function(hours){
        var impressions = behavior.query({
            "version": "0.2",
            "filter":[
                {
                    "field":["name"],
                    "value":"anchorad_impression"
                },
                {
                    "field":["age"],
                    "comparator": "lt",
                    "value": hours*60*60*1000
                },
                {
                    "field":["tags","codename"],
                    "value":widget.nytID
                }
            ],
            "reduce":{
                "aggregator":"count"
            }
        });
        return impressions;
    };
    if(widget.anchor_meter.indexOf('Sub') > -1){
        console.log('Anchor Detects Sub Experience');
        var anchor_ad_session_impressions = anchor_query(widget.anchor_ad_session_hours);
        var anchor_ad_lifetime_impressions = anchor_query(widget.anchor_ad_cap_days*24);
        if(anchor_ad_session_impressions < widget.anchor_ad_session_cap && anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
            console.log("Session Impressions:" + anchor_ad_session_impressions + " was less than " + widget.anchor_ad_session_cap);
            console.log("Lifetime Impressions:" + anchor_ad_lifetime_impressions + " was less than " + widget.anchor_ad_impression_cap);
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
        else{
            if(anchor_ad_session_impressions < widget.anchor_ad_session_cap){
            console.log("Session Impressions: " + anchor_ad_session_impressions + " was greater than or equal to session cap of " + widget.anchor_ad_session_cap);
            }
            if(anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
                console.log("Lifetime Impressions: " + anchor_ad_lifetime_impressions + " was greater than or equal to lifetime cap of " + widget.anchor_ad_impression_cap);
            }
        }
    }
    else if(window.NYToptly.audience('counted') && widget.anchor_meter.indexOf(window.NYToptly.audience("meter_views").toString())>-1){
        console.log('Pass Meter');
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
    else{
        console.log('Anchor already viewed in past, ', widget.anchor_days,' Days');
        console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Failed Anchor Meter');
        console.log('Anchor set to appear at Meter ' + widget.anchor_meter);
        console.log('Current Meter at ' + window.NYToptly.audience("meter_views"));
    }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10678632873";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":""},{"name":"creator","default_value":"nytExo"},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '10704016257',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "10704016257";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"messageType","default_value":"WelcomeAd"},{"name":"displayTime","default_value":7},{"name":"trackInOptimizely","default_value":"cta"},{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"creator","default_value":"nytExo"},{"name":"closeSelector","default_value":".nytdGrowlNotifyCross"},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner ||
    window.location != window.parent.location &&
    window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id', id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] " + id + " div inserted");
    };
    appendDiv('WelcomeAd_optly');
    document.querySelector("#WelcomeAd_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    window.NYToptly.loadScript(widget.extra_js);
    eval(widget.custom_js);
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    if (widget.full_html.indexOf('adxInfo mktInfo')) {
        widget.full_html = widget.full_html.replace(/<span class="adxInfo mktInfo" style="display:none;">.*<\/span>/, '');
    }

    var mktInfo = "<span class=\"mktInfo\" style=\"display:none;\">campaign: " + widget.nytID + ", creative: WelcomeAd, source: optimizely, creator: " + widget.creator + "</span>";
    var opt_console = window.NYToptly.opt_console;
    widget.full_html = mktInfo + widget.full_html;

    var widgetObj = {
        name: "WelcomeAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
        callback: function() {


            // define variables and functions
            var id = widget.nytID,
                js = widget.custom_js,
                msgType = widget.messageType,
                trackInOptimizely = widget.trackInOptimizely,
                displayTime = widget.displayTime;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;


            var impressionEvent = {
                event: 'impression',
                module: {
                    name: 'Welcome Ad',
                    context: 'standard',
                    label: msgType,
                    region: 'Welcome Ad'
                }
            };

            var interactionEvent = {
                event: 'moduleInteraction',
                eventData: {
                    pagetype: 'homepage',
                    trigger: 'module',
                    type: 'click'
                },
                module: {
                    name: 'Welcome Ad',
                    context: 'standard',
                    label: '',
                    region: '',
                }
            };

            var elementObj = {
                'cta': {
                    'url': '',
                    'name': 'cta_' + msgType,
                    'label': 'Accept'
                },
                'accept': {
                    'url': '',
                    'name': 'accept_' + msgType,
                    'label': 'Accept'
                },
                'close': {
                    'url': '',
                    'name': 'close_' + msgType,
                    'label': 'Close'
                },
                'esc': {
                    'url': '',
                    'name': 'esc_' + msgType,
                    'label': ''
                },
                'cookiePolicy': {
                    'url': '',
                    'name': 'goto-cookiepolicy',
                    'label': 'Cookie Policy'
                }

            };

            var containerId = "welc_supercontainer";
            var container = document.getElementById(containerId);

            var handleEsc = function() {
                if (event.keyCode === 27) { // ESC
                    console.log("Esc key pressed");
                    interactionEvent.module.element = elementObj.esc_GDPR;
                    exit(interactionEvent);
                    window.removeEventListener('keydown', handleEsc, false);
                }
            }

            var addExitUriToLink = function(link) {
                var windowURL = window.location;
                var uriParam = "?EXIT_URI=" + encodeURIComponent(windowURL);
                var loginUrl = link.href;
                var loginUrlArray = loginUrl.split('?');
                var loginUrlOrigin = loginUrlArray.shift();
                var loginUrlSearch = loginUrlArray.join('?');
                if (loginUrlSearch.length) {
                    loginUrlSearch = "&" + loginUrlSearch;
                }
                loginUrl = loginUrlOrigin + uriParam + loginUrlSearch
                link.href = loginUrl;
            }

            var exit = function(event) {
                container.style.display = 'none';
                className = document.body.className;
                document.body.className = className.replace(/no-scroll/g, '').trim().replace(/  /, ' ');
                if (typeof extend_exit === 'function') {
                    extend_exit.call(event);
                }
                window.NYToptly.sendTrackingToDataLayer(event);
            }

            // eval custom javascript (can overwrite or extend any of the above)
            if (js !== "") {
                eval(js)
            };

            // Data Layer Impression Tracking
            window.NYToptly.sendTrackingToDataLayer(impressionEvent);

            // Optimizely Impression Tracking
            console.log("[OptimizelyNYT] Welcome Ad Impression ID:" + widget.nytID);
            window.optimizely.push({
                type: "event",
                eventName: "welcomead_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            document.querySelectorAll("#" + containerId + " .welcomead_login a, #" + containerId + " .login a").forEach(function(link) {
                addExitUriToLink(link);
            });

            container.onclick = function(event) {
                var el = event.target;
                // get target or ancestor of target that has the data attribute with element name
                while (!(el.dataset && el.dataset.etElementName) && el !== container && (el = el.parentElement));

                if (el && el.dataset && el.dataset.etElementName) {
                    var elName = el.dataset.etElementName;

                    if (elementObj[elName]) {
                        interactionEvent.module.element = elementObj[elName];
                        if (elName === "close" || elName === "esc") {
                            // Data Layer Interaction Tracking
                            exit(interactionEvent);
                        } else {
                            // Data Layer Interaction Tracking
                            window.NYToptly.sendTrackingToDataLayer(interactionEvent);
                            // Optimizely Interaction Tracking
                            if (trackInOptimizely.indexOf(elName) !== -1) {
                                opt_console.log("[OptimizelyNYT] Optimizely Tracking: welcomead_clicked, " + nytId + ", " + agentId);
                                window.optimizely.push({
                                    type: "event",
                                    eventName: "welcomead_clicked",
                                    tags: {
                                        codename: nytId,
                                        campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                                        agentID: agentId
                                    }
                                });
                            }
                        }
                    } else {
                        opt_console.log("[OptimizelyNYT] tracking not fully defined for " + event.target + ". You may need to use inline javascript to append a custom property to \"elementObj\".");
                    }
                } else {
                    opt_console.log("[OptimizelyNYT] " + event.target + " doesn't have data attribute for tracking.");
                }
            };

            window.addEventListener('keydown', handleEsc, false);

            if (typeof displayTime === "number" && displayTime > 1) {
                window.setTimeout(function() {
                    container.style.display = 'none';
                }, displayTime * 1000);
            }

        },
        selector: "#WelcomeAd_optly"
    };
    var behavior = optimizely.get('behavior');
    var welcome_query = function(hours) {
        var impressions = behavior.query({
            "version": "0.2",
            "filter": [{
                "field": ["name"],
                "value": "welcomead_impression"
            }, {
                "field": ["age"],
                "comparator": "lt",
                "value": hours * 60 * 60 * 1000
            }, {
                "field": ["tags", "codename"],
                "value": widget.nytID
            }],
            "reduce": {
                "aggregator": "count"
            }
        });
        return impressions;
    }
    var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
    var welcome_ads_long_cap = welcome_query(24 * widget.freq_cap_days);
    var welcome_ads_shown = false;

    if (welcome_ads_small_cap < widget.session_cap) {
        console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
    }

    if (widget.freq_cap_number != "" && widget.freq_cap_days != "") {
        if (welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number) {
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
            welcome_ads_shown = true;
        } else {
            opt_console.log("[OptimizelyNYT] Failed Frequency Cap ", welcome_ads_long_cap, widget.freq_cap_number);
        }
    } else if (welcome_ads_small_cap < widget.session_cap) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        welcome_ads_shown = true;
    } else {
        console.log('Welcome Ad already shown');
    }

    if (!welcome_ads_shown) {
        var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('mtr-debug') > -1);
        if (debugFlag) {
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10704016257";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"messageType","default_value":"WelcomeAd"},{"name":"displayTime","default_value":7},{"name":"trackInOptimizely","default_value":"cta"},{"name":"extra_js","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"creator","default_value":"nytExo"},{"name":"closeSelector","default_value":".nytdGrowlNotifyCross"},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"custom_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '10826354007',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"cross-platform-bucketing-extension\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "10826354007";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-10826354007';
widget._styleTag.innerHTML = '.cross-platform-bucketing-extension {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;	font-weight: bold;  text-align: center;  font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var bucketString = localStorage.getItem('VI_to_NYT5_bucketing');
if(bucketString){
	var key_value = bucketString.split(',');
	var experimentId = key_value[0];
	var variationId = key_value[1];
	window.optimizely.push({
		"type": "bucketVisitor",
		"experimentId": experimentId,
		"variationId": variationId
	});
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "10826354007";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-10826354007');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });
PluginManager.registerAnalyticsTracker('11081220413', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      onLayerDecision: [
        'stores/layer_data',
        function onLayerDecisionGetter(LayerDataStore) {
          return function(decisionData) {
            var campaignId = decisionData.decision.layerId;
            var layer = LayerDataStore.get(campaignId);
            var extension = layer.integrationSettings && layer.integrationSettings['11081220413'];
            if (!extension) {
              return;
            }
            var campaign = {
              id: campaignId,
              name: layer.name,
              policy: layer.policy,
              integrationStringVersion: layer.integrationStringVersion,
            };
            var experimentId = decisionData.decision.experimentId;
            var variationId = decisionData.decision.variationId;
            var isHoldback = decisionData.decision.isLayerHoldback;
            extension.$fieldDefaults = [];
            (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
            if (document.cookie.indexOf('optly_data') > -1) {

  if(decisionData.experimentId && decisionData.variationId) {

    console.log('[Debug Data] Debug data integration applied.');

    var optlyData = window.optimizely.get('data'),
        placementName = getPlacementName(optlyData),
        data = {
          projectId: decisionData.projectId,
          campaignId: decisionData.layerId,
          campaignName: decisionData.layerName,
          experimentId: decisionData.experimentId,
          experimentName: decisionData.experimentName,
          variationId: decisionData.variationId,
          variationName: decisionData.variationName,
          pageId: decisionData.pageId,
          pageName: optlyData.pages[decisionData.pageId].name,
          decisionTicketAudiences: decisionData.decisionTicketAudienceIds
        };

    window.NYToptly.debugData = window.NYToptly.debugData || [];
    window.NYToptly.debugData[placementName] = window.NYToptly.debugData[placementName] || {};
    window.NYToptly.debugData[placementName][experimentId] = data;

    var showOptlyPlacements = function() {

      var debugData = window.NYToptly.debugData;
      var mktInfos = document.querySelectorAll('.mktInfo');

      console.log('%c============================================', 'font-weight: bold;');
      console.log('%cDebug Data', 'font-weight: bold;');
      console.log('%c============================================\n\n', 'font-weight: bold;');

      for (var placement in debugData) {

        var isPresented = false;

        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          if (creative.toLowerCase().indexOf(placement) !== -1) {
            isPresented = true;
          }
        });

        var placementName = placement.charAt(0).toUpperCase() + placement.slice(1);

        if (isPresented) {
          console.log('%c\n\n' + placementName + ': ' + '    ***PRESENTED***\n\n', 'font-weight: bold;');
        }
        else {
          console.log('%c\n\n' + placementName + ': ' + '\n\n', 'font-weight: bold;');
        }

        for (var expId in debugData[placement]) {
          console.log('     Campaign:          ' + debugData[placement][expId].campaignId + ' -- ' + debugData[placement][expId].campaignName);
          console.log('        Experience:     ' + debugData[placement][expId].experimentId + ' -- ' + debugData[placement][expId].experimentName);
          console.log('           Variation:   ' + debugData[placement][expId].variationId + ' -- ' + debugData[placement][expId].variationName);
          console.log('           Page:        ' + debugData[placement][expId].pageId + ' -- ' + debugData[placement][expId].pageName);
        }
      }

      console.log('%c\n\n============================================', 'font-weight: bold;');

    };

    var showDecision = function(placement) {

      var info = getUserData();

      console.log('%c============================================', 'font-weight: bold;');
      console.log('%cDebug Data' + getTitle(placement), 'font-weight: bold;');
      console.log('%c============================================\n\n', 'font-weight: bold;');

      console.log(info.userType + ', ' + info.country + ', ' + info.browser +', MC=' + info.mc + '\n\n');

      if (placement) {
        showDataForExperimentsByPlacementName(placement);
      }
      else {
        showDataForActiveExperiments();
      }

      console.log('%c============================================', 'font-weight: bold;');

    };

    window.NYToptly.showOptlyPlacements = window.NYToptly.showOptlyPlacements || showOptlyPlacements;
    window.NYToptly.showDecision = window.NYToptly.showDecision || showDecision;

  }

  function getPlacementName(data) {
    var placements = ['gateway', 'growl', 'bar1', 'anchor'],
        page = data.pages[decisionData.pageId].name.toLowerCase(),
        name;

    name = placements.filter(function(el) {
      if (page.indexOf(el) !== -1) {
        return el;
      }
    })[0];

    return name;
  }

  function getTitle(placement) {
    return (placement ? ' for ' + placement.charAt(0).toUpperCase() + placement.slice(1) : ' for All Active Experiences');
  }

  function getUserData() {
    var visitor = window.optimizely.get('visitor');
    return {
      userType: window.NYToptly.userInfo.user_type,
      country: window.NYToptly.userInfo.full_object.geo.country,
      mc: window.optly_meter,
      browser: visitor.browserId
    };
  }

  function showDataForExperimentsByPlacementName(placement) {

    var optlyData = window.optimizely.get('data'),
        debugData = window.NYToptly.debugData;

    if (debugData[placement]) {
      for (var experimentId in debugData[placement]) {

        var isPresented = false,
            placementData = debugData[placement][experimentId],
            mktInfos = document.querySelectorAll('.mktInfo'),
            experiment = optlyData.experiments[experimentId],
            campaignId = getCampaignId(experiment.campaignName),
            priority = getPriority(campaignId, experimentId);

        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          if (creative.toLowerCase().indexOf(placement) !== -1) {
            isPresented = true;
          }
        });

        if (isPresented) {
          console.log('%c' + placementData.experimentName + '    ***PRESENTED***', 'font-weight: bold;');
        }
        else {
          console.log('%c' + placementData.experimentName, 'font-weight: bold;');
        }

        showAudiences(campaignId, experiment);

        console.log('    Priority: ' + priority);
        console.log('\n');

      }
    }

  }

  function showDataForActiveExperiments() {
    var state = window.optimizely.get('state'),
        activeExperimentIds = state.getActiveExperimentIds(),
        optlyData = window.optimizely.get('data'),
        debugData = window.NYToptly.debugData;

    activeExperimentIds.forEach(function(experimentId) {

      var experiment = optlyData.experiments[experimentId],
          campaignId = getCampaignId(experiment.campaignName),
          priority = getPriority(campaignId, experimentId),
          isPresented = false;

      for (var placementName in debugData) {
        if (debugData[placementName][experimentId]) {
          isPresented = true;
          break;
        }
      }

      if (isPresented) {
        console.log('%c' + experiment.name + '    ***PRESENTED***', 'font-weight: bold;');
      }
      else {
        console.log('%c' + experiment.name, 'font-weight: bold;');
      }

      if (isPresented) {
        var mktInfos = document.querySelectorAll('.mktInfo');
        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          console.log('    Placement name: ' + creative);
        });
      }

      showAudiences(campaignId, experiment);

      console.log('    Priority: ' + priority);
      console.log('\n');

    });

  }

  function showAudiences(campaignId, experiment) {

    var state = window.optimizely.get('state'),
        optlyData = window.optimizely.get('data'),
        audiences = optlyData.audiences;

    console.log('    Audiences: ');

    if (experiment.audienceIds) {
      experiment.audienceIds.forEach(function(audienceId) {
        if (!isNaN(parseInt(audienceId))) {
          var campaignState = state.getCampaignStateLists()[campaignId],
              audienceValue = false;

          for (var item in campaignState) {
            for (var audience in campaignState[item].audiences) {
              if (campaignState[item].audiences[audience].id == audienceId) {
                audienceValue = true + ' ';
                break;
              }
            }
          }

          console.log('        ' + audienceValue + '   ' + audiences[audienceId].name);
        }
        else if (audienceId === 'or') {
          console.log('        Match any of audiences:');
        }
        else if (audienceId === 'and') {
          console.log('        Match all of audiences:');
        }
      });
    }
    else {
      console.log('        true    ' + experiment.audienceName);
    }

  }

  function getCampaignId(campaignName) {
    var optlyData = window.optimizely.get('data');
    for (var campaign in optlyData.campaigns) {
      if (optlyData.campaigns[campaign].name === campaignName) {
        return optlyData.campaigns[campaign].id;
      }
    }
  }

  function getPriority(campaignId, experimentId) {
    var experimentPriorities = optlyData.campaigns[campaignId].decisionMetadata.experimentPriorities,
        priority;
    experimentPriorities.forEach(function(el, index) {
      el.forEach(function(i) {
        if (i.entityId === experimentId) {
          priority = index;
          return false;
        }
      });
    });
    return priority;
  }

}

          }
        }
      ],
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['11081220413'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        if (document.cookie.indexOf('optly_data') > -1) {

  if(decisionData.experimentId && decisionData.variationId) {

    console.log('[Debug Data] Debug data integration applied.');

    var optlyData = window.optimizely.get('data'),
        placementName = getPlacementName(optlyData),
        data = {
          projectId: decisionData.projectId,
          campaignId: decisionData.layerId,
          campaignName: decisionData.layerName,
          experimentId: decisionData.experimentId,
          experimentName: decisionData.experimentName,
          variationId: decisionData.variationId,
          variationName: decisionData.variationName,
          pageId: decisionData.pageId,
          pageName: optlyData.pages[decisionData.pageId].name,
          decisionTicketAudiences: decisionData.decisionTicketAudienceIds
        };

    window.NYToptly.debugData = window.NYToptly.debugData || [];
    window.NYToptly.debugData[placementName] = window.NYToptly.debugData[placementName] || {};
    window.NYToptly.debugData[placementName][experimentId] = data;

    var showOptlyPlacements = function() {

      var debugData = window.NYToptly.debugData;
      var mktInfos = document.querySelectorAll('.mktInfo');

      console.log('%c============================================', 'font-weight: bold;');
      console.log('%cDebug Data', 'font-weight: bold;');
      console.log('%c============================================\n\n', 'font-weight: bold;');

      for (var placement in debugData) {

        var isPresented = false;

        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          if (creative.toLowerCase().indexOf(placement) !== -1) {
            isPresented = true;
          }
        });

        var placementName = placement.charAt(0).toUpperCase() + placement.slice(1);

        if (isPresented) {
          console.log('%c\n\n' + placementName + ': ' + '    ***PRESENTED***\n\n', 'font-weight: bold;');
        }
        else {
          console.log('%c\n\n' + placementName + ': ' + '\n\n', 'font-weight: bold;');
        }

        for (var expId in debugData[placement]) {
          console.log('     Campaign:          ' + debugData[placement][expId].campaignId + ' -- ' + debugData[placement][expId].campaignName);
          console.log('        Experience:     ' + debugData[placement][expId].experimentId + ' -- ' + debugData[placement][expId].experimentName);
          console.log('           Variation:   ' + debugData[placement][expId].variationId + ' -- ' + debugData[placement][expId].variationName);
          console.log('           Page:        ' + debugData[placement][expId].pageId + ' -- ' + debugData[placement][expId].pageName);
        }
      }

      console.log('%c\n\n============================================', 'font-weight: bold;');

    };

    var showDecision = function(placement) {

      var info = getUserData();

      console.log('%c============================================', 'font-weight: bold;');
      console.log('%cDebug Data' + getTitle(placement), 'font-weight: bold;');
      console.log('%c============================================\n\n', 'font-weight: bold;');

      console.log(info.userType + ', ' + info.country + ', ' + info.browser +', MC=' + info.mc + '\n\n');

      if (placement) {
        showDataForExperimentsByPlacementName(placement);
      }
      else {
        showDataForActiveExperiments();
      }

      console.log('%c============================================', 'font-weight: bold;');

    };

    window.NYToptly.showOptlyPlacements = window.NYToptly.showOptlyPlacements || showOptlyPlacements;
    window.NYToptly.showDecision = window.NYToptly.showDecision || showDecision;

  }

  function getPlacementName(data) {
    var placements = ['gateway', 'growl', 'bar1', 'anchor'],
        page = data.pages[decisionData.pageId].name.toLowerCase(),
        name;

    name = placements.filter(function(el) {
      if (page.indexOf(el) !== -1) {
        return el;
      }
    })[0];

    return name;
  }

  function getTitle(placement) {
    return (placement ? ' for ' + placement.charAt(0).toUpperCase() + placement.slice(1) : ' for All Active Experiences');
  }

  function getUserData() {
    var visitor = window.optimizely.get('visitor');
    return {
      userType: window.NYToptly.userInfo.user_type,
      country: window.NYToptly.userInfo.full_object.geo.country,
      mc: window.optly_meter,
      browser: visitor.browserId
    };
  }

  function showDataForExperimentsByPlacementName(placement) {

    var optlyData = window.optimizely.get('data'),
        debugData = window.NYToptly.debugData;

    if (debugData[placement]) {
      for (var experimentId in debugData[placement]) {

        var isPresented = false,
            placementData = debugData[placement][experimentId],
            mktInfos = document.querySelectorAll('.mktInfo'),
            experiment = optlyData.experiments[experimentId],
            campaignId = getCampaignId(experiment.campaignName),
            priority = getPriority(campaignId, experimentId);

        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          if (creative.toLowerCase().indexOf(placement) !== -1) {
            isPresented = true;
          }
        });

        if (isPresented) {
          console.log('%c' + placementData.experimentName + '    ***PRESENTED***', 'font-weight: bold;');
        }
        else {
          console.log('%c' + placementData.experimentName, 'font-weight: bold;');
        }

        showAudiences(campaignId, experiment);

        console.log('    Priority: ' + priority);
        console.log('\n');

      }
    }

  }

  function showDataForActiveExperiments() {
    var state = window.optimizely.get('state'),
        activeExperimentIds = state.getActiveExperimentIds(),
        optlyData = window.optimizely.get('data'),
        debugData = window.NYToptly.debugData;

    activeExperimentIds.forEach(function(experimentId) {

      var experiment = optlyData.experiments[experimentId],
          campaignId = getCampaignId(experiment.campaignName),
          priority = getPriority(campaignId, experimentId),
          isPresented = false;

      for (var placementName in debugData) {
        if (debugData[placementName][experimentId]) {
          isPresented = true;
          break;
        }
      }

      if (isPresented) {
        console.log('%c' + experiment.name + '    ***PRESENTED***', 'font-weight: bold;');
      }
      else {
        console.log('%c' + experiment.name, 'font-weight: bold;');
      }

      if (isPresented) {
        var mktInfos = document.querySelectorAll('.mktInfo');
        mktInfos.forEach(function(mktInfo) {
          var creative = mktInfo.innerHTML.split(',')[1].trim().split(':')[1].trim();
          console.log('    Placement name: ' + creative);
        });
      }

      showAudiences(campaignId, experiment);

      console.log('    Priority: ' + priority);
      console.log('\n');

    });

  }

  function showAudiences(campaignId, experiment) {

    var state = window.optimizely.get('state'),
        optlyData = window.optimizely.get('data'),
        audiences = optlyData.audiences;

    console.log('    Audiences: ');

    if (experiment.audienceIds) {
      experiment.audienceIds.forEach(function(audienceId) {
        if (!isNaN(parseInt(audienceId))) {
          var campaignState = state.getCampaignStateLists()[campaignId],
              audienceValue = false;

          for (var item in campaignState) {
            for (var audience in campaignState[item].audiences) {
              if (campaignState[item].audiences[audience].id == audienceId) {
                audienceValue = true + ' ';
                break;
              }
            }
          }

          console.log('        ' + audienceValue + '   ' + audiences[audienceId].name);
        }
        else if (audienceId === 'or') {
          console.log('        Match any of audiences:');
        }
        else if (audienceId === 'and') {
          console.log('        Match all of audiences:');
        }
      });
    }
    else {
      console.log('        true    ' + experiment.audienceName);
    }

  }

  function getCampaignId(campaignName) {
    var optlyData = window.optimizely.get('data');
    for (var campaign in optlyData.campaigns) {
      if (optlyData.campaigns[campaign].name === campaignName) {
        return optlyData.campaigns[campaign].id;
      }
    }
  }

  function getPriority(campaignId, experimentId) {
    var experimentPriorities = optlyData.campaigns[campaignId].decisionMetadata.experimentPriorities,
        priority;
    experimentPriorities.forEach(function(el, index) {
      el.forEach(function(i) {
        if (i.entityId === experimentId) {
          priority = index;
          return false;
        }
      });
    });
    return priority;
  }

}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}], "events": [{"category": "other", "name": "Anchor Ad Click", "eventType": "custom", "viewId": null, "apiName": "anchorad_clicked", "id": "4244163679", "eventFilter": null}, {"category": "other", "name": "Bar1 Impression", "eventType": "custom", "viewId": null, "apiName": "bar1_impression", "id": "4257451236", "eventFilter": null}, {"category": "other", "name": "Interstitial Impression", "eventType": "custom", "viewId": null, "apiName": "interstitial_impression", "id": "4262390306", "eventFilter": null}, {"category": "subscribe", "name": "Subscription Thank You", "eventType": "custom", "viewId": null, "apiName": "ThankYou", "id": "6185880525", "eventFilter": null}, {"category": "other", "name": "Interstitial Click", "eventType": "custom", "viewId": null, "apiName": "interstitial_clicked", "id": "6635720631", "eventFilter": null}, {"category": "other", "name": "Anchor Ad Impression", "eventType": "custom", "viewId": null, "apiName": "anchorad_impression", "id": "6665300304", "eventFilter": null}, {"category": "other", "name": "Bar1 Click", "eventType": "custom", "viewId": null, "apiName": "bar1_clicked", "id": "6676210483", "eventFilter": null}, {"category": "other", "name": "Landing Page Impression", "eventType": "custom", "viewId": null, "apiName": "lp_impression", "id": "7130120046", "eventFilter": null}, {"category": "other", "name": "Landing Page Click", "eventType": "custom", "viewId": null, "apiName": "lp_clicked", "id": "7135420210", "eventFilter": null}, {"category": "other", "name": "click", "eventType": "custom", "viewId": null, "apiName": "track_click_mkt", "id": "7738870432", "eventFilter": null}, {"category": "other", "name": "Aus", "eventType": "custom", "viewId": null, "apiName": "Loc_Aus", "id": "7800901200", "eventFilter": null}, {"category": "other", "name": "Gateway Click", "eventType": "custom", "viewId": null, "apiName": "gateway_clicked", "id": "8021672682", "eventFilter": null}, {"category": "other", "name": "Growl Click", "eventType": "custom", "viewId": null, "apiName": "growl_clicked", "id": "8166094704", "eventFilter": null}, {"category": "other", "name": "Growl Impression", "eventType": "custom", "viewId": null, "apiName": "growl_impression", "id": "8177050248", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Click", "eventType": "custom", "viewId": null, "apiName": "welcomead_clicked", "id": "8198940606", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Impression", "eventType": "custom", "viewId": null, "apiName": "welcomead_impression", "id": "8198950760", "eventFilter": null}, {"category": "other", "name": "Click Event for #nyt-button-sub", "eventType": "click", "viewId": "4129021553", "apiName": "click_event_for_nytbuttonsub", "id": "8203284969", "eventFilter": {"filterType": "target_selector", "selector": "#nyt-button-sub"}}, {"category": "other", "name": "Fixed Header Impression", "eventType": "custom", "viewId": null, "apiName": "fixedheader_impression", "id": "8318590987", "eventFilter": null}, {"category": "other", "name": "Gateway Impression", "eventType": "custom", "viewId": null, "apiName": "gateway_impression", "id": "8319291120", "eventFilter": null}, {"category": "other", "name": "Fixed Header Click", "eventType": "custom", "viewId": null, "apiName": "fixedheader_click", "id": "8324440398", "eventFilter": null}, {"category": "other", "name": "Survey Impression", "eventType": "custom", "viewId": null, "apiName": "survey_triggered", "id": "8334446569", "eventFilter": null}, {"category": "other", "name": "Bar1 Hover", "eventType": "custom", "viewId": null, "apiName": "bar1_hover", "id": "8385210067", "eventFilter": null}, {"category": "other", "name": "Facebook Pixel Impression", "eventType": "custom", "viewId": null, "apiName": "fbpx", "id": "8475641186", "eventFilter": null}, {"category": "other", "name": "E-mail Sign Up", "eventType": "custom", "viewId": null, "apiName": "email_sign_up", "id": "8541513225", "eventFilter": null}, {"category": "other", "name": "Confirmation Cross Sell Unit Impression", "eventType": "custom", "viewId": null, "apiName": "confirmation_cross_sell_impression", "id": "9020161436", "eventFilter": null}, {"category": "other", "name": "Confirmation Cross Sell Unit Click", "eventType": "custom", "viewId": null, "apiName": "confirmation_cross_sell_clicked", "id": "9034721313", "eventFilter": null}, {"category": "other", "name": "Adaptive Articles Impression", "eventType": "custom", "viewId": null, "apiName": "adaptiveArticles_impression", "id": "9109873406", "eventFilter": null}, {"category": "other", "name": "clickedUrl", "eventType": "custom", "viewId": null, "apiName": "clickedUrl", "id": "9270402417", "eventFilter": null}, {"category": "other", "name": "Bundle Feature Reveal", "eventType": "custom", "viewId": null, "apiName": "bundleFeat_reveal", "id": "9420100253", "eventFilter": null}, {"category": "other", "name": "LP Abandoner Lightbox Click", "eventType": "custom", "viewId": null, "apiName": "lp_abandoner_lightbox_clicked", "id": "9661872764", "eventFilter": null}, {"category": "other", "name": "Compare Now Click", "eventType": "custom", "viewId": null, "apiName": "compare_now_click", "id": "9664332089", "eventFilter": null}, {"category": "other", "name": "LP Abandoner Lightbox Impression", "eventType": "custom", "viewId": null, "apiName": "lp_abandoner_lightbox_impression", "id": "9668312625", "eventFilter": null}, {"category": "other", "name": "See Details Click", "eventType": "custom", "viewId": null, "apiName": "see_details", "id": "9727634585", "eventFilter": null}, {"category": "other", "name": "cxEngagement_AnchorAdImpression_2", "eventType": "custom", "viewId": null, "apiName": "cxEngagement_AnchorAdImpression_2", "id": "9859701267", "eventFilter": null}, {"category": "other", "name": "cxEngagement_AnchorAdImpression_1", "eventType": "custom", "viewId": null, "apiName": "cxEngagement_AnchorAdImpression_1", "id": "9868240592", "eventFilter": null}, {"category": "other", "name": "Butter Tart recipe article", "eventType": "custom", "viewId": null, "apiName": "butter_tart", "id": "10163881275", "eventFilter": null}, {"category": "other", "name": "Cookie Impression", "eventType": "custom", "viewId": null, "apiName": "ck_impression", "id": "10435620837", "eventFilter": null}, {"category": "other", "name": "Newsletter Sign Up", "eventType": "custom", "viewId": null, "apiName": "newsletter_sign_up", "id": "10558671669", "eventFilter": null}, {"category": "other", "name": "MB Newsletter Signup", "eventType": "custom", "viewId": null, "apiName": "mb_newsletter_signup", "id": "10585820868", "eventFilter": null}, {"category": "other", "name": "Free Offer Test Expose Event", "eventType": "custom", "viewId": null, "apiName": "free_offer_expose", "id": "11039451338", "eventFilter": null}], "revision": "32141"},h=n(129);if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var g;g=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],g.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(144).setupPreviewGlobal(),n(144).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/3013110282/s/article_prod/preview.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(c),n(144).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction("initializeOptimizelyPreview",e),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&(e(p),i.queuePayload());r.timeEnd("block")}try{i()}catch(e){try{n(143).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(e){var t=O.getPromise("RUM_FIRST_BEACON");return t?t.then(e):m.makeAsyncRequest("RUM_FIRST_BEACON",e)}function r(e){return g.isEmpty(e)?A.resolve():i((function(){return w.request({url:V,method:"POST",data:e}).then((function(e){return m.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw T.error("POST to client-rum failed:",e),m.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function a(){var e=y.getCurrentScript();if(e)return e.src}function o(){var e={id:x.getRumId(),v:U,account:C.getAccountId(),project:C.getSnippetId()||C.getProjectId(),snippet:C.getSnippetId(),revision:C.getRevision(),clientVersion:"0.102.0",hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=_.getEvents().length}catch(e){T.debug("Unable to get behavior events for RUM:",e)}g.assign(e,s(),l()),I.dispatch(D.SET_RUM_DATA,{data:e})}function s(){var e=b.getGlobal("performance");if(e){var t,n=x.getScriptSrc();try{if(n){T.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;T.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=g.find(a,(function(e){return r.test(e.name)}))}if(t)return g.mapValues(R.ResourceTimingAttributes,(function(e,n){return Math.round(1e3*(t[n]||0))/1e3}))}catch(e){return}}}function u(){try{return!y.querySelector("body")}catch(e){return null}}function c(){try{b.getGlobal("requestAnimationFrame")((function(){var e=x.getRumData().timebase;I.dispatch(D.SET_RUM_DATA,{data:{render:E.now()-(e||0)}})}))}catch(e){return}}function l(){return L.getDurationsFor(g.values(R.RUMPerformanceTimingAttributes))}function d(){var e={numKeys:S.allKeys().length,sizeKeys:S.allKeys().toString().length,sizeValues:S.allValues().toString().length},t=b.getGlobal("performance"),n=t?t.timing:{},i=L.getMarks()||{},a=x.getApiData(),o=x.getDOMObservationData(),s=F.get("state").getActiveExperimentIds(),u=f(x.getScriptSrc()),c=x.getRumData()||{},l=c.extras||{};g.assign(l,{apiCalls:a,DOMObservationData:o,paintTimings:h(),activeExperimentIds:s,numPages:k.getNumberOfPages(),snippet:{scheme:u.scheme,host:u.host,path:u.path},networkInfo:p()});var d=b.getGlobal("Prototype");d&&!g.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var v=!1;v=!0;var m=P.getFrames();m.length&&(l.xdFramesLoaded=m.length);var _={id:x.getRumId(),v:U,project:C.getSnippetId()||C.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:i,xd:v,apis:g.keys(a),extras:l};r(_)}function f(e){var t=y.createElement("a");return t.href=e,{host:t.host,scheme:t.protocol.slice(0,-1),path:t.pathname}}function p(){var e=b.getGlobal("navigator");if(e&&e.connection)return g.pick(e.connection,["downlink","rtt","effectiveType"])}function h(){var e=b.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(g.isEmpty(t))return;return g.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var g=n(2),v=n(5),m=n(6),_=n(68),E=n(21),y=n(77),I=n(9),S=n(78).LocalStorage,T=n(20),A=n(12).Promise,b=n(36),w=n(86),D=n(7),R=n(22),N=n(16),O=N.get("stores/async_request"),C=N.get("stores/global"),x=N.get("stores/rum"),L=N.get("stores/performance"),P=N.get("stores/xdomain"),k=N.get("stores/view_data"),F=n(88),V="https://rum.optimizely.com/rum",M=3e3,U="1.0",B=.01;t.initialize=function(){var e=v.generate().replace(/-/g,""),t=Math.random()<B;t&&(I.dispatch(D.SET_RUM_DATA,{id:e,RumHost:V,inRumSample:t,src:a(),data:{id:e,sync:u(),timebase:E.now(),sampleRate:B}}),c())},t.queuePayload=function(){return x.getSampleRum()?(y.isLoaded()?b.setTimeout(d,M):b.addEventListener("load",d),new A(function(e,t){b.setTimeout((function(){o();var n=x.getRumData();n=g.pickBy(n,(function(e){return!g.isUndefined(e)})),r(n).then(e,t)}),M)}).catch((function(e){T.warn("RUM / Error sending data:",e)}))):A.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function h(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function g(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return hi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Pn:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(Ht(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function R(){}function N(e,t){return C(e,t)&&delete e[t]}function O(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function C(e,t){return Xi?e[t]!==An:Di.call(e,t)}function x(e,t,n){e[t]=Xi&&n===An?Rn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function P(){this.d={hash:new R,map:Ki?new Ki:[],string:new R}}function k(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Ki?t.map["delete"](e):W(t.map,e)}function F(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Ki?t.map.get(e):X(t.map,e)}function V(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Ki?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?x("string"==typeof e?n.string:n.hash,e,t):Ki?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function B(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function G(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function j(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function H(){this.d={array:[],map:null}}function z(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function K(e){var t=this.d,n=t.array;return n?$(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():ji.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Ot(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Ot(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Ot(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Ot(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!jt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Bn||c==Gn;if(fr(e))return Oe(e,t);if(c==zn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new j);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return jt(e)?Bi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,g(n))),i?(a=s,u=!1):t.length>=wn&&(a=B,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var h=d;h--;)if(t[h]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Pt(o)&&(n||dr(o)||xt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Bt(e[t])}))}function he(e,t,n,i,r){return e===t||(null==e||null==t||!jt(e)&&!Ht(t)?e!==e&&t!==t:ge(e,t,he,n,i,r))}function ge(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=Oi.call(e),u=u==kn?zn:u),s||(c=Oi.call(t),c=c==kn?zn:c);var l=u==zn&&!I(e),d=c==zn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var h=o||Qt(e)?ze(e,t,n,i,r,a):Ye(e,t,u,n,i,r,a);return a.pop(),h}if(!(r&xn)){var g=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(g||v){var h=n(g?e.value():e,v?t.value():t,i,r,a);return a.pop(),h}}if(!f)return!1;var h=Ke(e,t,n,i,r,a);return a.pop(),h}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function me(e){return zi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&he(e[r],n[r],An,Cn|xn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),jt(o))r||(r=new j),Se(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Pt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||xt(u)?xt(s)?l=tn(s):!jt(s)||i&&Bt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Te(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Oe(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Ce(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function xe(e){return yt(A(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Pe(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ve(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Be(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Ge(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function je(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return jt(i)?i:n}}function He(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Ti&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=je(e);return r}function ze(e,t,n,i,r,a){var o=-1,s=r&xn,u=r&Cn,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],h=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==h&&!n(p,h,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case Vn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case Hn:return e!=+e?t!=+t:e==+t;case Yn:case qn:return e==t+""}return!1}function Ke(e,t,n,i,r,a){var o=r&xn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,h=o;++d<u;){f=s[d];var g,v=e[f],m=t[f];if(!(g===An?v===m||n(v,m,i,r,a):g)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function qe(e,t){var n=e[t];return Yt(n)?n:An}function We(e){return Oi.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return Ce(e);case Vn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case jn:return xe(e);case Hn:case qn:return new i(e);case Yn:return Le(e);case Kn:return Pe(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Gt(t)&&(dr(e)||$t(e)||xt(e))?h(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.e,this.u)}function ht(e,t,n){return t=n?An:t,ue(e,ve(t))}function gt(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Lt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?An:t,Re(e,ve(t))}function Tt(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Yi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return jt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function Ot(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function xt(e){return Pt(e)&&Di.call(e,"callee")&&(!Gi.call(e,"callee")||Oi.call(e)==kn)}function Lt(e){return null!=e&&Gt(rr(e))&&!Bt(e)}function Pt(e){return Ht(e)&&Lt(e)}function kt(e){return e===!0||e===!1||Ht(e)&&Oi.call(e)==Vn}function Ft(e){return Ht(e)&&Oi.call(e)==Mn}function Vt(e){if(Lt(e)&&(dr(e)||$t(e)||Bt(e.splice)||xt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return he(e,t)}function Ut(e){return"number"==typeof e&&Hi(e)}function Bt(e){var t=jt(e)?Oi.call(e):"";return t==Bn||t==Gn}function Gt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pn}function jt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ht(e){return!!e&&"object"==typeof e}function zt(e){return qt(e)&&e!=+e}function Yt(e){return null!=e&&(Bt(e)?xi.test(wi.call(e)):Ht(e)&&(I(e)?xi:li).test(e))}function Kt(e){return null===e}function qt(e){return"number"==typeof e||Ht(e)&&Oi.call(e)==Hn}function Wt(e){if(!Ht(e)||Oi.call(e)!=zn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function Xt(e){return jt(e)&&Oi.call(e)==Yn}function $t(e){return"string"==typeof e||!dr(e)&&Ht(e)&&Oi.call(e)==qn}function Qt(e){return Ht(e)&&Gt(e.length)&&!!fi[Oi.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?gr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||S(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Bt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function hn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function gn(e){return function(){return e}}function vn(e){return e}function mn(e){return ye(gr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||jt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(jt(n)&&"chain"in n)||n.chain,o=Bt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Ti._===this&&(Ti._=Ci),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Sn(e){return e&&e.length?c(e,vn,Ct):An}function Tn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,On=32,Cn=1,xn=2,Ln=1/0,Pn=9007199254740991,kn="[object Arguments]",Fn="[object Array]",Vn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Bn="[object Function]",Gn="[object GeneratorFunction]",jn="[object Map]",Hn="[object Number]",zn="[object Object]",Yn="[object RegExp]",Kn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[$n]=fi[Vn]=fi[Mn]=fi[Un]=fi[Bn]=fi[jn]=fi[Hn]=fi[zn]=fi[Yn]=fi[Kn]=fi[qn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Fn]=pi[$n]=pi[Vn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[jn]=pi[Hn]=pi[zn]=pi[Yn]=pi[Kn]=pi[qn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Bn]=pi[Xn]=!1;var hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},gi={"function":!0,object:!0},vi=gi[typeof t]&&t&&!t.nodeType?t:An,mi=gi[typeof e]&&e&&!e.nodeType?e:An,_i=mi&&mi.exports===vi?vi:An,Ei=m(vi&&mi&&"object"==typeof n&&n),yi=m(gi[typeof self]&&self),Ii=m(gi[typeof window]&&window),Si=m(gi[typeof this]&&this),Ti=Ei||Ii!==(Si&&Si.window)&&Ii||yi||Si||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ni=wi.call(Object),Oi=bi.toString,Ci=Ti._,xi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=_i?Ti.Buffer:An,Pi=Ti.Reflect,ki=Ti.Symbol,Fi=Ti.Uint8Array,Vi=Pi?Pi.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Bi=Object.create,Gi=bi.propertyIsEnumerable,ji=Ai.splice,Hi=Ti.isFinite,zi=Object.keys,Yi=Math.max,Ki=qe(Ti,"Map"),qi=qe(Ti,"Set"),Wi=qe(Ti,"WeakMap"),Xi=qe(Object,"create"),$i=Ki?wi.call(Ki):"",Qi=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Be(fe),nr=Ge();Vi&&!Gi.call({valueOf:1},"valueOf")&&(_e=function(e){return T(Vi(e))});var ir=Ve,rr=be("length"),ar=Ui||function(){return[]};(Ki&&We(new Ki)!=jn||qi&&We(new qi)!=Kn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Oi.call(e),n=t==zn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return jn;case Qi:return Kn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return He(e,Nn|On,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,hr(t)||0,n)})),lr=Dt((function(e,t){return He(e,On,An,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:gn(!1),pr=Number,hr=Number,gr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Ve(t,un(t),e,i)})),_r=Dt((function(e){return e.push(An,Z),mr.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Te(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,L.prototype.clear=P,L.prototype["delete"]=k,L.prototype.get=F,L.prototype.has=V,L.prototype.set=M,U.prototype.push=G,j.prototype.clear=H,j.prototype["delete"]=z,j.prototype.get=Y,j.prototype.has=K,j.prototype.set=q,w.assign=gr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=gt,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=mn,w.merge=Er,w.mixin=_n,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=Tt,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=hn,w.every=ht,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=xt,w.isArray=dr,w.isBoolean=kt,w.isDate=Ft,w.isEmpty=Vt,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Bt,w.isNaN=zt,w.isNull=Kt,w.isNumber=qt,w.isObject=jt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Sn,w.min=Tn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=St,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new a(function(e,t){o=e,u=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.T=[]}function r(e,t){return function(){
var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.A(e,t)})),a.each(this.T,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.b()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.R=e,this.N=t,this.O=0,this.C=!1,this.L={},r.extend(this,n),this.P={},this.initialize&&this.initialize()}var r=n(2);i.prototype.A=function(e,t){var n=this.L[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.P)},i.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.N.D(this.R,e)},i.prototype.emitChange=function(){this.C=!0,this.O++},i.prototype.hasChanges=function(){return this.C},i.prototype.resetChange=function(){this.C=!1},i.prototype.getStateId=function(){return this.O},i.prototype.b=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function p(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function h(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return x(a,r,e,i._result)}))})():R(i,r,e,t),r}function g(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function T(e,t,n){t.constructor===e.constructor&&n===h&&t.constructor.resolve===g?S(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,m()):e(n)?T(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?x(n,i,r,a):r(a);e._subscribers.length=0}}function O(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function x(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=C(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function P(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(K(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,n=new t(v);return D(n,e),n}function G(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this[re]=P(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&G(),this instanceof H?L(this,e):j())}function z(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=H}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=Y,q=0,W=void 0,X=void 0,$=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new O,ce=new O,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===g){var r=E(e);if(r===h&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===H){var a=new n(v);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},H.all=M,H.race=U,H.resolve=g,H.reject=B,H._setScheduler=a,H._setAsap=o,H._asap=$,H.prototype={constructor:H,then:h,"catch":function(e){return this.then(null,e)}},H.polyfill=z,H.Promise=H,H}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){g&&p&&(g=!1,p.length?h=p.concat(h):v=-1,h.length&&s())}function s(){if(!g){var e=r(o);g=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,g=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,h=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new u(e,t)),1!==h.length||g||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=r.create(),s={action_data:n(18),async_request:n(24),audience_data:n(25),change_data:n(26),cleanup:n(27),cookie_options:n(28),event_data:n(29),event_emitter:n(30),dimension_data:n(31),directive:n(32),global:n(33),global_state:n(34),history:n(35),integration_settings:n(37),layer:n(38),layer_data:n(39),log:n(41),observed_redirect:n(42),pending_events:n(43),performance:n(44),plugins:n(45),provider_status:n(46),pending_redirect:n(47),rum:n(48),sandbox:n(49),session:n(50),tracker_optimizely:n(51),ua_data:n(52),view:n(53),view_data:n(54),visitor:n(55),visitor_attribute_entity:n(56),visitor_events:n(57),visitor_events_manager:n(63),visitor_id:n(64),visitor_bucketing:n(65),xdomain:n(66)};s["group_data"]=n(67),a.registerStores(s),i.forOwn(s,(function(e,t){o.register("stores/"+t,a.getStore(t))})),e.exports=o}),(function(e,t,n){function i(){this.k={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19),o=n(20);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.F),this.on(r.ACTION_EXECUTED,this.V),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},F:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.P.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.P.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.P.actions[u]=n}))}))}))})),this.emitChange())},V:function(e){var t=e.actionId;i.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return i.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.P.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.P.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(21),s=n(22),u=n(9),c=n(23);i.prototype.B=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.G(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.B()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};u.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.j(e.logLevel,e.logMessage,!0)}),this))},i.prototype.j=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.B()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.H(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.j(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.j(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.H([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.j(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.j(s.LogLevel.ERROR,[this.z(),e]),this.j(s.LogLevel.INFO,[e.stack])):this.j(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.j("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.j("GROUPEND",[].slice.call(arguments))},i.prototype.H=function(e){var t=this.z().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.z=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.G=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.REGISTER_ASYNC_DEFERRED,this.Y),this.on(i.RESOLVE_DEFERRED,this.K),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},Y:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},K:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getAudiencesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getAudienceName:function(e){var t=i.find(i.values(this.P),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.F)},getChange:function(e){return this.P[e]},F:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},i.each(a.Lifecycle,i.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.J),this.on(i.SET_COOKIE_AGE,this.Z),this.on(i.SET_COOKIE_AUTO_REFRESH,this.ee)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},J:function(e){this.P.currentDomain=e,this.emitChange()},Z:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},ee:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.P,{pageId:e}))},F:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.te),this.on(a.REMOVE_EMITTER_HANDLER,this.ne)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.P.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},te:function(e){var t=i(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},ne:function(e){var t=!1,n=e.token;r.forOwn(this.P.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.P.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.re)},getAll:function(){return i.cloneDeep(this.P)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},re:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1},this.on(r.DATA_LOADED,this.ae),this.on(r.ACTIVATE,this.oe),this.on(r.RECORD_GLOBAL_DECISION,this.se),this.on(r.SET_DOMCONTENTLOADED,this.ue)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},domContentLoadedHasFired:function(){return this.P.domContentLoaded},oe:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},se:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},ae:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.P,n,t),this.emitChange()}},ue:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ce)},getEffectiveReferrer:function(){return this.P.effectiveReferrer},getEffectiveVariationId:function(){return this.P.effectiveVariationId},ce:function(e){i.isUndefined(e.effectiveReferrer)||(this.P.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.P.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(36);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.le),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.de)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},le:function(){this.P.originalPushState||(this.P.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},de:function(){this.P.originalReplaceState||(this.P.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(20);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F),this.on(r.SET_INTEGRATION_SETTINGS,this.fe)},F:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},fe:function(e){var t=this.P[e.id];t?i.extend(t,e):this.P[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.P))},get:function(e){return i.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(20),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.he),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ge)},getLayerState:function(e,t){if(this.P[e]){var n=this.P[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.P)i.forEach(this.P[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)i.forEach(this.P[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.P={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.P[t];if(i.isUndefined(r))this.P[t]={},this.P[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][n]=e)}}),this)),this.emitChange()},he:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.P[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.P[e.layerId]=n,this.emitChange()},ge:function(e){var t=e.layerId,n=e.pageId||o;return this.P[t]?this.P[t][n]?(this.P[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19),o=n(40);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.F)},F:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[n.id]=n})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return i.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(i.values(this.P.layers),(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){
var t=i.values(this.P.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.P.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={logs:[]},this.on(i.LOG,this.ve)},getLogs:function(){return this.P.logs},ve:function(e){this.P.logs.push(e),this.emitChange()},w:function(){return this.P.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(19);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.me),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this._e)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},me:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},_e:function(){this.P.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ee),this.on(r.REMOVE_PENDING_EVENT,this.ye),this.on(r.LOAD_PENDING_EVENTS,this.Ie)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ee:function(e){i.keys(this.P).length>=o&&this.Se();var t=e.id,n=e.retryCount;this.P[t]&&this.P[t].retryCount===n||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},ye:function(e){delete this.P[e.id],this.emitChange()},Ie:function(e){this.P=e.events,this.Se(),this.emitChange()},Se:function(){for(var e=i.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Te)},Te:function(e){i.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.P[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(20);e.exports={initialize:function(){this.P=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Ae)},Ae:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.be)},getPendingAttributeValue:function(e){if(this.P[e])return this.P[e].pending},be:function(e){this.P[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.me)},isExpectingRedirect:function(){return i.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},me:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.we),this.on(r.RECORD_API_USAGE,this.De),this.on(r.INITIALIZE_CHANGE_METRICS,this.Re),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Ne),this.on(r.RECORD_CHANGE_OVERHEATED,this.Oe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ce)},we:function(e){i.merge(this.P,e),this.emitChange()},De:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},Re:function(){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Ne:function(e){i.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Oe:function(){i.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},Ce:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return i.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.xe)},xe:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(21),o=n(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Le),this.on(r.LOAD_SESSION_STATE,this.Pe)},getState:function(){return i.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},Pe:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Le:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.ke(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Fe),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ve),this.on(r.REGISTER_TRACKER_VISITOR,this.Me),this.on(r.REGISTER_TRACKER_EVENT,this.Ue),this.on(r.REGISTER_TRACKER_DECISION,this.Be),this.on(r.RESET_TRACKER_EVENTS,this.Ge),this.on(r.RESET_TRACKER_STORE,this.ke),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.je),this.on(r.SET_TRACKER_POLLING,this.He),this.on(r.SET_TRACKER_BATCHING,this.ze),this.on(r.SET_TRACKER_SEND_EVENTS,this.Ye),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Ke),this.on(r.SET_TRACKER_DIRTY,this.qe),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.We)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},Ke:function(e){i.isEmpty(this.P.data)||i.isEmpty(e.data)||(this.Fe(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],i.isEmpty(this.P.previousBatches)||i.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},qe:function(e){this.P.isDirty=e,this.emitChange()},Ue:function(e){var t=this.Xe();!i.isEmpty(t.snapshots)&&i.isEmpty(this.P.decisionEvents)||this.$e(),this.Qe().events.push(e.event),this.P.decisions=e.decisions,this.qe(!0)},Be:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.qe(!0)},Me:function(e){i.isEmpty(this.P.data)?this.P.data=e.data:this.Fe(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.qe(!0)},Ve:function(e){this.P.previousBatches.push(e),this.qe(!0)},ke:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Ge:function(){var e=this.Xe();this.P.data.visitors=[e],e.snapshots=[],this.qe(!0)},je:function(){this.P.previousBatches=[],this.qe(!0)},He:function(e){this.P.polling=e,this.emitChange()},ze:function(e){this.P.shouldBatch=e,this.emitChange()},Ye:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.P.data)},getPreviousBatches:function(){return i.cloneDeep(this.P.previousBatches)},Je:function(){return this.P.decisionEvents.slice()},Ze:function(){this.P.decisionEvents=[]},et:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},Qe:function(){return i.last(this.Xe().snapshots)},Xe:function(){return i.last(this.P.data.visitors)},$e:function(){var e=this.Je(),t=this.Xe();t.snapshots.push({decisions:this.et(),events:e}),this.Ze(),this.qe(!0)},Fe:function(){this.P.decisionEvents.length>0&&this.$e()},hasEventsToSend:function(){if(!i.isEmpty(this.P.decisionEvents))return!0;if(!i.isEmpty(this.P.data)){var e=i.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},We:function(e){var t=this.Xe();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.F)},F:function(e){i.isEmpty(this.P)&&(this.P=e.data)},get:function(){return i.cloneDeep(this.P)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(20),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=i.cloneDeep(o),this.on(r.REGISTER_VIEWS,this.tt),this.on(r.SET_VIEW_ACTIVE_STATE,this.nt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.it),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.rt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.at),this.on(r.SET_GLOBAL_TAGS,this.ot),this.on(r.ACTIVATE,this.st),this.on(r.SET_VIEW_BATCHING,this.ze)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.P.viewStates[e]),n=this.P.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.P.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.P.globalTags)},st:function(){this.P.viewStates={},this.emitChange()},tt:function(e){i.each(e.views,i.bind((function(e){var t=e.id;this.P.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},nt:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},it:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},rt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},at:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},ot:function(e){i.extend(this.P.globalTags,e),this.emitChange()},ze:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.P))},getPagesMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.P),{apiName:e}))},getNumberOfPages:function(){return i.keys(this.P).length},getAllViewsForActivationType:function(e){return i.filter(i.values(this.P),{activationType:e})},F:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.ut),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.ct)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e,t){var n=this.P.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.P.metadata[e])},ct:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},ut:function(e){var t,n;i.each(e.attributes,i.bind((function(e){t=this.P.profile,n=this.P.metadata,e.type&&(t=this.P.profile[e.type]=this.P.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,i.bind((function(t,i){e.type&&(n=this.P.metadata[e.type]=this.P.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}),this))}),this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.dt)},getCustomBehavioralAttributes:function(){return i.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.P);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.P[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},dt:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(58).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.F),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ft),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.pt)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},F:function(e){this.P.events=e,this.emitChange()},ft:function(e){this.P.foreignEvents[e.key]=e.value},pt:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(59),s=n(60).getFieldValue,u=n(61);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(62).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ht)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},ht:function(e){this.P[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={randomId:null},this.on(r.SET_VISITOR_ID,this.F)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},F:function(e){i.extend(this.P,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.vt),this.on(r.MERGE_VARIATION_ID_MAP,this.mt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this._t),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Et)},getVariationIdMap:function(){return i.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},vt:function(e){var t=this.P.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=n,this.emitChange())},mt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.P.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},_t:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Et:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.P.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.yt),this.on(r.XDOMAIN_ADD_FRAME,this.It),this.on(r.XDOMAIN_SET_MESSAGE,this.St),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.Tt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.At),this.on(r.XDOMAIN_SET_DISABLED,this.bt)},getMessages:function(){return i.cloneDeep(this.P.messages)},getNextMessageId:function(){return this.P.messages.length},getMessageById:function(e){return this.P.messages[e]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},yt:function(e){this.P.defaultFrame=e},It:function(e){this.P.frames.push(e)},St:function(e){this.P.messages[e.messageId]=e.message},Tt:function(e){this.P.subscribers.push(e.subscriber)},At:function(e){this.P.canonicalOrigins=e.canonicalOrigins},bt:function(e){this.P.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,n){var i=n(69);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){y.dispatch(m.SET_VISITOR_EVENTS,e)}function r(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){y.dispatch(m.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return N.getEvents()}function l(){return O.getBaseMap()}function d(){return O.getEventQueue()}function f(){return O.getLastEvent()}function p(){return O.getCleared()}function h(){return O.getInitialized()}function g(){return i(c().concat(d())),a([]),c().length>x&&(i(c().slice(-x)),!0)}var v=n(2),m=n(7),_=n(21),E=n(70),y=n(9),I=n(20),S=n(71),T=t,A=n(58).Event,b=n(59),w=n(58).EventBase,D=n(85),R=n(16),N=R.get("stores/visitor_events"),O=R.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},x=1e3;t.initialize=function(e,t){if(!h()){T.wt(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){I.debug("Behavior store: adding event",e);var t=T.Dt(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),c(),d()),T.Rt(d())},t.getEvents=function(){return d().length>0&&(g()&&D.sessionize(c()),T.Nt(c()),T.Rt(d())),c()},T.wt=function(e,t){T.Ot(e,t)&&(T.Nt(c()),T.Rt(d())),D.sessionize(c())},T.Ot=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(T.Ct(e)),a(T.Ct(t))):(n=!0,i(T.xt(e)),a(T.xt(t))),d().length>0&&(g(),n=!0),i(T._updateBaseMapAndMaybeDedupe(c())),T._migrateEventBasesAndUpdateStore()&&(n=!0),n},T.xt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=T.Lt(i);t[n]=new A(r,i[b.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Pt();return D.applyMigrations(t)&&(e=!0,r({}),i(T._updateBaseMapAndMaybeDedupe(c())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.kt=function(){return _.now()},T.Dt=function(e){var t,n=e.name,i=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=T.Ft(o);var s=T.kt(),u=new A(o,s,-1);return D.updateSessionId(f(),u),D.updateSessionIndex(f(),u),u},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.Ft(e[t].eventBase);return e},T.Nt=function(e){var t=T.Vt(e);S.persistBehaviorEvents(t)},T.Rt=function(e){var t=T.Vt(e);S.persistBehaviorEventQueue(t)},T.Mt=function(){p()||(i([]),a([]),T.Nt(c()),T.Rt(d()),r({}),o(null),s(!0))},T.Ft=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},T.Pt=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},T.Vt=function(e){for(var t=function(e){var t={};t[b.FIELDS.NAME]=e.getValueOrDefault([b.FIELDS.NAME]),t[b.FIELDS.TYPE]=e.getValueOrDefault([b.FIELDS.TYPE]);var n=e.getValueOrDefault([b.FIELDS.CATEGORY]);v.isUndefined(n)||(t[b.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([b.FIELDS.REVENUE]);v.isUndefined(i)||(t[b.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([b.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[b.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[b.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[b.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},T.Lt=function(e,t){var n=new w(e[b.FIELDS.NAME],e[b.FIELDS.TYPE],e[b.FIELDS.CATEGORY],e[b.FIELDS.OPTIONS],e[b.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},T.Ct=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=T.Lt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new A(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return T.Ct(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return u(U.LAYER_MAP)||{}}function r(e,t){D.dispatch(R.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=K.getPreferredLayerMapString();p(U.LAYER_MAP,e,!0)}function o(e){D.dispatch(R.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=x.now()),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||w.isUndefined(e[r]))try{var a=L.evaluate(t.getter);w.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),w.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){V.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),D.dispatch(R.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){V.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function u(e){var t=h(e),n=F.getItem(t);if(!n){var i=g(e);n=F.getItem(i),f(e,n)}return w.isString(n)&&(n=b(n)),n}function c(e){var t=[];return w.each(e,(function(e){w.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function l(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function d(e){var t=Y.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);
return w.each(F.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:b(F.getItem(e))};n.push(a)}})),n}function f(e,t){var n=h(e),i=g(e);F.setItem(n,t),F.removeItem(i)}function p(e,t,i){try{var r=h(e);i||(t=k.stringify(t));try{F.removeItem(g(e)),F.setItem(r,t)}catch(e){throw V.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(81).setItem(r,t)}catch(e){V.warn("Unable to persist visitor data:",e.message)}}function h(e){var n=Y.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function g(e){var t=Y.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function v(e,t){if(_(e,h(U.EVENT_QUEUE)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:O.deserialize(b(t))});else if(_(e,h(U.EVENTS)))D.dispatch(R.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:O.deserialize(b(t))});else if(_(e,h(U.LAYER_STATES)))D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.map(b(t),l),merge:!0});else if(_(e,h(U.VARIATION_MAP)))D.dispatch(R.MERGE_VARIATION_ID_MAP,{variationIdMap:b(t)});else if(_(e,h(U.VISITOR_PROFILE))){var n=["custom"],i=b(t);w.each(n,(function(e){var t=H.getPlugin(P.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=m(i,e,t.attributionType);if(!w.isEmpty(n)){var r=[];w.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),D.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else V.debug("Attribute type",e,"not used by any audiences")}))}}function m(e,t,n){var i=q.getAttribute(t),r=q.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(w.isEmpty(i))return{data:a,metadata:o};var s={};return w.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===P.AttributionTypes.FIRST_TOUCH&&i>=a||n===P.AttributionTypes.LAST_TOUCH&&a>=i||w.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function _(e,t){return e.indexOf(t)>0}function E(){var e=q.getVisitorProfile(),t=q.getVisitorProfileMetadata(),n=H.getAllPlugins(P.PluginTypes.visitorProfileProviders);if(n){var i=w.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=w.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){N.initializeStore(e,t)}function I(e){D.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:w.filter(e,(function(e){return!!e.decision}))})}function S(e){e=w.extend({lastSessionTimestamp:0,sessionId:null},e),D.dispatch(R.LOAD_SESSION_STATE,e)}function T(){return"oeu"+x.now()+"r"+Math.random()}function A(e){var t,n,i=H.getAllPlugins(P.PluginTypes.visitorProfileProviders),r=w.filter(i,(function(e){return w.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=w.reduce(t,(function(e,t,n){var i=t,a=w.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),D.dispatch(R.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function b(e){try{return k.parse(e)}catch(t){return V.debug("Failed to parse: ",e,t),null}}var w=n(2),D=n(9),R=n(7),N=n(68),O=n(69),C=n(72),x=n(21),L=n(16),P=n(22),k=n(23),F=n(78).LocalStorage,V=n(20),M=n(12).Promise,U=n(22).VisitorStorageKeys,B=L.get("stores/cookie_options"),G=L.get("stores/global"),j=L.get("stores/layer"),H=L.get("stores/plugins"),z=L.get("stores/session"),Y=L.get("stores/visitor_id"),K=L.get("stores/visitor_bucketing"),q=L.get("stores/visitor"),W=L.get("stores/provider_status");t.getIdFromCookies=function(){var e=t.getCurrentId();return e||(e=T()),{randomId:e}},t.getCurrentId=function(){return C.get(P.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return F.keys().length>0},t.setId=function(e){var n=Y.getBucketingId();D.dispatch(R.SET_VISITOR_ID,e),Y.getBucketingId()!==n&&t.loadData();try{t.maybePersistVisitorId(e)}catch(e){if(V.error("Visitor / Unable to persist visitorId, disabling tracking"),D.dispatch(R.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof C.MismatchError)throw V.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return u(U.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){D.dispatch(R.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=K.getVariationIdMapString();p(U.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(U.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){D.dispatch(R.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=w.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=w.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=w.partial(s,t),i=w(e).filter({isAsync:!0}).map(n).filter().value();return w.forEach(w.filter(e,(function(e){return!e.isAsync})),n),i.length>0?M.all(i):M.resolve()},t.loadData=function(){y(u(U.EVENTS)||[],u(U.EVENT_QUEUE)||[]);var e=d(U.LAYER_STATES);w.forEach(e,(function(e){e.item=w.map(e.item,l)})),I(c(e)),S(u(U.SESSION_STATE)||{}),A(u(U.VISITOR_PROFILE)||{});var n=u(U.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){p(U.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(U.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=j.getLayerStates(t.getNamespace());e=w.map(e,(function(e){return w.omit(e,"namespace")})),p(U.LAYER_STATES,e)},t.persistSessionState=function(){p(U.SESSION_STATE,z.getState())},t.persistVisitorProfile=function(){p(U.VISITOR_PROFILE,E())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return w.includes(e,n)&&w.includes(e,"_")&&w.includes(e,"$$")&&w.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){C.remove(P.COOKIES.VISITOR_UUID),e.randomId&&(B.getAutoRefresh()||t.getCurrentId()!==e.randomId?(C.set(P.COOKIES.VISITOR_ID,e.randomId),V.log("Persisting visitorId:",e.randomId)):V.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return q.getAttribute(e)},t.getPendingAttributeValue=function(e){return W.getPendingAttributeValue(e)},t.loadForeignData=function(){w.each(F.keys(),(function(e){var t=F.getItem(e);t&&v(e,t)}))},t.getNamespace=function(){return G.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=C.getAll();w.forEach(w.keys(e),(function(e){0===e.indexOf(P.COOKIES.SESSION_STATE+"$$")&&C.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(g,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return d.dispatch(c.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(73).create,o=n(21),s=n(77),u=n(36),c=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),h=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,u;n=s.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(u=t.safeDecodeURIComponent(i.substring(0,o)),void 0===c[u])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,c){a=r.extend({encodeValue:!0},a),c!==!1&&(c=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(u.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var g=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*g)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=a.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new h('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){t.set(e,null,r.extend({},n,{expires:new Date(0)}),!1)};var g=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(74),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(75)(),a=n(76);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(73).create,s=n(79),u=n(36),c=t.Error=o("StorageError");try{r=u.getGlobal("localStorage")}catch(e){throw new c("Unable to read localStorage: "+e.toString())}if(!r)throw new c("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.Ut=e,this.Bt=t}var r=n(2),a=n(20),o="$$";i.prototype.Gt=function(e){return[this.Bt,e].join(o)},i.prototype.jt=function(e){return e.replace(this.Bt+o,"")},i.prototype.setItem=function(e,t){try{this.Ut.setItem(this.Gt(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Ut.removeItem(this.Gt(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Ut.getItem(this.Gt(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Ut);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Bt)}),this)),r.bind(this.jt,this))},i.prototype.allKeys=function(){return r.keys(this.Ut)},i.prototype.allValues=function(){return r.values(this.Ut)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return u.getGlobal("performance")}var r=n(7),a=n(73).create,o=n(21),s=n(9),u=n(36),c=n(16),l=c.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=g.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(g.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,u=n(7),c=n(16),l=n(9),d=n(82),f=n(73).create,p=n(21),h=n(77),g=n(23),v=n(84),m=n(71),_=n(36),E=n(20),y=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=h.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},h.appendTo(h.querySelector("body"),i)})},t.loadCanonicalOrigins=function(e){l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=m.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){_.addEventListener("message",i);var r=function(){return!!h.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(83);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(82),s=n(16),u=n(9),c=n(20),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),u.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){u.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(c.error("Error in handler for event:",e,r),o.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(36),o=100,s=50;t.pollFor=function(e,t,n){var u,c;return i.isFunction(n)?c=n:(u=n||o,c=function(){return u--,u<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!c()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(58).Event,o=n(21),s=n(59),u=n(58).EventBase;t.CURRENT_SESSION_INDEX=0;var c=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<c},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new u("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),c=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,c="number"!=typeof c?n:c,e=new a(new u("",""),n,c,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var u=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>c&&(u+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,u);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(2),r=n(7),a=n(21),o=n(9),s=n(23),u=n(20),c=n(12).Promise,l=n(87),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new c(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),u.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(21),o=n(16),s=n(77),u=n(22),c=n(9),l=n(20),d=o.get("stores/sandbox"),f=n(36);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(u.SandboxedFunctions,(function(e){return n[e]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(20),a=n(89),o=n(16),s=o.get("stores/plugins"),u=n(7),c=n(22),l=n(9),d=[n(103),n(104),n(123)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(u.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(c.PluginTypes.apiModules,e),t?(l.dispatch(u.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(d.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var l,f;return(l=o.find(a.experiments,{id:u}))?(f=o.find(l.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:l.name,id:l.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],c=e.getLayerStates();s.onlySingleExperiments&&(c=o.filter(c,(function(e){var n=t.get(e.layerId);return n&&d.isSingleExperimentPolicy(n.policy)})));var l=o.map(c,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=f.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(l,r):l;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(90),u=n(91),c=n(92),l=n(94),d=n(40),f=n(95);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var u={},d={},f={},p={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:u,pages:i.getPagesMap(),experiments:d,variations:f,projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION},h=l.dereferenceChangeId;return o.each(n.getAll(),(function(e){c.defineProperty(u,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,h)}),"campaign"),c.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return d[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){c.defineProperty(d,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,h)}),"experiment"),c.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return f[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){c.defineProperty(f,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,h)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=r.getGroupsMap(),p}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,c,l){return{getCampaignStates:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,c,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return c.isGlobalHoldback()},getActivationId:function(){return c.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=f.getExperimentAndVariation();return e&&(e.referrer=f.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,l,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:s.experiment,variation:s.variation};return d.isSingleExperimentPolicy(r.layer.policy)||o.extend(c,{campaign:s.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(96).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(102)}),(function(e,t,n){t.VERSION="0.102.0",t.ENGINE="js"}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var h=u.reduce(p,(function(e,t){return e+t.length}),0),g=d.length-1+(s?1:0),m=g*l.length,_=h+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-_,y=d.length,I=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(E/y));E-=A,y--,I.unshift(T.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),h=d.names,g=d.idStrings,m=u.reduce(g,(function(e,t){return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,E={};E.variation=Math.min(h.variation.length,Math.floor(_/3)),_-=E.variation,E.experiment=Math.min(h.experiment.length,Math.floor(_/2)),_-=E.experiment,E.layer=_;var y={};u.each(h,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return v.isSingleExperimentPolicy(e.policy)||I.push(y.layer+g.layer),I=I.concat([y.experiment+g.experiment,y.variation+g.variation,s]),I.join(l)}var u=n(2),c=n(16),l=":",d="everyone_else",f="holdback",p="treatment",h="",g=n(20),v=n(40);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||h,experiment:t.name||h,variation:n.name||h};if(o&&(s=u.mapValues(s,i)),s.experiment===h&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(g.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=h),e===h)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a);
}}),(function(e,t,n){var i=n(93),r=n(7),a=n(9),o=n(20);t.defineProperty=function(e,t,n,s,u){i(e,t,(function(){var e=["prop",s,u||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(19),s=n(92),u=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return c(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=u.getChange(e);return t?o.safeReference(t):e};var c=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(97).observeSelector,a=n(98).poll,o=n(100).waitForElement,s=n(101).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(_),a),this.observe(t,e)});return function(i){var r=_[i];n.observe(t,e),r.cancelObservation=function(){delete _[i],l.isEmpty(_)&&n.disconnect()}}}return function(e){var t=g.poll(l.partial(a,e));_[e].cancelObservation=function(){t(),delete _[e]}}}function r(e){var t=_[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(_[e]){if(o(_[e]))return 0===_[e].matchedCount&&l.isFunction(_[e].options.onTimeout)&&_[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(_[e].selector);t.length&&(l.each(t,(function(t){t.Ht&&t.Ht[e]||_[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;_[e]&&_[e].callbackQueue.length;){var t=_[e].callbackQueue.shift();if(u(t,e),_[e].matchedCount=_[e].matchedCount+1,_[e].callback(t),_[e]&&_[e].options.once)return void r(e)}}function u(e,t){e.Ht||(e.Ht={}),e.Ht[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),p=n(77),h=(n(22),n(9),n(5).generate),g=n(98),v=n(36),m=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),_={},E=function(e){(E=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=h();return n=l.merge({},m,n||{}),_[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},E(i),v.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(22),n(9),n(5).generate),u=n(36),c=n(99).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=c),l[t]||(l[t]={callbacks:{},id:u.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(97).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(98).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(83);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(104);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(7),a=n(88),o=n(89),s=n(105),u=n(22),c=n(106),l=n(113),d=n(6),f=n(73).create,p=n(21),h=n(114),g=n(83),v=n(9),m=n(23),_=n(20),E=n(117),y=n(118),I=n(71),S=n(81),T=n(16),A=T.get("stores/dimension_data"),b=T.get("stores/view_data"),w=T.get("stores/visitor_id"),D=T.get("stores/layer_data"),R=T.get("stores/directive"),N=86400,O=90,C=t.ApiListenerError=f("ApiListenerError");t.event=function(e){y.updateAllViewTags();var t=function(){var t=c.trackCustomEvent(e.eventName,e.tags);t?_.log("API / Tracking custom event:",e.eventName,e.tags):_.log("API / Not tracking custom event:",e.eventName)};w.getBucketingId()?t():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=b.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?y.activateViaAPI(t,e.tags):(y.deactivate(t),_.log("API / Deactivated Page",y.description(t)))};w.getBucketingId()?i():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){y.setGlobalTags(e.tags)},t.user=function(e){_.log("API / Setting visitor attributes:",e.attributes),i.each(e.attributes,(function(e,t){var n,i=t,a="custom",o=A.getById(t)||A.getByApiName(t);o&&(i=o.id,n=o.segmentId||o.id);var s=function(){v.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:a,metadata:{lastModified:p.now()}}]})};w.getBucketingId()?s():v.dispatch(r.ADD_CLEANUP_FN,{lifecycle:u.Lifecycle.postVisitorProfileLoad,cleanupFn:s})}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;h.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<O&&(_.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",O,", setting to minimum."),t=O),_.log("API / Setting cookie age to",t,"days."),v.dispatch(r.SET_COOKIE_AGE,t*N)},t.extendCookieLifetime=function(e){e=i.extend({isEnabled:!0},e),_.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),v.dispatch(r.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){_.log("API / Setting cookie domain to",e.cookieDomain),v.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);_.log("API / Disabling tracking"),v.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else _.log("API / Disabling everything"),v.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),_.setLogMatcher(n),_.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(o[t]||a.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');E.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;d.makeAsyncRequest(t),d.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new C(e)}},g.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");g.off(e.token)},t.load=function(e){e.data=i.extend({},e.data),s.normalizeClientData(e.data),v.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");v.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=D.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=D.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);I.updateVariationIdMap(r,e.experimentId,a),w.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+m.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.loadCanonicalOrigins(e.canonicalOrigins)},t.activate=function(){R.shouldActivate()?l.emitActivateEvent():_.debug("Not activating.")},t.sendEvents=function(){l.emitSendEvents()},t.holdEvents=function(){l.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(22);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=P.description(t),i=X.isExpectingRedirect(),r=X.getLayerId();if(i&&r===t.id){var a=B.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,_(a,[B.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=B.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,_(a,[B.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r){var a=q.get(t.layerId),o=P.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()}),i=J.getByApiName(e),r=i&&i.pageId?h(i):z.getActiveViewTags(),a=y.extend({},r,t),o=i&&i.category?i.category:N.OTHER;return y.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:z.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:N.OTHER,r=h(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:K.getLayerStatesForAnalytics()});return y.extend(e,{eventTags:{}})}function c(e,t,n){var i=q.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=V.getReferrer()||D.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:b.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientVersion:A.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:A.ENGINE,anonymizeIP:y.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),userFeatures:g(n),layerStates:K.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:b.now(),revision:j.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),visitorId:Z.getRandomId(),decision:t,decisionTicket:n,userFeatures:g(i),layerStates:K.getLayerStatesForAnalytics()}}function f(e){var t={eventId:G.generate(),timestamp:b.now(),revision:j.getRevision(),clientEngine:A.ENGINE,clientVersion:A.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),visitorId:Z.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:g(e.visitorProfile)};return t}function p(e){var t=z.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function h(e){var t={};return e.pageId?p(e.pageId):t}function g(e){var t=Y.getAllPlugins(R.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function m(e,t){var n=[];return y.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function _(e,t,n){var i=E(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),y.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function E(e,t){var n=[];return y.each(Y.getAllPlugins(R.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(7),S=n(82),T=n(68),A=n(90),b=n(21),w=n(16),D=n(77),R=n(22),N=n(70),O=n(83),C=n(107),x=n(108),L=n(9),P=n(109),k=n(20),F=(n(80),n(12).Promise),V=n(95),M=n(110),U=n(112),B=n(111),G=n(5),j=w.get("stores/global"),H=w.get("stores/session"),z=w.get("stores/view"),Y=w.get("stores/plugins"),K=w.get("stores/layer"),q=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:x.CUSTOM,category:n.eventCategory,tags:y.omit(n.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:x.CUSTOM,tags:y.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return T.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=q.get(e.layerId),a=G.generate();L.dispatch(I.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(ee){o=c(a,e,t);var s=X.isExpectingRedirect(),u=X.getLayerId();if(s&&u===n.id){M.persist(o,ee);var d=P.description(n);k.log("Relaying decision for redirect Campaign",d,P.description(n))}}if(!Q.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",P.description(n));var f=$.getVisitorProfile();if(ee){var p=l(o,e.isLayerHoldback,f);i(p,n),r(a,e,t,f,!0)}else r(a,e,t,f,!1)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return F.resolve();if(W.hasTracked())return F.resolve();var e=W.get();if(!e)return F.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=B.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,_(i,[B.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new F(function(e,t){var n=O.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),O.off(n)}})}),a=U.makeTimeoutPromise(ne);return F.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=B.TrackLayerDecisionTimingFlags.postRedirectPolicy,_(B.TrackLayerDecisionTimingFlags.postRedirectPolicy,[B.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return _(B.TrackLayerDecisionTimingFlags.postRedirectPolicy,[B.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(I.REGISTER_TRACKED_REDIRECT_DATA),F.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return T.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=z.getViewState(e.id);if(!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:x.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(T.addEvent(i),L.dispatch(I.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(21),o=n(16),s=n(9),u=o.get("stores/global"),c=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:a.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return m.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}m.debug("Relay / Setting redirect relay cookie:",t);try{f.set(g.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){m.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(g.COOKIES.REDIRECT,!1);if(e){m.log("Relay / Found redirect cookie:",e);var t=o(e);if(!t.visitorId){m.warn("Relay / Missing required field visitorId, attempting to load from VISITOR_ID cookie");var n=f.get(g.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null}return t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void m.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=T[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void m.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return m.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=E.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){m.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;v.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),v.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),v.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(72),p=n(82),h=n(16),g=n(22),v=n(9),m=n(20),_=n(111),E=h.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],S={},T={};l.forEach(I,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===_.RedirectRelayMedia.COOKIE?i(e):m.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(I,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void m.error("Relay / Observed redirect data with missing fields:",t):(v.dispatch(d.LOAD_REDIRECT_DATA,e),v.dispatch(d.ADD_CLEANUP_FN,{lifecycle:g.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(e)}}),e)}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(36);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(83),u=n(107),c=n(92),l=n(94);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};c.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:u.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};c.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:O.isMutationObserverAPISupported()})}function a(){var e=O.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&O.alert("true"===n?i:r)}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function u(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(C.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e});
}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=O.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(C.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function h(){var e=S.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(C.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function g(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=N.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function m(){var e=R.getQueryParamValue(C.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function _(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),y=n(7),I=n(82),S=n(72),T=n(73).create,A=n(22),b=n(9),w=n(20),D=t.JSONParseError=T("JSONParseError"),R=n(115),N=n(23),O=n(36),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){_(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),h(),g(),v(),m()};var x=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*x},!0)):S.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(116),r=n(36);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(36);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(22),s=n(83),u=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=g.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(113),s=n(119),u=n(21),c=n(16),l=n(22),d=n(108),f=n(9),p=n(20),h=n(120),g=c.get("stores/plugins"),v=c.get("stores/view"),m=c.get("stores/view_data"),_=c.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=h.getTagValue(t)}catch(e){e instanceof h.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(g.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=m.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var a=[];r.each(e,(function(e){var r=v.getViewState(e.id),s=t.createViewTicket();if(r.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,s)||t.deactivate(e)}catch(n){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(!t.hasValidStaticConditions(e,s))return void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){p.error("Page / Error evaluating whether to activate page ",t.description(e),n)}a.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n});var u=_.getByPageId(e.id);i(u,!0)}})),r.isEmpty(a)||o.emitViewsActivated({views:a})},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=g.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var i=s.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return p.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),c.groupCollapsed('Condition / Applying operator "'+i+'" with args',u.stringify(r));try{n=d[i](r,t),c.debug("Condition / Result:",n)}finally{c.groupEnd()}return n}return n=t(e),c.debug("Condition / Evaluated:",u.stringify(e),":",n),n}var s=n(2),u=n(23),c=n(20),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(22).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(121),t.Error=n(122).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(73).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(125))}),(function(e,t,n){n(36);e.exports=n(126)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-23T17:34Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=q.type(e);return"function"!==n&&!q.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(q.isFunction(t))return q.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return q.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(te.test(t))return q.filter(t,e,n);t=q.filter(t,e)}return q.grep(e,(function(e){return q.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=ce[e]={};return q.each(e.match(ue)||[],(function(e,n){t[n]=!0})),t}function l(){ie.addEventListener?(ie.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(ie.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(ie.addEventListener||"load"===event.type||"complete"===ie.readyState)&&(l(),q.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(he,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:pe.test(n)?q.parseJSON(n):n)}catch(e){}q.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!q.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function h(e,t,n,i){if(q.acceptData(e)){var r,a,o=q.expando,s=e.nodeType,u=s?q.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=V.pop()||q.guid++:o),u[c]||(u[c]=s?{}:{toJSON:q.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=q.extend(u[c],t):u[c].data=q.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[q.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[q.camelCase(t)])):r=a,r}}function g(e,t,n){if(q.acceptData(e)){var i,r,a=e.nodeType,o=a?q.cache:e,s=a?e[q.expando]:q.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){q.isArray(t)?t=t.concat(q.map(t,q.camelCase)):t in i?t=[t]:(t=q.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!q.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?q.cleanData([e],!0):Y.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function m(){return!1}function _(){try{return ie.activeElement}catch(e){}}function E(e){var t=be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==fe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==fe?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||q.nodeName(i,t)?a.push(i):q.merge(a,y(i,t));return void 0===t||t&&q.nodeName(e,t)?q.merge([e],a):a}function I(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function S(e,t){return q.nodeName(e,"table")&&q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function T(e){return e.type=(null!==q.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Fe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)q._data(n,"globalEval",!t||q._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&q.hasData(e)){var n,i,r,a=q._data(e),o=q._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)q.event.add(t,n,s[n][i])}o.data&&(o.data=q.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!Y.noCloneEvent&&t[q.expando]){r=q._data(t);for(i in r.events)q.removeEvent(t,i,r.handle);t.removeAttribute(q.expando)}"script"===n&&t.text!==e.text?(T(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),Y.html5Clone&&e.innerHTML&&!q.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=q(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:q.css(r[0],"display");return r.detach(),a}function N(e){var t=ie,n=ze[e];return n||(n=R(e,t),"none"!==n&&n||(Ge=(Ge||q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ge[0].contentWindow||Ge[0].contentDocument).document,t.write(),t.close(),n=R(e,t),Ge.detach()),ze[e]=n),n}function O(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=tt.length;r--;)if(t=tt[r]+n,t in e)return t;return i}function x(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=q._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&me(i)&&(a[o]=q._data(i,"olddisplay",N(i.nodeName)))):(r=me(i),(n&&"none"!==n||!r)&&q._data(i,"olddisplay",r?n:q.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function L(e,t,n){var i=Qe.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function P(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=q.css(e,n+ve[a],!0,r)),i?("content"===n&&(o-=q.css(e,"padding"+ve[a],!0,r)),"margin"!==n&&(o-=q.css(e,"border"+ve[a]+"Width",!0,r))):(o+=q.css(e,"padding"+ve[a],!0,r),"padding"!==n&&(o+=q.css(e,"border"+ve[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=je(e),o=Y.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=He(e,t,a),(r<0||null==r)&&(r=e.style[t]),Ke.test(r))return r;i=o&&(Y.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(o?"border":"content"),i,a)+"px"}function F(e,t,n,i){var r;if(q.isArray(t))q.each(t,(function(t,r){n||pt.test(e)?i(e,r):F(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==q.type(t))i(e,t);else for(r in t)F(e+"["+r+"]",t[r],n,i)}var V=[],M=V.slice,U=V.concat,B=V.push,G=V.indexOf,j={},H=j.toString,z=j.hasOwnProperty,Y={},K="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",q=function(e,t){return new q.fn.init(e,t)},W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,X=/^-ms-/,$=/-([\da-z])/gi,Q=function(e,t){return t.toUpperCase()};q.fn=q.prototype={jquery:K,constructor:q,selector:"",length:0,toArray:function(){return M.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:M.call(this)},pushStack:function(e){var t=q.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return q.each(this,e,t)},map:function(e){return this.pushStack(q.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(M.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:V.sort,splice:V.splice},q.extend=q.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||q.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(q.isPlainObject(n)||(t=q.isArray(n)))?(t?(t=!1,a=e&&q.isArray(e)?e:[]):a=e&&q.isPlainObject(e)?e:{},o[i]=q.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},q.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===q.type(e)},isArray:Array.isArray||function(e){return"array"===q.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!q.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==q.type(e)||e.nodeType||q.isWindow(e))return!1;try{if(e.constructor&&!z.call(e,"constructor")&&!z.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(Y.ownLast)for(t in e)return z.call(e,t);for(t in e);return void 0===t||z.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?j[H.call(e)]||"object":typeof e},globalEval:function(e){e&&q.trim(e)&&(n.execScript||function(e){n["eval"].call(n,e)})(e)},camelCase:function(e){return e.replace(X,"ms-").replace($,Q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(W,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?q.merge(n,"string"==typeof e?[e]:e):B.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(G)return G.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return U.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),q.isFunction(e))return n=M.call(arguments,2),i=function(){return e.apply(t||this,n.concat(M.call(arguments)))},i.guid=e.guid=e.guid||q.guid++,i},now:function(){return+new Date},support:Y}),q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){j["[object "+t+"]"]=t.toLowerCase()}));var J=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,h,g;if((t?t.ownerDocument||t:B)!==x&&C(t),t=t||x,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&P){if(11!==s&&(r=_e.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);h=Ee.test(e)&&l(t.parentNode)||t,g=c.join(",")}if(g)try{return J.apply(n,h.querySelectorAll(g)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=x.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)S.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||q)-(~e.sourceIndex||q);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=j++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[G,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===G&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function g(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function m(e,t,n,r,a,o){return r&&!r[U]&&(r=m(r)),a&&!a[U]&&(a=m(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],h=o.length,m=i||g(t||"*",s.nodeType?[s]:s,[]),_=!e||!i&&t?m:v(m,f,e,s,u),E=n?a||(i?e:h||r)?[]:o:_;if(n&&n(_,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(_[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(_[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(h,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function _(e){for(var t,n,i,r=e.length,a=S.relative[e[0].type],o=a||S.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=S.relative[e[s].type])l=[p(h(l),n)];else{if(n=S.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!S.relative[e[i].type];i++);return m(s>1&&h(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&_(e.slice(s,i)),i<r&&_(e=e.slice(i)),i<r&&f(e))}l.push(n)}return h(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,h="0",g=i&&[],m=[],_=R,E=i||a&&S.find["TAG"]("*",c),y=G+=null==_?1:Math.random()||.1,I=E.length;for(c&&(R=o!==x&&o);h!==I&&null!=(l=E[h]);h++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(G=y)}r&&((l=!f&&l)&&p--,i&&g.push(l))}if(p+=h,r&&h!==p){for(d=0;f=n[d++];)f(g,m,o,s);if(i){if(p>0)for(;h--;)g[h]||m[h]||(m[h]=$.call(u));m=v(m)}J.apply(u,m),c&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(G=y,R=_),g};return r?i(o):o}var y,I,S,T,A,b,w,D,R,N,O,C,x,L,P,k,F,V,M,U="sizzle"+1*new Date,B=e.document,G=0,j=0,H=n(),z=n(),Y=n(),K=function(e,t){return e===t&&(O=!0),0},q=1<<31,W={}.hasOwnProperty,X=[],$=X.pop,Q=X.push,J=X.push,Z=X.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Se=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Te=function(){C()};try{J.apply(X=Z.call(B.childNodes),B.childNodes),X[B.childNodes.length].nodeType}catch(e){J={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},C=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:B;return i!==x&&9===i.nodeType&&i.documentElement?(x=i,L=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),P=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=me.test(i.getElementsByClassName),I.getById=r((function(e){return L.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(S.find["ID"]=function(e,t){if("undefined"!=typeof t.getElementById&&P){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){return e.getAttribute("id")===t}}):(delete S.find["ID"],S.filter["ID"]=function(e){var t=e.replace(Ie,Se);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),S.find["TAG"]=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},S.find["CLASS"]=I.getElementsByClassName&&function(e,t){if(P)return t.getElementsByClassName(e)},F=[],k=[],(I.qsa=me.test(i.querySelectorAll))&&(r((function(e){L.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=me.test(V=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&r((function(e){I.disconnectedMatch=V.call(e,"div"),V.call(e,"[s!='']:x"),F.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),F=F.length&&new RegExp(F.join("|")),t=me.test(L.compareDocumentPosition),M=t||me.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},K=t?function(e,t){if(e===t)return O=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===B&&M(B,e)?-1:t===i||t.ownerDocument===B&&M(B,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return O=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:N?ee(N,e)-ee(N,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===B?-1:c[r]===B?1:0},i):x},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==x&&C(e),n=n.replace(de,"='$1']"),I.matchesSelector&&P&&(!F||!F.test(n))&&(!k||!k.test(n)))try{var i=V.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,x,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==x&&C(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==x&&C(e);var n=S.attrHandle[t.toLowerCase()],i=n&&W.call(S.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==i?i:I.attributes||!P?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(O=!I.detectDuplicates,N=!I.sortStable&&e.slice(0),e.sort(K),O){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return N=null,e},T=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},S=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Se),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Se),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Se).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=H[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&H(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,h,g=a!==o?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),_=!u&&!s;if(v){if(a){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[o?v.firstChild:v.lastChild],o&&_){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===G&&c[1],f=c[0]===G&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[g]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[G,p,f];break}}else if(_&&(c=(t[U]||(t[U]={}))[e])&&c[0]===G)f=c[1];else for(;(d=++p&&d&&d[g]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++f||(_&&((d[U]||(d[U]={}))[e]=[G,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Se),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Se).toLowerCase(),function(t){var n;do if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===x.activeElement&&(!x.hasFocus||x.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!S.pseudos["empty"](e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},S.pseudos["nth"]=S.pseudos["eq"];for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})S.pseudos[y]=u(y);return d.prototype=S.filters=S.pseudos,S.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=z[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=S.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in S.filter)!(r=he[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=Y[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=_(t[n]),a[U]?i.push(a):r.push(a);a=Y(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&P&&S.relative[a[1].type]){if(t=(S.find["ID"](o.matches[0].replace(Ie,Se),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=he["needsContext"].test(e)?0:a.length;r--&&(o=a[r],!S.relative[s=o.type]);)if((u=S.find[s])&&(i=u(o.matches[0].replace(Ie,Se),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!P,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(K).join("")===U,I.detectDuplicates=!!O,C(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(x.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);q.find=J,q.expr=J.selectors,q.expr[":"]=q.expr.pseudos,q.unique=J.uniqueSort,q.text=J.getText,q.isXMLDoc=J.isXML,q.contains=J.contains;var Z=q.expr.match.needsContext,ee=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,te=/^.[^:#\[\.,]*$/;q.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?q.find.matchesSelector(i,e)?[i]:[]:q.find.matches(e,q.grep(t,(function(e){return 1===e.nodeType})))},q.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(q(e).filter((function(){for(t=0;t<r;t++)if(q.contains(i[t],this))return!0})));for(t=0;t<r;t++)q.find(e,i[t],n);return n=this.pushStack(r>1?q.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Z.test(e)?q(e):e||[],!1).length}});var ne,ie=n.document,re=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ae=q.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:re.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ne).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof q?t[0]:t,q.merge(this,q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),ee.test(n[1])&&q.isPlainObject(t))for(n in t)q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=ie.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return ne.find(e);this.length=1,this[0]=i}return this.context=ie,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):q.isFunction(e)?"undefined"!=typeof ne.ready?ne.ready(e):e(q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),q.makeArray(e,this))};ae.prototype=q.fn,ne=q(ie);var oe=/^(?:parents|prev(?:Until|All))/,se={children:!0,contents:!0,next:!0,prev:!0};q.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!q(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),q.fn.extend({has:function(e){var t,n=q(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(q.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=Z.test(e)||"string"!=typeof e?q(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&q.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?q.unique(a):a)},index:function(e){return e?"string"==typeof e?q.inArray(this[0],q(e)):q.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(q.unique(q.merge(this.get(),q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return q.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return q.dir(e,"nextSibling")},prevAll:function(e){return q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return q.dir(e,"previousSibling",n)},siblings:function(e){return q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return q.sibling(e.firstChild)},contents:function(e){return q.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:q.merge([],e.childNodes)}},(function(e,t){q.fn[e]=function(n,i){var r=q.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=q.filter(i,r)),this.length>1&&(se[e]||(r=q.unique(r)),oe.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var ue=/\S+/g,ce={};q.Callbacks=function(e){e="string"==typeof e?ce[e]||c(e):q.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){q.each(n,(function(n,i){var r=q.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&q.each(arguments,(function(e,n){for(var i;(i=q.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?q.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},q.extend({Deferred:function(e){var t=[["resolve","done",q.Callbacks("once memory"),"resolved"],["reject","fail",q.Callbacks("once memory"),"rejected"],["notify","progress",q.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return q.Deferred((function(n){q.each(t,(function(t,a){var o=q.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?q.extend(e,i):i}},r={};return i.pipe=i.then,q.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=M.call(arguments),o=a.length,s=1!==o||e&&q.isFunction(e.promise)?o:0,u=1===s?e:q.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?M.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&q.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var le;q.fn.ready=function(e){return q.ready.promise().done(e),this},q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?q.readyWait++:q.ready(!0)},ready:function(e){if(e===!0?!--q.readyWait:!q.isReady){if(!ie.body)return setTimeout(q.ready);q.isReady=!0,e!==!0&&--q.readyWait>0||(le.resolveWith(ie,[q]),q.fn.triggerHandler&&(q(ie).triggerHandler("ready"),q(ie).off("ready")))}}}),q.ready.promise=function(e){if(!le)if(le=q.Deferred(),"complete"===ie.readyState)setTimeout(q.ready);else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{ie.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&ie.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!q.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),q.ready()}})()}return le.promise(e)};var de,fe="undefined";for(de in q(Y))break;Y.ownLast="0"!==de,Y.inlineBlockNeedsLayout=!1,q((function(){var e,t,n,i;n=ie.getElementsByTagName("body")[0],n&&n.style&&(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==fe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",Y.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=ie.createElement("div");if(null==Y.deleteExpando){Y.deleteExpando=!0;try{delete e.test}catch(e){Y.deleteExpando=!1}}e=null})(),q.acceptData=function(e){var t=q.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var pe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,he=/([A-Z])/g;q.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?q.cache[e[q.expando]]:e[q.expando],!!e&&!p(e)},data:function(e,t,n){return h(e,t,n)},removeData:function(e,t){return g(e,t)},_data:function(e,t,n){return h(e,t,n,!0)},_removeData:function(e,t){return g(e,t,!0)}}),q.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=q.data(a),1===a.nodeType&&!q._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=q.camelCase(i.slice(5)),f(a,i,r[i])));q._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){q.data(this,e)})):arguments.length>1?this.each((function(){q.data(this,e,t)})):a?f(a,e,q.data(a,e)):void 0},removeData:function(e){return this.each((function(){q.removeData(this,e)}))}}),q.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=q._data(e,t),n&&(!i||q.isArray(n)?i=q._data(e,t,q.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=q.queue(e,t),i=n.length,r=n.shift(),a=q._queueHooks(e,t),o=function(){q.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q._data(e,n)||q._data(e,n,{empty:q.Callbacks("once memory").add((function(){q._removeData(e,t+"queue"),q._removeData(e,n)}))})}}),q.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?q.queue(this[0],e):void 0===t?this:this.each((function(){var n=q.queue(this,e,t);q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&q.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){q.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=q.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=q._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var ge=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ve=["Top","Right","Bottom","Left"],me=function(e,t){return e=t||e,"none"===q.css(e,"display")||!q.contains(e.ownerDocument,e)},_e=q.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===q.type(n)){r=!0;for(s in n)q.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,q.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(q(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Ee=/^(?:checkbox|radio)$/i;!(function(){var e=ie.createElement("input"),t=ie.createElement("div"),n=ie.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",Y.leadingWhitespace=3===t.firstChild.nodeType,Y.tbody=!t.getElementsByTagName("tbody").length,Y.htmlSerialize=!!t.getElementsByTagName("link").length,Y.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),Y.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,Y.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){Y.noCloneEvent=!1})),t.cloneNode(!0).click()),null==Y.deleteExpando){Y.deleteExpando=!0;try{delete t.test}catch(e){Y.deleteExpando=!1}}})(),(function(){var e,t,i=ie.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(Y[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),Y[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ye=/^(?:input|select|textarea)$/i,Ie=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,Te=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;q.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=q._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=q.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof q===fe||e&&q.event.triggered===e.type?void 0:q.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(ue)||[""],s=t.length;s--;)a=Ae.exec(t[s])||[],p=g=a[1],h=(a[2]||"").split(".").sort(),p&&(c=q.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=q.event.special[p]||{},d=q.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&q.expr.match.needsContext.test(r),namespace:h.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,h,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),q.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,h,g,v=q.hasData(e)&&q._data(e);if(v&&(l=v.events)){for(t=(t||"").match(ue)||[""],c=t.length;c--;)if(s=Ae.exec(t[c])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p){for(d=q.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&g!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),
o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,h,v.handle)!==!1||q.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)q.event.remove(e,p+t[c],n,i,!0);q.isEmptyObject(l)&&(delete v.handle,q._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=z.call(e,"type")?e.type:e,h=z.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Te.test(p+q.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[q.expando]?e:new q.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=h.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:q.makeArray(t,[e]),c=q.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!q.isWindow(i)){for(u=c.delegateType||p,Te.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(q._data(s,"events")||{})[e.type]&&q._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&q.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&q.acceptData(i)&&o&&i[p]&&!q.isWindow(i)){l=i[o],l&&(i[o]=null),q.event.triggered=p;try{i[p]()}catch(e){}q.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=q.event.fix(e);var t,n,i,r,a,o=[],s=M.call(arguments),u=(q._data(this,"events")||{})[e.type]||[],c=q.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=q.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((q.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?q(n,this).index(u)>=0:q.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[q.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Se.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new q.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(q.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=q.extend(new q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?q.event.trigger(r,null,t):q.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},q.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===fe&&(e[i]=null),e.detachEvent(i,n))},q.Event=function(e,t){return this instanceof q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:m):this.type=e,t&&q.extend(this,t),this.timeStamp=e&&e.timeStamp||q.now(),void(this[q.expando]=!0)):new q.Event(e,t)},q.Event.prototype={isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||q.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),Y.submitBubbles||(q.event.special.submit={setup:function(){return!q.nodeName(this,"form")&&void q.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=q.nodeName(t,"input")||q.nodeName(t,"button")?t.form:void 0;n&&!q._data(n,"submitBubbles")&&(q.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),q._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&q.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!q.nodeName(this,"form")&&void q.event.remove(this,"._submit")}}),Y.changeBubbles||(q.event.special.change={setup:function(){return ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(q.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),q.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),q.event.simulate("change",this,e,!0)}))),!1):void q.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ye.test(t.nodeName)&&!q._data(t,"changeBubbles")&&(q.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||q.event.simulate("change",this.parentNode,e,!0)})),q._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return q.event.remove(this,"._change"),!ye.test(this.nodeName)}}),Y.focusinBubbles||q.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){q.event.simulate(t,e.target,q.event.fix(e),!0)};q.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=q._data(i,t);r||i.addEventListener(e,n,!0),q._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=q._data(i,t)-1;r?q._data(i,t,r):(i.removeEventListener(e,n,!0),q._removeData(i,t))}}})),q.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=m;else if(!i)return this;return 1===r&&(o=i,i=function(e){return q().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=q.guid++)),this.each((function(){q.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,q(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each((function(){q.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){q.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return q.event.trigger(e,t,n,!0)}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",we=/ jQuery\d+="(?:null|\d+)"/g,De=new RegExp("<(?:"+be+")[\\s/>]","i"),Re=/^\s+/,Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Oe=/<([\w:]+)/,Ce=/<tbody/i,xe=/<|&#?\w+;/,Le=/<(?:script|style|link)/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^$|\/(?:java|ecma)script/i,Fe=/^true\/(.*)/,Ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:Y.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ue=E(ie),Be=Ue.appendChild(ie.createElement("div"));Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,q.extend({clone:function(e,t,n){var i,r,a,o,s,u=q.contains(e.ownerDocument,e);if(Y.html5Clone||q.isXMLDoc(e)||!De.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(Be.innerHTML=e.outerHTML,Be.removeChild(a=Be.firstChild)),!(Y.noCloneEvent&&Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||q.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],h=0;h<d;h++)if(a=e[h],a||0===a)if("object"===q.type(a))q.merge(p,a.nodeType?[a]:a);else if(xe.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(Oe.exec(a)||["",""])[1].toLowerCase(),l=Me[u]||Me._default,s.innerHTML=l[1]+a.replace(Ne,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!Y.leadingWhitespace&&Re.test(a)&&p.push(t.createTextNode(Re.exec(a)[0])),!Y.tbody)for(a="table"!==u||Ce.test(a)?"<table>"!==l[1]||Ce.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)q.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(q.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),Y.appendChecked||q.grep(y(p,"input"),I),h=0;a=p[h++];)if((!i||q.inArray(a,i)===-1)&&(o=q.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)ke.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=q.expando,u=q.cache,c=Y.deleteExpando,l=q.event.special;null!=(n=e[o]);o++)if((t||q.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?q.event.remove(n,i):q.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==fe?n.removeAttribute(s):n[s]=null,V.push(r))}}}),q.fn.extend({text:function(e){return _e(this,(function(e){return void 0===e?q.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=S(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?q.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||q.cleanData(y(n)),n.parentNode&&(t&&q.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&q.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&q.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return q.clone(this,e,t)}))},html:function(e){return _e(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Le.test(e)&&(Y.htmlSerialize||!De.test(e))&&(Y.leadingWhitespace||!Re.test(e))&&!Me[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ne,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(q.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,q.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=U.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=q.isFunction(f);if(p||c>1&&"string"==typeof f&&!Y.checkClone&&Pe.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=q.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=q.map(y(s,"script"),T),r=a.length;u<c;u++)i=s,u!==d&&(i=q.clone(i,!0,!0),r&&q.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,q.map(a,A),u=0;u<r;u++)i=a[u],ke.test(i.type||"")&&!q._data(i,"globalEval")&&q.contains(o,i)&&(i.src?q._evalUrl&&q._evalUrl(i.src):q.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Ve,"")));s=n=null}return this}}),q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){q.fn[e]=function(e){for(var n,i=0,r=[],a=q(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),q(a[i])[t](n),B.apply(r,n.get());return this.pushStack(r)}}));var Ge,je,He,ze={},Ye=/^margin/,Ke=new RegExp("^("+ge+")(?!px)[a-z%]+$","i"),qe=/^(top|right|bottom|left)$/;n.getComputedStyle?(je=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},He=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||q.contains(e.ownerDocument,e)||(o=q.style(e,t)),Ke.test(o)&&Ye.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):ie.documentElement.currentStyle&&(je=function(e){return e.currentStyle},He=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),Ke.test(o)&&!qe.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=ie.getElementsByTagName("body")[0],t&&t.style&&(e=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(ie.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=ie.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",Y.opacity="0.5"===i.opacity,Y.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===t.style.backgroundClip,Y.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,q.extend(Y,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),q.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var We=/alpha\([^)]*\)/i,Xe=/opacity\s*=\s*([^)]*)/,$e=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+ge+")(.*)$","i"),Je=new RegExp("^([+-])=("+ge+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"},tt=["Webkit","O","Moz","ms"];q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=He(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Y.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=q.camelCase(t),u=e.style;if(t=q.cssProps[s]||(q.cssProps[s]=C(u,s)),o=q.cssHooks[t]||q.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=Je.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(q.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||q.cssNumber[s]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=q.camelCase(t);return t=q.cssProps[s]||(q.cssProps[s]=C(e.style,s)),o=q.cssHooks[t]||q.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=He(e,t,i)),"normal"===a&&t in et&&(a=et[t]),""===n||n?(r=parseFloat(a),n===!0||q.isNumeric(r)?r||0:a):a}}),q.each(["height","width"],(function(e,t){q.cssHooks[t]={get:function(e,n,i){if(n)return $e.test(q.css(e,"display"))&&0===e.offsetWidth?q.swap(e,Ze,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&je(e);return L(e,n,i?P(e,t,i,Y.boxSizing&&"border-box"===q.css(e,"boxSizing",!1,r),r):0)}}})),Y.opacity||(q.cssHooks.opacity={get:function(e,t){return Xe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=q.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===q.trim(a.replace(We,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=We.test(a)?a.replace(We,r):a+" "+r)}}),q.cssHooks.marginRight=O(Y.reliableMarginRight,(function(e,t){if(t)return q.swap(e,{display:"inline-block"},He,[e,"marginRight"])})),q.each({margin:"",padding:"",border:"Width"},(function(e,t){q.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ve[i]+t]=a[i]||a[i-2]||a[0];return r}},Ye.test(e)||(q.cssHooks[e+t].set=L)})),q.fn.extend({css:function(e,t){return _e(this,(function(e,t,n){var i,r,a={},o=0;if(q.isArray(t)){for(i=je(e),r=t.length;o<r;o++)a[t[o]]=q.css(e,t[o],!1,i);return a}return void 0!==n?q.style(e,t,n):q.css(e,t)}),e,t,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){me(this)?q(this).show():q(this).hide()}))}}),q.fn.delay=function(e,t){return e=q.fx?q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=ie.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=ie.createElement("select"),r=n.appendChild(ie.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",Y.getSetAttribute="t"!==t.className,Y.style=/top/.test(i.getAttribute("style")),Y.hrefNormalized="/a"===i.getAttribute("href"),Y.checkOn=!!e.value,Y.optSelected=r.selected,Y.enctype=!!ie.createElement("form").enctype,n.disabled=!0,Y.optDisabled=!r.disabled,e=ie.createElement("input"),e.setAttribute("value",""),Y.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),Y.radioValue="t"===e.value})();var nt=/\r/g;q.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=q.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,q(this).val()):e,null==r?r="":"number"==typeof r?r+="":q.isArray(r)&&(r=q.map(r,(function(e){return null==e?"":e+""}))),t=q.valHooks[this.type]||q.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=q.valHooks[r.type]||q.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(nt,""):null==n?"":n)}}}),q.extend({valHooks:{option:{get:function(e){var t=q.find.attr(e,"value");return null!=t?t:q.trim(q.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(Y.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!q.nodeName(n.parentNode,"optgroup"))){if(t=q(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=q.makeArray(t),o=r.length;o--;)if(i=r[o],q.inArray(q.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),q.each(["radio","checkbox"],(function(){q.valHooks[this]={set:function(e,t){if(q.isArray(t))return e.checked=q.inArray(q(e).val(),t)>=0}},Y.checkOn||(q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var it,rt,at=q.expr.attrHandle,ot=/^(?:checked|selected)$/i,st=Y.getSetAttribute,ut=Y.input;q.fn.extend({attr:function(e,t){return _e(this,q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){q.removeAttr(this,e)}))}}),q.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===fe?q.prop(e,t,n):(1===a&&q.isXMLDoc(e)||(t=t.toLowerCase(),i=q.attrHooks[t]||(q.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=q.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void q.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(ue);if(a&&1===e.nodeType)for(;n=a[r++];)i=q.propFix[n]||n,q.expr.match.bool.test(n)?ut&&st||!ot.test(n)?e[i]=!1:e[q.camelCase("default-"+n)]=e[i]=!1:q.attr(e,n,""),e.removeAttribute(st?n:i)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?q.removeAttr(e,n):ut&&st||!ot.test(n)?e.setAttribute(!st&&q.propFix[n]||n,n):e[q.camelCase("default-"+n)]=e[n]=!0,n}},q.each(q.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=at[t]||q.find.attr;at[t]=ut&&st||!ot.test(t)?function(e,t,i){var r,a;return i||(a=at[t],at[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,at[t]=a),r}:function(e,t,n){if(!n)return e[q.camelCase("default-"+t)]?t.toLowerCase():null}})),ut&&st||(q.attrHooks.value={set:function(e,t,n){return q.nodeName(e,"input")?void(e.defaultValue=t):it&&it.set(e,t,n)}}),st||(it={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},at.id=at.name=at.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},q.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:it.set},q.attrHooks.contenteditable={set:function(e,t,n){it.set(e,""!==t&&t,n)}},q.each(["width","height"],(function(e,t){q.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),Y.style||(q.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var ct=/^(?:input|select|textarea|button|object)$/i,lt=/^(?:a|area)$/i;q.fn.extend({prop:function(e,t){return _e(this,q.prop,e,t,arguments.length>1)},removeProp:function(e){return e=q.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),q.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!q.isXMLDoc(e),a&&(t=q.propFix[t]||t,r=q.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=q.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}}}),Y.hrefNormalized||q.each(["href","src"],(function(e,t){q.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),Y.optSelected||(q.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){q.propFix[this.toLowerCase()]=this})),Y.enctype||(q.propFix.enctype="encoding");var dt=/[\t\r\n\f]/g;q.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=q.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(q.isFunction(e))return this.each((function(t){q(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?q.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):q.isFunction(e)?this.each((function(n){q(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=q(this),a=e.match(ue)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==fe&&"boolean"!==n||(this.className&&q._data(this,"__className__",this.className),this.className=this.className||e===!1?"":q._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(dt," ").indexOf(t)>=0)return!0;return!1}}),q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),q.fn.extend({wrapAll:function(e){if(q.isFunction(e))return this.each((function(t){q(this).wrapAll(e.call(this,t))}));if(this[0]){var t=q(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return q.isFunction(e)?this.each((function(t){q(this).wrapInner(e.call(this,t))})):this.each((function(){var t=q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=q.isFunction(e);return this.each((function(n){q(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){q.nodeName(this,"body")||q(this).replaceWith(this.childNodes)})).end()}}),q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!Y.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||q.css(e,"display"))},q.expr.filters.visible=function(e){return!q.expr.filters.hidden(e)};var ft=/%20/g,pt=/\[\]$/,ht=/\r?\n/g,gt=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;q.param=function(e,t){var n,i=[],r=function(e,t){t=q.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=q.ajaxSettings&&q.ajaxSettings.traditional),q.isArray(e)||e.jquery&&!q.isPlainObject(e))q.each(e,(function(){r(this.name,this.value)}));else for(n in e)F(n,e[n],t,r);return i.join("&").replace(ft,"+")},q.fn.extend({serialize:function(){return q.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=q.prop(this,"elements");return e?q.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!q(this).is(":disabled")&&vt.test(this.nodeName)&&!gt.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=q(this).val();return null==n?null:q.isArray(n)?q.map(n,(function(e){return{name:t.name,value:e.replace(ht,"\r\n")}})):{name:t.name,value:n.replace(ht,"\r\n")}})).get()}}),q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ee.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=q.buildFragment([e],t,r),r&&r.length&&q(r).remove(),q.merge([],i.childNodes))},i=[],r=function(){return q}.apply(t,i),!(void 0!==r&&(e.exports=r));var mt=n.jQuery,_t=n.$;return q.noConflict=function(e){return n.$===q&&(n.$=_t),e&&n.jQuery===q&&(n.jQuery=mt),q},typeof a===fe&&(n.jQuery=n.$=q),q}))}),(function(e,t,n){var i=n(36),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},
i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){var i=n(77),r=n(20),a=n(86);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var u=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:u})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;w.isNumber(e)&&0===me.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),K.dispatch(C.SET_RUM_DATA,{data:{activateDfd:!0}}),ue.setTimeout(L.emitActivateEvent,e)):L.emitActivateEvent()}function r(e){Re.handleError(e.data.error,e.data.metadata)}function a(){w.isArray(window.optimizely)&&(window.optimizely=w.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(e){return w.each(e,(function(e,t){X.setItem(t,e)})),e}function s(){var e=ge.getAccountId(),t="https://a3013110282.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";ce.subscribe(w.bind(X.setItem,X));var i=ce.fetchAll().then((function(e){var t=we.getCanonicalOrigins();if(t){var n=ce.getXDomainUserId(e,t);n&&($.log("Syncing cross-origin visitor randomId:",n),se.maybePersistVisitorId({randomId:n}))}return e})).then(o),r=!!se.getCurrentId(),a=!!r&&se.hasSomeData();return r?a?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor"),te.all([ce.load(t,n)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),r&&!a&&u(!1,e),e})),i.then((function(e){if(se.loadForeignData(),r&&!a){var t=!w.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),u(t)}}),(function(e){throw r&&!a&&($.debug("xd / Failed to load foreign data:",e),u(!1,e)),e})).then((function(){$.log("Loaded visitor data from foreign origins"),L.emitOriginsSyncedEvent()}),(function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),K.dispatch(C.ADD_CLEANUP_FN,{lifecycle:j.Lifecycle.postVisitorProfileLoad,cleanupFn:L.emitOriginsSyncedEvent})}))])}function u(e,t){K.dispatch(C.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function c(e){var t=Ie.getVisitorProfile();return se.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=ye.getAllPlugins(j.PluginTypes.visitorProfileProviders),r=ge.getGlobalHoldbackThreshold(),a=Ie.getVisitorProfile();se.populateLazyVisitorData(i,a);var o=Ae.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=Ie.getVisitorProfile();if(t){var c=be.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&U.isPageIdRelevant(t)?w.map(n,(function(e){return U.createTicket(w.extend({},l,{pageId:e}))})):[U.createTicket(l)]}function d(e){return{bucketingId:Ae.getBucketingId(),preferredLayerId:be.getPreferredLayerMap()[e.id]}}function f(e){var t=me.getAllByPageIds(e),n=he.getForceVariationIds(),i=he.getForceAudienceIds(),r=w.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=ve.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var a=w.map(r.groups,q.description).join(", ");$.log("Groups:",a);var o=w.map(r.individual,W.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=w.map(r.groups,w.partial(p,n,i,e))||[],u=w.map(r.individual,(function(t){var r=w.filter(t.pageIds,w.partial(w.includes,e));return h(n,i,r,t)})),c=s.concat(u);return te.all(c).then((function(t){var n=w.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",w.map(n,W.description).join(", ")),n}))}function p(e,n,i,r){try{var a=d(r),o=U.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",q.description(r),"; reason:",o.reason),te.resolve();var s=me.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),te.resolve();var u=w.filter(s.pageIds,w.partial(w.includes,i));return w.isEmpty(u)?($.debug("Not activating Group",q.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),te.resolve()):t.decideAndExecuteLayerASAP(e,n,u,s)}catch(e){return $.error("Error getting decision for Group",q.description(r),"; ",e),te.reject(e)}}function h(e,t,n,i){return new te(function(r,a){try{_(i,e,t,n,(function(a){w.each(a,(function(r){var a=r.pageId?[r.pageId]:n;$.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){$.error("Error getting decision for Campaign: "+W.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=W.description(e);$.log("Activating Campaign",a,"on Page(s)",i),n.length&&($.log("Applying force audienceIds:",n,"to Campaign",a),r=w.cloneDeep(r),r.audienceIds=n);var o=S(e,r,t),s=!(!t.length&&!n.length),u=A(e,o,s)||[],c=b(u,i);if(v(c,e,o,i),w.forEach(i,(function(){x.trackDecisionEvent(o,r)})),L.emitLayerDecided({layer:e,decisionTicket:r,decision:o}),o.error)throw o.error;return U.isInCohort(o)?void m(c,e,o,i):void $.log("Not activating Campaign: "+W.description(e)+"; not in the cohort because:",o.reason)}function v(e,t,n,i){var r=W.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),w.forEach(e,O.prepareAction)}function m(e,t,n,i){var r=W.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),te.all(w.map(e,(function(e){return O.executePreparedAction(e).then(w.partial(L.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",n,"applied:",e),L.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",n,"because:",e)}))}function _(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=W.relatedAudienceIds(e),o=w.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]);I(o,W.getActivationTimeout(e),(function(){var t=l(o,e,i);w.map(t,(function(t){E(t,o,e)})),r(t)}))}function E(e,t,n){var i=w.map(e.audienceIds,w.bind(de.get,de)),r=w.filter(t,(function(t){return!w.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",W.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return w.each(e,(function(e){t.push(e.name,e)})),t}function I(e,t,n){var i={},r=ye.getAllPlugins(j.PluginTypes.audienceMatchers);w.each(e,(function(e){var t=P.requiredAudienceFields(e,r);w.each(t,(function(e){i[e]=!0}))}));var a=w.reduce(i,(function(e,t,n){if(w.isUndefined(se.getAttribute(n))){var i=se.getPendingAttributeValue(n);w.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ne.firstToResolve(w.map(a,(function(e){return te.resolve(e).then((function(){var e=Ie.getVisitorProfile();if(o=w.filter(o,(function(t){return w.isUndefined(P.isInAudience(e,t,r))})),!w.isEmpty(o))throw new Error("At least one audience is still pending")}))})));te.race([s,new te(function(e,n){ue.setTimeout(n,t)})]).then((function(){$.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),n()}))}function S(e,t,n){var i,r=W.description(e);return i=n.length?U.getDummyLayerDecision(e,n):U.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",i),W.recordLayerDecision(e.id,t,i),i.variationId&&i.experimentId&&se.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&se.updatePreferredLayerMap(e.groupId,e.id),i}function T(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();K.dispatch(C.CLEAR_CLEANUP_FN,{lifecycle:e})}}function A(e,t,n){var i=W.description(e),r="NOT applying changes for Campaign";if(!n&&ge.isGlobalHoldback())return $.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return $.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return $.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return $.log("Got Actions for Campaign:",i,a),a}function b(e,t){return w.filter(e,(function(e){return w.isUndefined(e.pageId)||w.includes(t,e.pageId)}))}var w=n(2),D=n(73).create,R=t.ActivationCodeError=D("ActivationCodeError"),N=t.ProjectJSError=D("ProjectJSError"),O=n(130),C=n(7),x=n(106),L=n(113),P=n(134),k=n(72),F=n(82),V=n(105),M=n(21),U=n(135),B=n(16),G=n(77),j=n(22),H=n(83),z=n(107),Y=n(140),K=n(9),q=n(139),W=n(109),X=n(78).LocalStorage,$=n(20),Q=n(141),J=n(80),Z=n(117),ee=n(84),te=n(12).Promise,ne=n(142),ie=n(110),re=n(112),ae=n(132),oe=n(118),se=n(71),ue=n(36),ce=n(81),B=n(16),le=B.get("stores/session"),de=B.get("stores/audience_data"),fe=B.get("stores/action_data"),pe=B.get("stores/cleanup"),he=B.get("stores/directive"),ge=B.get("stores/global"),ve=B.get("stores/group_data"),me=B.get("stores/layer_data"),_e=B.get("stores/layer"),Ee=B.get("stores/pending_events"),ye=B.get("stores/plugins"),Ie=B.get("stores/visitor"),Se=B.get("stores/view_data"),Te=B.get("stores/view"),Ae=B.get("stores/visitor_id"),be=B.get("stores/visitor_bucketing"),we=B.get("stores/xdomain"),De=n(88),Re=n(143),Ne=1e3,Oe=!1,Ce=1e3,xe=t;t.initialize=function(e){var n=e.clientData;if(V.normalizeClientData(e.clientData),H.on({filter:{type:"error"},handler:r}),K.dispatch(C.DATA_LOADED,{data:n}),$.log("Initialized with DATA:",n),a(),he.isDisabled()||he.shouldOptOut())return void $.log("Controller / Is disabled");G.isReady()?K.dispatch(C.SET_DOMCONTENTLOADED):G.addReadyHandler((function(){K.dispatch(C.SET_DOMCONTENTLOADED)}));var o=!1,u=k.get(j.COOKIES.REDIRECT);if(u){var c=u.match(/^(\d+)\|(.*)/);if(c){$.debug("Found legacy redirect data:",u);var l=c[1],d=c[2];K.dispatch(C.INITIALIZE_STATE,{effectiveVariationId:l,effectiveReferrer:d}),o=!0}}J.time("projectJS");var f=ge.getProjectJS();if(w.isFunction(f))try{Y.apply(f)}catch(e){$.error("Error while executing projectJS: ",e),F.emitError(new N(e))}J.timeEnd("projectJS"),w.each(e.plugins||[],(function(e){try{e(Z)}catch(e){F.emitInternalError(e)}})),w.each(ge.getPlugins()||[],(function(e){try{Y.apply(e,[Z])}catch(e){F.emitError(e)}})),o||ie.load();var p=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Ie.observe(se.persistVisitorProfile),_e.observe(se.persistLayerStates),le.observe(se.persistSessionState),Ee.observe(Q.persistPendingEvents),be.observe(se.persistVisitorBucketingStore),H.off(p)}});H.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),H.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var h=Q.getPendingEvents();if(h&&(K.dispatch(C.LOAD_PENDING_EVENTS,{events:h}),Q.retryPendingEvents(h)),H.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),L.emitInitializedEvent(),!he.shouldActivate())return te.resolve();var g=[],v=s();if(g.push(v),we.getCanonicalOrigins()){var m=re.makeTimeoutPromise(Ce);te.race([v,m])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Re.handleError)}else i();return te.all(g)},t.activate=function(){try{var e=[];$.log("Activated client"),w.forEach(Te.getActiveViewStates(),(function(e){oe.deactivate(Se.get(e.id))})),T(j.Lifecycle.preActivate);var t=M.now();K.dispatch(C.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Se.getAll();oe.registerViews(n),se.setId(se.getIdFromCookies()),e.push(x.trackPostRedirectDecisionEvent()),K.dispatch(C.MERGE_VARIATION_ID_MAP,{variationIdMap:se.getVariationIdMap()}),K.dispatch(C.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:se.getPreferredLayerMap()}),T(j.Lifecycle.postVisitorProfileLoad),e.push(c(ye.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var i=l(),r=U.decideGlobal(i);$.log("Made global decision",i,"->",r),K.dispatch(C.RECORD_GLOBAL_DECISION,r);var a=x.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=xe.setUpViewActivation(n);return Oe?oe.activateMultiple(o):w.each(o,(function(e){oe.activateMultiple([e])})),T(j.Lifecycle.postViewsActivated),T(j.Lifecycle.postActivate),L.emitActivatedEvent(),te.all(e).then((function(){H.emit({type:z.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),te.reject(e)}},xe.setUpViewActivation=function(e){var t=[];return w.each(e,(function(e){oe.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===j.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",oe.description(e)),xe.activateViewOnCallback(e)):e.activationType===j.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",oe.description(e)),ee.pollFor(w.partial(Y.apply,e.activationCode),null,w.partial(ae.isTimedOut,M.now())).then((function(){oe.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==j.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},xe.activateViewOnCallback=function(e){var t=function(t){var n=w.extend({},t,{pageName:e.apiName,type:"page"});De.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Te.isViewActive(e.id)}});try{Y.apply(e.activationCode,[t,n])}catch(t){var i=new R("("+t.toString()+") in activationCode for "+oe.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=w.map(n,"id");try{if(!Ae.getBucketingId())throw new Error("View activated with no visitorId set");var r=f(i)["catch"](F.emitError);return t=te.all(w.map(n,(function(e){var t=function(){oe.parseViewTags(e);var t=x.trackViewActivation(e);t?$.log("Tracked activation for Page",oe.description(e),t):$.log("Not Tracking activation for Page",oe.description(e))};return G.isReady()?te.resolve(t()):ee.pollFor(G.isReady,Ne).then(t)}))),te.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);w.each(n,(function(e){var n=fe.getActionState(e);n&&(w.each(n,(function(e,n){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),K.dispatch(C.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:De.get,push:De.push},t=window.optimizely;w.isArray(t)&&w.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.decideAndExecuteLayerASAP=h}),(function(e,t,n){function i(e,t,n){var i=m.getActionState(t.id);if(!i)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=m.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:y.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=_.getChange(t);if(!c){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new h(function(d){var f=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var v="change_"+c.src,E=u.makeAsyncRequest(v,(function(){return g.addScriptAsync("https://cdn.optimizely.com/public/3013110282/data"+c.src,(function(){u.resolveRequest(v)}))})).then((function(){var e=_.getChange(c.id);e||s.emitError(new S("Failed to load async change from src: "+c.src)),i(e,n,l.now())}));f.push(E)}h.all(f).then((function(){var e=l.now(),i=m.getChangeApplier(t,n.id);return i?(p.debug("Action / Applying change:",c),i.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",c),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",c,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(82),u=n(6),c=n(73).create,l=n(21),d=n(16),f=n(9),p=n(20),h=n(12).Promise,g=n(128),v=d.get("stores/global"),m=d.get("stores/action_data"),_=d.get("stores/change_data"),E=d.get("stores/session"),y=n(131),I=n(132);I.initialize();var S=c("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:v.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=_.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=_.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return h.all(n).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(21),a=n(16),o=a.get("stores/plugins"),s=n(22),u=n(20);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(133),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,c=0;c<r.fieldsNeeded.length;c++)if(a=r.fieldsNeeded[c],s=e[a],o.isUndefined(s))return void u.debug("Audience / Required field",a,"for type",i,"has no value");u.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(119),u=n(20);t.isInAudience=function(e,t,n){var i=r(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,i)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){function i(e,t){m.debug("Decision / Deciding layer for group: ",g.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)m.debug("Decision / Using preferredLayerMap to select layer for group:",g.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(u);return{layerId:null,reason:u}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(h.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(h.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return c.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(82),c=n(134),l=n(136),d=n(137),f=n(138).DecisionError,p=n(16),h=n(22),g=n(139),v=n(109),m=n(20),_=n(40),E=p.get("stores/plugins"),y=p.get("stores/global"),I=p.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){m.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){m.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);n=c.experiment,i=c.variation}else m.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(m.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(m.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(_.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(61),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(136),a=n(119),o=n(138).DecisionError,s=n(20),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,c){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(74),di=__webpack_require__(16),Logger=__webpack_require__(20),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(82),a=n(22),o=n(23),s=n(78).LocalStorage,u=n(20),c=n(86),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(81).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(90),a=n(73).BaseError,o=n(21),s=n(16),u=n(77),c=n(20),l=n(36),d=n(86),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",h=e.message,g=e.stack||null;e instanceof a&&(h instanceof Error?(h=h.message,g=e.message.stack):g=null);var v={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:h,stacktrace:g};t&&(v.metadata=i.reduce(t,(function(e,t,n){return i.isObject(t)||e.push({key:n,value:String(t)}),e}),[])),c.error("Logging error",v),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(83),u=n(107),c=n(36),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=c.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){c.getGlobal(d)||c.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(146))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(148)),e.registerAudienceMatcher("behavior",n(150))}}),(function(e,t,n){var i=n(149);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(69),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(23),a=n(151),o=n(152);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return u.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return u.extend(i,{orderBy:[{field:[c.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(u.isUndefined(e))throw new Error("rule is undefined");if(!u.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(u.isArray(e["filter"])?u.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),u.isArray(e["sort"])?u.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u);
})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],c="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));u.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+c+" is unknown"),u.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?((!u.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):u.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!u.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u=n(2),c={FIELDS:n(59).FIELDS,FIELDS_V0_2:n(59).FIELDS_V0_2},l=n(23),d=n(20),f=n(152);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return u.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),u.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[c.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return u.isArray(e)?{op:"between",args:[{field:[c.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return u.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||u.includes(u.values(c.FIELDS),e)||(n=[c.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",c.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",c.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",c.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&u.each(e.filters,(function(r){var a,o,u=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",c.FIELDS.TIME),o=s.aggregateField("max",c.FIELDS.TIME)),a){var l=u,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,u,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:u.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return u.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(u.each(e["sort"],(function(e){u.includes(["ascending","descending"],e["direction"])&&(u.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=u.filter(u.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&u.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return u.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?u.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):u.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(u.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return u.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[c.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!u.isArray(e)||!u.every(e,u.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=u.keys(c.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),u.includes(r,e[0])?n+" is not supported here":u.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!u.isString(e)&&!u.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!u.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!u.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(u.isArray(t)&&2===t.length&&u.isNumber(t[0])&&u.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(u.isString(t)||u.isArray(t)&&2===t.length&&u.isString(t[0])&&u.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!u.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(22),a=n(20),o=i.bind(a.log,a),s=n(21),u=n(60).getFieldValue,c=n(23),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=u(e,t);return"undefined"==typeof i&&(i=n),i},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},h=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=p(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(h,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},g=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),h=f.join(".");u[h]=p,s.push(encodeURIComponent(h)+"="+encodeURIComponent(c.stringify(p)))}var g=s.join("&");n.hasOwnProperty(g)||(n[g]={fieldValues:u,events:[]}),n[g].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var v=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],u=s["op"];if(u in t.aggregateOperators){var c=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(u,c),d=t.aggregateOperators[u]([c],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+u)}})),r},m=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},_=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l(t,s,0),c=l(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var u=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,c=t.generateAlias(e["op"],u);return c in o||(r.push({op:e["op"],args:e["args"]}),o[c]=!0),{field:[c]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var u=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<u.length;c++)e.hasOwnProperty(u[c])&&(s[u[c]]=e[u[c]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var u=e[t.clause.LIMIT];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],n+1))),r},y=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return h(t,e)}))}))},I=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=I(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return h(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=g(e[t.clause.GROUP_BY],r),s=v(e[t.clause.AGGREGATE],o);r=m(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return h(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=_(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var u=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),u=Number(e[t.clause.OFFSET]));var c;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),c=u+Number(e[t.clause.LIMIT])),(u>0||!i.isUndefined(c))&&(r=r.slice(u,c),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=y(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",n);var i=E(e);if(i.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+i.join("\n"));var o=I(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(154))}}),(function(e,t,n){var i=n(2),r=n(155),a=n(149),o=n(23),s=n(151);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),u=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),c=a.getEvents();return r.evaluate(u,c)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(20),o={FIELDS:n(59).FIELDS},s=n(151),u=n(152);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var c=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=u.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(157)),e.registerAudienceMatcher("first_session",n(158))}}),(function(e,t,n){var i=n(59),r=n(149),a=n(60).getFieldValue,o=n(85).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(160))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(149),d=n(151),f=n(152);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(162)),e.registerVisitorProfileProvider(n(167)),e.registerVisitorProfileProvider(n(168)),e.registerAudienceMatcher("browser_version",n(169))}}),(function(e,t,n){var i=n(163);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(164),a=n(36),o=n(7),s=n(16),u=n(9),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),u.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in u)return e;var t=a.keys(u);return a.find(t,(function(t){var n=u[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(165);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),u=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(u.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:c[u.model]||"unknown",type:r(d,u.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},u={gc:["chrome","chromium","silk","yandex","maxthon"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",h="model",g="name",v="type",m="vendor",_="version",E="architecture",y="console",I="mobile",S="tablet",T="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,u,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<p.length;r++)u=s[++i],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,u):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=u?u.replace(o[1],o[2]):a:this[o[0]]=u?o[1].call(this,u,o[2]):a:4==o.length&&(this[o[0]]=u?o[3].call(this,u.replace(o[1],o[2])):a):this[o]=u?u:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[g,_],[/(opios)[\/\s]+([\w\.]+)/i],[[g,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[g,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[g,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[g,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[g,_],[/(yabrowser)\/([\w\.]+)/i],[[g,"Yandex"],_],[/(puffin)\/([\w\.]+)/i],[[g,"Puffin"],_],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[g,"UCBrowser"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[g,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[g,"WeChat"],_],[/(QQ)\/([\d\.]+)/i],[g,_],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[g,_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[g,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[_,[g,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[_,[g,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[g,/(.+)/,"$1 WebView"],_],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[g,/(.+(?:g|us))(.+)/,"$1 $2"],_],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[g,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[g,_],[/(dolfin)\/([\w\.]+)/i],[[g,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[g,"Chrome"],_],[/(coast)\/([\w\.]+)/i],[[g,"Opera Coast"],_],[/fxios\/([\w\.-]+)/i],[_,[g,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[g,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,g],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[g,"GSA"],_],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[g,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[g,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[g,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[g,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[h,m,[v,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[h,[m,"Apple"],[v,S]],[/(apple\s{0,1}tv)/i],[[h,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,h,[v,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[h,[m,"Amazon"],[v,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[h,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[h,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[h,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,h,[v,I]],[/\(bb10;\s(\w+)/i],[h,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[h,[m,"Asus"],[v,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[h,"Xperia Tablet"],[v,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[h,[m,"Sony"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,h,[v,y]],[/android.+;\s(shield)\sbuild/i],[h,[m,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[h,[m,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[h,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,h,[v,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[h,/_/g," "],[v,I]],[/(nexus\s9)/i],[h,[m,"HTC"],[v,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[h,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,h,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[h,[m,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[h,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[h,[m,"Motorola"],[v,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[h,w.trim],[v,T]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[m,"Samsung"],[v,T]],[/\(dtv[\);].+(aquos)/i],[h,[m,"Sharp"],[v,T]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],h,[v,S]],[/smart-tv.+(samsung)/i],[m,[v,T],h],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],h,[v,I]],[/sie-(\w+)*/i],[h,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],h,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[h,[m,"Acer"],[v,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[h,[m,"LG"],[v,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],h,[v,S]],[/(lg) netcast\.tv/i],[m,h,[v,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[h,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[h,[m,"Lenovo"],[v,S]],[/linux;.+((jolla));/i],[m,h,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,h,[v,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,h,[v,I]],[/crkey/i],[[h,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[h,[m,"Google"],[v,A]],[/android.+;\s(pixel c)\s/i],[h,[m,"Google"],[v,S]],[/android.+;\s(pixel xl|pixel)\s/i],[h,[m,"Google"],[v,I]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[h,/_/g," "],[m,"Xiaomi"],[v,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[h,[m,"Meizu"],[v,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[h,[m,"OnePlus"],[v,I]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[h,[m,"RCA"],[v,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[h,[m,"Dell"],[v,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[h,[m,"Verizon"],[v,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],h,[v,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[h,[m,"NuVision"],[v,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[m,"ZTE"],h,[v,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[h,[m,"Swiss"],[v,I]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[h,[m,"Swiss"],[v,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[h,[m,"Zeki"],[v,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[m,"Dragon Touch"],h,[v,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[h,[m,"Insignia"],[v,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[h,[m,"NextBook"],[v,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],h,[v,I]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[m,"LvTel"],h,[v,I]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[h,[m,"Envizen"],[v,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[m,h,[v,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[h,[m,"MachSpeed"],[v,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,h,[v,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[h,[m,"Rotor"],[v,S]],[/android.+(KS(.+))\s+build/i],[h,[m,"Amazon"],[v,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[m,h,[v,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,h],[/(android.+)[;\/].+build/i],[h,[m,"Generic"]]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[g,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[g,_],[/rv\:([\w\.]+).*(gecko)/i],[_,g]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[g,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[g,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[g,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[g,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[g,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[g,"Symbian"],_],[/\((series40);/i],[g],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[g,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[g,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[g,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[g,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[g,_],[/(haiku)\s(\w+)/i],[g,_],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[_,/_/g,"."],[g,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[g,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[g,_]]},O=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof O))return new O(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};O.VERSION=o,O.BROWSER={NAME:g,MAJOR:p,VERSION:_},O.CPU={ARCHITECTURE:E},O.DEVICE={MODEL:h,VENDOR:m,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:b},O.ENGINE={NAME:g,VERSION:_},O.OS={NAME:g,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=O),t.UAParser=O):"function"===c&&n(166)?(i=function(){return O}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=O)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(170).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("campaign",n(173))}}),(function(e,t,n){var i=n(115);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(174);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(176))}}),(function(e,t,n){var i=n(2),r=n(140);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(178)),e.registerAudienceMatcher("cookies",n(179))}}),(function(e,t,n){var i=n(72);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(174);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181));var t=n(182);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(22),a=n(20),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,r={id:u.segmentId||u.id,value:t.value}):c||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=r,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(174);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(184)),e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("device",n(186))}}),(function(e,t,n){var i=n(163);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(188)),e.registerAudienceMatcher("device_type",n(189))}}),(function(e,t,n){var i=n(163);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(191)),e.registerAudienceMatcher("location",n(193))}}),(function(e,t,n){var i=n(192);e.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(6),a=n(128),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var n=e.location,i=t.value,r=i.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),u=(r[3]||"").trim();switch(r.length){case 1:if(n.country===a)return!0;break;case 2:if(n.region===o&&n.country===a)return!0;break;case 3:if(n.city===s&&(n.region===o||""===o)&&n.country===a)return!0;break;case 4:if(n.continent===u)return!0}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(195)),e.registerAudienceMatcher("query",n(196))}}),(function(e,t,n){var i=n(115);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(2),r=n(174);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(198)),e.registerAudienceMatcher("referrer",n(199))}}),(function(e,t,n){var i=n(77),r=n(95);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(200);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(202)),e.registerAudienceMatcher("source_type",n(204))}}),(function(e,t,n){var i=n(115),r=n(77),a=n(95),o=n(203),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&o.getDomain(e)!==o.getDomain(i.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(174);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(206)),e.registerVisitorProfileProvider(n(207)),e.registerAudienceMatcher("time_and_day",n(208))}}),(function(e,t,n){var i=n(21);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(209);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(){var e=u.getGlobal("bk_results");if(e&&e.hasOwnProperty("campaigns")){var t=a.reduce(e.campaigns,(function(e,t){return t.campaign&&e.push(t.campaign),e}),[]);return{campaigns:t}}}var r="bluekai",a=n(2),o=n(12).Promise,s=n(84),u=n(36),c={provider:{isAsync:!0,getter:[function(){return function(e,t){var n=i();return n?(t(n),o.resolve(n)):s.pollFor(i)}}]},matcher:n(211),vendor:r};e.exports=function(e){e.registerAudiencePlugin(c)}}),(function(e,t,n){var i=n(2),r=n(60).getFieldValue,a=n(174);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){function i(e,t){if(t["sVariableReference"])return t["sVariableReference"]||null;var n=t["sVariable"]?t["sVariable"]:f;return e.getGlobal(n)}function r(e){var t=["events","linkTrackEvents","linkTrackVars"];a.each(t,(function(t){a.isString(e[t])||(e[t]="")}))}var a=n(2),o=n(23),s=n(20),u=n(84),c=n(95),l=n(111),d=n(36),f="s",p=255,h="o",g="adobe_analytics",v="optimizelyLayerEvent",m="OptimizelyLayerDecision",_=n(16),E=n(91),y=_.get("stores/integration_settings"),I=["stores/layer_data",function(e){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,r=t.decision.isLayerHoldback,o=t.decision.variationId,u=e.get(n),c=a.find(u.experiments,{id:i});if(c){var l=c["integrationSettings"]||u["integrationSettings"]||{},d=l[g];if(d){var f=a.find(c.variations,{id:o});if(f){var h=E.generateAnalyticsString(u,c,f,r,p,!0);if(h)return T(h,d)["catch"]((function(e){s.warn("Tracker for",g,"failed:",e)}))}}}}}],S=function(e){var t=e.integrationSettings;if(t&&t[g]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},a=e.isLayerHoldback,o=E.generateAnalyticsString(n,i,r,a,p,!0);if(o)return T(o,t[g])["catch"]((function(e){s.warn("Tracker for",g,"failed:",e)}))}},T=function(e,t){var n,o=50,s=200;return u.pollFor((function(){var e=y.getReference(g);return n=a.extend({},e,t),i(d,n)}),s,o).then((function(t){var i,o,s=n.site_catalyst_eVar||null,u=n.site_catalyst_prop||null;s&&(i="eVar"+s),u&&(o="prop"+u),r(t);var l=t.linkTrackVars.split(",");i&&(e=e.substring(0,p),t[i]=e,l.indexOf(i)===-1&&l.push(i)),o&&(t[o]=e,l.indexOf(o)===-1&&l.push(o));var d=c.getReferrer();if(d&&(t.referrer=d),t.linkTrackVars.indexOf("events")===-1&&l.push("events"),t.linkTrackVars=a.filter(l).join(","),t.linkTrackEvents.indexOf(v)===-1){var f=t.linkTrackEvents.split(",");f.push(v),t.linkTrackEvents=a.filter(f).join(",")}if(t.events.indexOf(v)===-1){var g=t.events.split(",");g.push(v),t.events=a.filter(g).join(",")}t.tl(!0,h,m)}))},A={preRedirectPolicy:l.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:l.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:l.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:I,trackLayerDecision:S,serializeSettings:o.stringify,deserializeSettings:o.parse};e.exports=function(e){e.registerAnalyticsTracker("adobe_analytics",A)}}),(function(e,t,n){var i=n(2),r=n(23),a=n(20),o=n(84),s=n(95),u=n(111),c=n(36),l="google_classic_analytics",d="Optimizely",f="_gaq",p=128,h=p-d.length,g=n(91),v=["stores/layer_data",function(e){return function(t){var n=t.decision.experimentId,r=t.decision.variationId,o=t.decision.isLayerHoldback,s=e.get(t.decision.layerId),u=i.find(s.experiments,{id:n});if(u){var c=u["integrationSettings"]||s["integrationSettings"]||{},d=c[l];if(d){var f=i.find(u.variations,{id:r});if(f){var p=g.generateAnalyticsString(s,u,f,o,h,!0);if(p)return _(p,d)["catch"]((function(e){a.warn("Tracker for",l,"failed:",e)}))}}}}}],m=function(e){var t=e.integrationSettings;if(t&&t[l]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},o=e.isLayerHoldback,s=g.generateAnalyticsString(n,i,r,o,h,!0);if(s)return _(s,t[l])["catch"]((function(e){a.warn("Tracker for",l,"failed:",e)}))}},_=function(e,t){var n=50,r=200;return o.pollFor((function(){var e=c.getGlobal(f);if(e&&!i.isArray(e))return e}),r,n).then((function(n){var i=null,r=null,o=!0,u=t.google_analytics_tracker,c=u?u+".":"",l=parseInt(t.google_analytics_slot,10);if(isNaN(l))return void a.warn('Google Analytics custom variable slot cannot be parsed to an integer: "',t.google_analytics_slot,'".  No data can be sent to Google Analytics.');var f=s.getReferrer();f&&n.push([c+"_setReferrerOverride",f]),n.push([c+"_setCustomVar",l,d,e],[c+"_trackEvent","Optimizely","Assigned to Campaign",i,r,o])}))},E={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:v,trackLayerDecision:m,serializeSettings:r.stringify,deserializeSettings:r.parse};e.exports=function(e){e.registerAnalyticsTracker("google_classic_analytics",E)}}),(function(e,t,n){function i(e){function t(e,t,n){try{u(t),e[n]=t}catch(e){C.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=O.keys(ne),i=O.omit(e,n),r=O.pick(e,n),a=O.reduce(i,t,{}),o=O.reduce(r,(function(e,n,i){var r=ne[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){C.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=O.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return O.extend({entity_id:e.event.id,key:e.event.apiName,timestamp:e.timestamp,uuid:e.eventId,type:e.event.category},i(e.eventTags))}function o(e){return O.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:$,uuid:e.eventId,timestamp:e.timestamp}}function u(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=F.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function c(e){if(null==e)throw new Error("Metric value is null");if(!O.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return O.reduce(e,(function(e,t){try{u(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){V.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){K.dispatch(P.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);K.dispatch(P.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:Q}]}]}]};K.dispatch(P.REGISTER_PREVIOUS_BATCH,n),D()}function h(e){var t=O.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientEngine,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision;var i={session_id:g(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=R(e.layerStates);K.dispatch(P.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function g(e){return oe?ae:e}function v(e){var t={entity_id:e.layerId,type:Q,uuid:e.decisionId,timestamp:e.timestamp};K.dispatch(P.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:R(e.layerStates)}),f(e.userFeatures),D()}function m(){if(!W.canSend())return void V.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(O.each(W.getPreviousBatches(),_),K.dispatch(P.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(K.dispatch(P.FINALIZE_BATCH_SNAPSHOT),_(W.getEventBatch()),K.dispatch(P.RESET_TRACKER_EVENTS)))):void V.debug("Not sending events because there are no events to send")}function _(e){V.debug("Sending ticket:",e);var t=x.generate();G.retryableRequest({url:L,method:"POST",data:E(e)},t)}function E(e){var t=O.extend({},O.pick(e,["account_id","anonymize_ip","client_name","client_version","project_id","revision"]),{visitors:O.map(e.visitors,y)});return t}function y(e){return{visitor_id:e.visitor_id,session_id:ae,attributes:O.map(e.attributes,I),snapshots:O.map(e.snapshots,S)}}function I(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:O.map(e.decisions,A),events:O.map(t,b)}}function T(e){var t=O.reduce(e,(function(e,t){var n;if(n=t.type!==J||!O.isEmpty(t.tags)||!O.isEmpty(O.pick(t,O.keys(ne)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=O.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return O.values(t)}function A(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function b(e){return e.key===Q&&(e.type=Q,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return O.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!ie||H.isLoaded();t&&m(),W.isPolling()&&B.setTimeout(e,te)}return W.shouldBatch()?void(W.isPolling()||(B.setTimeout(e,te),K.dispatch(P.SET_TRACKER_POLLING,!0),B.setTimeout((function(){K.dispatch(P.SET_TRACKER_BATCHING,!1),K.dispatch(P.SET_TRACKER_POLLING,!1)}),ee))):void m()}function R(e){return O.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function N(){var e=W.getPersistableState();if(e)try{V.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),K.dispatch(P.SET_TRACKER_DIRTY,!1)}catch(e){V.debug("Failed to persist pending batch:",e)}}var O=n(2),C=n(82),x=n(5),L="https://logx.optimizely.com/v1/events",P=n(7),k=n(73).create,F=n(23),V=n(20),M=n(111),U=n(71),B=n(36),G=n(86),j=n(16),H=n(77),z=n(83),Y=n(107),K=n(9),q=j.get("stores/global"),W=j.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),$="client_activation",Q="campaign_activated",J="view_activated",Z="multi-event",ee=1e4,te=1e3,ne={revenue:{validate:c,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:c,sanitize:Math.floor,excludeFeature:!0},value:{validate:c,sanitize:O.identity}},ie=!1,re=!1,ae="AUTO",oe=!0,se=[function(){return function(e){v(O.extend(e,e.decision))}}],ue=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):v(e)},ce=[function(){return function(e){d(r(e),e.userFeatures,R(e.layerStates))}}],le=[function(){return function(e){h(e),d(s(e),e.userFeatures,R(e.layerStates))}}],de=[function(){return function(e){d(o(e),e.userFeatures,R(e.layerStates))}}],fe=[function(){return function(e){d(a(e),e.userFeatures,R(e.layerStates))}}],pe={onLayerDecision:se,trackLayerDecision:ue,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:ce,onClientActivation:le,onClickEvent:fe,onCustomEvent:de};e.exports=function(e){e.registerAnalyticsTracker("optimizely",pe),z.on({filter:{type:Y.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){K.dispatch(P.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||m()}}),z.on({filter:{type:Y.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){K.dispatch(P.SET_TRACKER_SEND_EVENTS,!1)}}),K.dispatch(P.SET_TRACKER_SEND_EVENTS,!re);var t=z.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(N),z.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(216)),e.registerViewMatcher("url",n(217))}}),(function(e,t,n){var i=n(115);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(200);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(106),a=n(219),o=n(20),s=n(118);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=c(i,t)}catch(s){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),u),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(82),s=n(73).create,u=n(77),c=n(220),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(221)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){h.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new v(E.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(E.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:E.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){g.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:E.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){h.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=n(2),a=n(7),o=n(82),s=n(133),u=n(73).create,c=n(223),l=n(224),d=n(16).get("stores/directive"),f=n(77),p=n(225),h=n(9),g=n(20),v=n(226),m=n(132),_=n(96).create(),E={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},y=u("ChangeOverheatError");i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:r.partial(m.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&_.waitUntil(r.partial(m.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=_.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),n);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return g.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);n(),this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n;switch(this.change.operator){case p.DOMInsertionType.AFTER:n=p.insertAdjacentHTMLType.AFTER_END;break;case p.DOMInsertionType.APPEND:n=p.insertAdjacentHTMLType.BEFORE_END;break;case p.DOMInsertionType.BEFORE:n=p.insertAdjacentHTMLType.BEFORE_BEGIN;break;case p.DOMInsertionType.PREPEND:n=p.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=p.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),c.setData(e,this.change.id,this.identifier,[]);var i,a,o=this.numberOfRootNodes(this.change.value)-1;n===p.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,a=this.getSiblingElements(i,o,!0)):n===p.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,a=this.getSiblingElements(i,o,!1)):n===p.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,a=this.getSiblingElements(i,o,!0)),a.unshift(i),r.each(a,r.bind((function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);n.setAttribute(t,"");var i=c.getData(n,this.change.id,this.identifier)||[];i.push(e),c.setData(n,this.change.id,this.identifier,i),r.each(f.childrenOf(n),(function(e){e.setAttribute(t,"")}))}),this))},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(p.changeType.APPEND,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(133).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");
e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(20),o=n(36);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(224),o=n(225),s=n(140);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){function i(e,t){if(this.change=e,this.config=t,this.reasonShouldNotRedirect=this._checkForReasonNotToRedirect(),!this.reasonShouldNotRedirect){if(!r.isString(this.change.dest)&&!r.isFunction(this.change.dest))throw new Error("Redirect destination is not a string or function:",this.change.dest);if(r.isFunction(this.change.dest)&&(this.change.dest=this.change.dest(),!r.isString(this.change.dest)))throw new Error("Redirect destination function did not evaluate to a string");if(!this.config.action)throw new Error("Redirect changes require an action to be passed in the config.");d.dispatch(o.ANNOUNCE_PENDING_REDIRECT,{layerId:this.config.action.layerId})}}var r=n(2),a=n(12).Promise,o=n(7),s=n(22),u=n(72),c=n(77),l=n(225),d=n(9),f=n(229),p=n(20),h=n(36),g=n(16),v=g.get("stores/action_data"),m="COOKIE";i.prototype.apply=function(){if(this.reasonShouldNotRedirect)return p.warn("Redirect change is not being applied because: "+this.reasonShouldNotRedirect),a.resolve(l.changeState.IGNORED);if(this.reasonInvalid)return p.error("Redirect change cannot be applied because:",this.reasonInvalid),a.reject(this.reasonInvalid);try{this.zt(this.Yt())}catch(e){return a.reject(e)}return a.resolve(l.changeState.APPLIED)},i.prototype.Yt=function(){var e=f.create(this.change.dest);if(this.change.preserveParameters){var t=h.getLocation().search;t&&(e.search?e.search+="&"+t.substr(1):e.search=t)}return e.toString()},i.prototype.Kt=function(){var e=c.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="body{display:none;visibility:hidden;}",c.appendToHead(e)},i.prototype.zt=function(e){if(!m){var t,n=v.getByChangeId(this.config.identifier);n&&(t=n.variationId);var i=(t||"unknown variation")+"|"+c.getReferrer();p.debug("Change / Redirect / Setting redirect data:",i),u.set(s.COOKIES.REDIRECT,i,{maxAge:5})}var r=!this.change.hasOwnProperty("hidePage")||this.change.hidePage;r&&this.Kt(),h.setLocation(e)},i.prototype._checkForReasonNotToRedirect=function(){var e=u.get(s.COOKIES.REDIRECT);if(!this.change.allowAdditionalRedirect&&!r.isUndefined(e))return"Page was already redirected."},e.exports=function(e){e.registerChangeApplier(l.changeType.REDIRECT,i)}}),(function(e,t,n){var i=n(2);t.create=function(e){if(i.isEmpty(e))return null;var t=document.createElement("a");return t.href=e,t}}),(function(e,t,n){function i(e,t){this.change=r.extend({},e),this.identifier=t.identifier}var r=n(2),a=n(224),o=n(225),s=n(102),u="showWidget";i.prototype.apply=function(){return s.emit({type:u,name:this.change.widget_id,data:this.change}),a().resolve(o.changeState.APPLIED)},e.exports=function(e){e.registerChangeApplier(o.changeType.WIDGET,i)}}),(function(e,t,n){function i(e,t,n,i){var l,d=e.decisionMetadata.experimentPriorities[i],f=function(n,i){var r=u.getExperimentById(e,i.entityId);return u.isValidExperiment(t,r)&&n.push(i.entityId),n},p=o.reduce(d,f,[]);if(!o.isEmpty(p)){var h,g=o.filter(d,{endOfRange:null});if(g&&g.length===d.length)h=r(p);else{if(0!==g.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");h=a(p,d)}if(l=s.chooseWeightedCandidate(n,e.id,h)){var v=u.getExperimentById(e,l);if(v)return v}}}function r(e){for(var t=[],n=Math.round(1e4/e.length),i=0;i<e.length;i++)t.push({entityId:e[i],endOfRange:n*(i+1)});return t[t.length-1].endOfRange=1e4,t}function a(e,t){for(var n=[],i=[],r=0,a=0;a<t.length;a++){var s=0;e.indexOf(t[a].entityId)>=0&&(s=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r+=s,i.push({entityId:t[a].entityId,points:s}))}if(o.isEmpty(n))for(var u=0,c=0;c<i.length;c++){var l=Math.round(1e4*i[c].points/r)+u;n.push({entityId:i[c].entityId,endOfRange:l}),u=l}return n[n.length-1].endOfRange=1e4,n}var o=n(2),s=n(136),u=n(137),c=n(138).DecisionError,l="equal_priority",d={decideLayer:function(e,t){if(!e.decisionMetadata||!e.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var n=e.decisionMetadata.experimentPriorities.length,r=0;r<n;r++){var a=i(e,t.audienceIds,t.bucketingId,r);if(a){var o=u.selectVariation(a,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!e.decisionMetadata.offerConsistency||u.hasVariationActionsOnView(o,t.pageId))return{experiment:a,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(e){return!(!e.decisionMetadata||!e.decisionMetadata.offerConsistency)}};e.exports=function(e){e.registerDecider(l,d)}})]);