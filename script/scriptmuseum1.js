/*كود قاعة الأجرام السماوية*/
	
		//كود ربط القماشة بجافا اسكريبت	
		var canvas = document.getElementById("renderCanvas");
		// متغيرات التحكم فى أنتاج التعليقات داخل القاعة
			var px =0;
			var pz=-450;
			
			//متغير عام للتحكم فى الكاميرا
			var x = 0;
			var z = -450;
			
        var createScene = function () {
		// يكتب هنا كود جميع الكائنات
		
	
                //كود إنشاء المشهد
                var scene = new BABYLON.Scene(engine);
				//يمكن حذف خاصية تكوين معالجة الصور
                                
                               /*
					scene.imageProcessingConfiguration.exposure = 0.6;
					scene.imageProcessingConfiguration.contrast = 1.6;
				*/	
					
					
                //كود إنشاء الكاميرا
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 9, 0), scene);
                camera.inputs.clear();
		        camera.position.x = x;
				camera.position.y = 20;
				camera.position.z = z;
				camera.setTarget(BABYLON.Vector3.Zero());
				//يتم التحكم فى استدارة الكميرا من خلال المحور x و y
				camera.rotation.x= 0;
				camera.rotation.y= 0;
				camera.rotation.z= 0;
				camera.attachControl(canvas, true);

				

                 //كود إنشاء الإضاءة
				//إضاءة 1
                var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 50, 0), scene);
			    light.intensity = 6;
				
				//إضاءة 2
				var light3 = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(0, 50, 0), scene);
				 light3.intensity = 6;
				/*
				var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 0, 0), scene);
			    light.intensity = 4;
				
				//إضاءة 2
				var light3 = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(100, 50, 0), scene);
				 light3.intensity = 4;
				//إضاءة 3
				
				var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 5,-6), scene);
				  light1.intensity = 15;
				*/
				
				
				//إضاءة 4
				/*
				var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(6, 5, 3.5), scene);
				light2.intensity = 5;
				*/
				
				
				/////////////////////////////////
				//إنشاء السماء
				//اسماء تعمل على النت فقط
				/*
          // Sky material
        	var skyboxMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
            skyboxMaterial.backFaceCulling = false;
        	//skyboxMaterial._cachedDefines.FOG = true;
        
        	// Sky mesh (box)
            var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
            skybox.material = skyboxMaterial;
        	
        	/*
			//لا يتم فتح هذا القسم عندما تعكل السماء من النت
        	* Keys:
        	* - 1: Day
        	* - 2: Evening
        	* - 3: Increase Luminance
        	* - 4: Decrease Luminance
        	* - 5: Increase Turbidity
        	* - 6: Decrease Turbidity
            * - 7: Move horizon to -50
            * - 8: Restore horizon to 0
        	*/
			/*
        	var setSkyConfig = function (property, from, to) {
        		var keys = [
                    { frame: 0, value: from },
        			{ frame: 100, value: to }
                ];
        		
        		var animation = new BABYLON.Animation("animation", property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        		animation.setKeys(keys);
        		
        		scene.stopAnimation(skybox);
        		scene.beginDirectAnimation(skybox, [animation], 0, 100, false, 1);
        	};
        	
        	window.addEventListener("keydown", function (evt) {
        		switch (evt.keyCode) {
        			case 49: setSkyConfig("material.inclination", skyboxMaterial.inclination, 0); break; // 1
        			case 50: setSkyConfig("material.inclination", skyboxMaterial.inclination, -0.5); break; // 2
        
        			case 51: setSkyConfig("material.luminance", skyboxMaterial.luminance, 0.1); break; // 3
        			case 52: setSkyConfig("material.luminance", skyboxMaterial.luminance, 1.0); break; // 4
        			
        			case 53: setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 40); break; // 5
        			case 54: setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 5); break; // 6
        			
                    case 55: setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 50); break; // 7
                    case 56: setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 0); break;  // 8
        			default: break;
        		}
            });
        	
        	// Set to Day
        	setSkyConfig("material.inclination", skyboxMaterial.inclination, 0);
		 */
		   
			////////
          //إدراج فيديو   
	/*
	var planeOpts = {
			height: 15, 
			width: 20, 
			
			sideOrientation: BABYLON.Mesh.DOUBLESIDE
	};
	var ANote0Video = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
	var vidPos = (new BABYLON.Vector3(0,10,0))
    ANote0Video.position = vidPos;
	var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
	var ANote0VideoVidTex = new BABYLON.VideoTexture("vidtex","video/1.mp4", scene);
	ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
	ANote0VideoMat.roughness = 1;
	ANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
	ANote0Video.material = ANote0VideoMat;
	scene.onPointerObservable.add(function(evt){
			if(evt.pickInfo.pickedMesh === ANote0Video){
                //console.log("picked");
					if(ANote0VideoVidTex.video.paused)
						ANote0VideoVidTex.video.play();
					else
						ANote0VideoVidTex.video.pause();
                    console.log(ANote0VideoVidTex.video.paused?"paused":"playing");
			}
	}, BABYLON.PointerEventTypes.POINTERPICK);
	*/
				/////////////////////
				//نماذج إنشاء الكائنات
				
				
				//إنشاء جانب من الشمال إلى الجنوب
				function obj1(par1 , par2, par3 , par4, par5, par6 , par7){
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: par1, height: par2, depth: par3 }, scene);
				box5.position.x= par4;
				box5.position.y= par5;
				box5.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(1, 0.5, 0.5);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				box5.material = plastic;};
				
				
				//إنشاء جانب من الشرق إلى الغرب
				function obj2(par1 , par2, par3 , par4, par5, par6 , par7){
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: par1, height: par2, depth: par3 }, scene);
				box2.position.x= par4;
				box2.position.y= par5;
				box2.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(1, 0.5, 0.5 );
				plastic.reflectivityColor = new BABYLON.Color3(0.3,0.3,0.3);
				box2.material = plastic;};
				
				
				//إنشاء لوحة عرض شمالية
				function obj3(par1 , par2, par3 , par4, par5, par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1, height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				box4.rotation.x=0;
				box4.rotation.y=0;
				box4.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( par7, scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;};
				
				
				//إنشاء لوحة عرض غربية
				function obj4(par1 , par2, par3 , par4, par5, par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1, height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				 box4.rotation.x=11/7;
				box4.rotation.y=0;
				box4.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( par7, scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;};
				
				//إنشاء لوحة عرض جنوبية
				function obj5(par1 , par2, par3 , par4, par5, par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1, height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				box4.rotation.x=0;
				box4.rotation.y=0;
				box4.rotation.z=22/7;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( par7, scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;};
				
				
				//إنشاء لوحة عرض شرقية
				function obj6(par1 , par2 , par3 , par4, par5 , par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1 , height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				box4.rotation.x=-11/7;
				box4.rotation.y=0;
				box4.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( par7, scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;};
				
				
				//إنشاء جانب من الشرق إلى الغرب علوي
				function obj7(par1 , par2 , par3 , par4, par5 , par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1, height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(1, 1, 0.5);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				box4.material = plastic;};
				
							
				//إنشاء الجانب من الشمال إلى الجنوب علوى
				function obj8(par1 , par2 , par3 , par4, par5 , par6 , par7){
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width: par1, height: par2, depth: par3 }, scene);
				box4.position.x= par4;
				box4.position.y= par5;
				box4.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(1, 1, 0.5);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				box4.material = plastic;};
				
				
				//إنشاء عمود
				function obj9(par1 , par2 , par3 , par4, par5 , par6 , par7){
				 var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height: par1 ,diameterTop: par2, diameterBottom: par3}, scene);
				cylinder1.position.x= par4;
				cylinder1.position.y= par5;
				cylinder1.position.z= par6;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( par7, scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;};
				
				
				
				//إنشاءالواجهة الأمامية والخلفية
				function obj10(par1 , par2, par3 , par4, par5, par6 , par7){
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: par1, height: par2, depth: par3 }, scene);
				box2.position.x= par4;
				box2.position.y= par5;
				box2.position.z= par6;
				var glass = new BABYLON.PBRMaterial("glass", scene);
  				glass.linkRefractionWithTransparency = true;
				glass.indexOfRefraction = 0.52;
				glass.alpha = 0;
				glass.microSurface = 1;
				glass.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
				glass.albedoColor = new BABYLON.Color3(0.85, 0.85, 0.85);
				box2.material = glass;};
				
				
				
				//إنشاء الواجهة الغربية والشرقية
				function obj11(par1 , par2, par3 , par4, par5, par6 , par7){
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: par1, height: par2, depth: par3 }, scene);
				box5.position.x= par4;
				box5.position.y= par5;
				box5.position.z= par6;
				var glass = new BABYLON.PBRMaterial("glass", scene);
  				glass.linkRefractionWithTransparency = true;
				glass.indexOfRefraction = 0.52;
				glass.alpha = 0;
				glass.microSurface = 1;
				glass.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
				glass.albedoColor = new BABYLON.Color3(0.85, 0.85, 0.85);
				box5.material = glass;};
				
				
				//إنشاء السقف
				function obj12(par1 , par2, par3 , par4, par5, par6 , par7){
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: par1, height: par2, depth:par3 }, scene);
				box6.position.x= par4;
				box6.position.y= par5;
				box6.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.9, 0.5, 1);
				plastic.reflectivityColor = new BABYLON.Color3(0.5, 0.5, 0.5);
				box6.material = plastic;};
				
				
				//إنشاء أرضية
				function obj13(par1 , par2, par3 , par4, par5, par6 , par7){
				var box1 = new BABYLON.MeshBuilder.CreateBox("box2", { width: par1, height: par2, depth:par3 }, scene);
				box1.position.x= par4;
				box1.position.y= par5;
				box1.position.z= par6;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.9, 0.7, 1);
				plastic.reflectivityColor = new BABYLON.Color3(0.8, 0.5, 0.2);
				box1.material = plastic;};
				
				//إنشاء كائن بابلون
				function obj14(par1 , par2, par3 , par4, par5, par6 , par7){
				BABYLON.SceneLoader.ImportMesh("", "scenes/", par7, scene, function (newMeshes ) {
				setup(newMeshes[0]);});
		        function setup(mesh) {
				mesh.position.x = par1;
				mesh.position.y = par2;
				mesh.position.z = par3;
	 			mesh.scaling.x = par4;
				mesh.scaling.y = par5;
				mesh.scaling.z = par6;};};
				
				
				/////////
				//إنشاء كائن بابلون
				function obj14(par1 , par2, par3 , par4, par5, par6 , par7){
				BABYLON.SceneLoader.ImportMesh("", "scenes/", par7, scene, function (newMeshes ) {
				setup(newMeshes[0]);});
		        function setup(mesh) {
				mesh.position.x = par1;
				mesh.position.y = par2;
				mesh.position.z = par3;
	 			mesh.scaling.x = par4;
				mesh.scaling.y = par5;
				mesh.scaling.z = par6;};};
				//////
				//ادراج  كائن بابليون
			/*
				obj14(50 , 15,0 , 0.4, 0.4, 0.4 , "skull.babylon");
				
				obj14(25 , 8,0 , 0.2, 0.2, 0.2 , "lion4.babylon");
				
				obj14(0 , 8, 0 , 0.2, 0.2, 0.2 , "13.babylon");
				
				obj14(0 ,0,0 , 50, 50, 50 , "liontaha33.babylon");
				*/
				/////////////////////
				//إنشاء الأرضية والسقف
				
				//إنشاء الأرضية
				var box1 = new BABYLON.MeshBuilder.CreateBox("box2", { width:1000, height: 0.2, depth:1000 }, scene);
				box1.position.x=0;
				box1.position.y=0;
				box1.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/floor.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box1.material = material;
				
				//إنشاء سقف البهو
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 301, height: 0.2, depth:301 }, scene);
				box6.position.x=0;
				box6.position.y=60;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/18.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 1 إلى 3
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 100, height: 0.2, depth:300 }, scene);
				box6.position.x=200;
				box6.position.y=45;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/18.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 4 إلى 6
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 300, height: 0.2, depth:100 }, scene);
				box6.position.x=0;
				box6.position.y=45;
				box6.position.z=200;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/18.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 7 إلى 9
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 100, height: 0.2, depth:300 }, scene);
				box6.position.x=-200;
				box6.position.y=45;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/18.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				
				
				/////////////////////
				//إنشاء الجدران
				
				//إنشاء جدران الواجهة الأمامية
				//جدار الواجهة الأمامية رقم 1
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=200;
				box2.position.y=22.5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 60, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=30;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 3
				
				//جدار الواجهة الأمامية رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 60, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=30;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 5
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-200;
				box2.position.y=22.5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//////////////
				//لوحات الجدران الأمامية
				
				
				//لوحة الجدران الأمامية رقم 1
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=200;
				box2.position.y=22.5;
				box2.position.z=-150.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/11.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//لوحة الجدران الأمامية رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 60, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=30;
				box2.position.z=-150.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/12.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//لوحة الجدران الأمامية رقم 3
				
				//لوحة الجدران الأمامية رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 60, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=30;
				box2.position.z=-150.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/12.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//لوحة الجدران الأمامية رقم 5
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-200;
				box2.position.y=22.5;
				box2.position.z=-150.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/11.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء جدران الجانب الشرقي
				//جدار الجانب الشرقي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=250;
				box5.position.y=22.5;
				box5.position.z=-100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=200;
				box2.position.y=22.5;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشرقي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=250;
				box5.position.y=22.5;
				box5.position.z=0;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=200;
				box2.position.y=22.5;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشرقي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=250;
				box5.position.y=22.5;
				box5.position.z=100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=200;
				box2.position.y=22.5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				//إنشاء جدران الجانب الشمالي
				//جدار الجانب الشمالي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=150;
				box5.position.y=22.5;
				box5.position.z=200;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=22.5;
				box2.position.z=250;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=50;
				box5.position.y=22.5;
				box5.position.z=200;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=0;
				box2.position.y=22.5;
				box2.position.z=250;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=-50;
				box5.position.y=22.5;
				box5.position.z=200;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=22.5;
				box2.position.z=250;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 7
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=-150;
				box5.position.y=22.5;
				box5.position.z=200;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				
				//إنشاء جدران الجانب الغربي
				//جدار الجانب الغربي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=-250;
				box5.position.y=22.5;
				box5.position.z=-100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-200;
				box2.position.y=22.5;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الغربي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=-250;
				box5.position.y=22.5;
				box5.position.z=0;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-200;
				box2.position.y=22.5;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الغربي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 45 }, scene);
				box5.position.x=-250;
				box5.position.y=22.5;
				box5.position.z=100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 45, depth: 0.2 }, scene);
				box2.position.x=-200;
				box2.position.y=22.5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				
				/////////////////////
				//إنشاء الأعمدة
				/////
				//إنشاء أعمدة الواجهة الأمامية
				//إنشاء كمر عنوان المتحف العلوي
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 305, height: 5, depth: 5 }, scene);
				box2.position.x=0;
				box2.position.y=110;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء كمر عنوان المتحف السفلي
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 300, height: 5, depth: 5 }, scene);
				box2.position.x=0;
				box2.position.y=60;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء كمر الجانب الأمامي الشرقي
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 105, height: 5, depth: 5 }, scene);
				box2.position.x=200;
				box2.position.y=45;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء كمر الجانب الأمامي الغربي
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 105, height: 5, depth: 5 }, scene);
				box2.position.x=-200;
				box2.position.y=45;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الواجهة الأمامية رقم 1
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=250;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:25,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=250;
				cylinder1.position.y=22.5;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=250;
				box2.position.y=40;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الواجهة الأمامية رقم 2
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=150;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=150;
				cylinder1.position.y=30;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 60, depth: 5 }, scene);
				box2.position.x=150;
				box2.position.y=80;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				//عمود الواجهة الأمامية رقم 3
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=50;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=50;
				cylinder1.position.y=30;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=50;
				box2.position.y=55;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الواجهة الأمامية رقم 4
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-50;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-50;
				cylinder1.position.y=30;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-50;
				box2.position.y=55;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الواجهة الأمامية رقم 5
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-150;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-150;
				cylinder1.position.y=30;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 60, depth: 5 }, scene);
				box2.position.x=-150;
				box2.position.y=80;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الواجهة الأمامية رقم 6
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-250;
				box2.position.y=5;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:25,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-250;
				cylinder1.position.y=22.5;
				cylinder1.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-250;
				box2.position.y=40;
				box2.position.z=-150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				/////
				//إنشاء أعمدة الجانب الشرقي
				
				//عمود الجانب الشرقي رقم 1
				
				//عمود الجانب الشرقي رقم 2
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=150;
				box2.position.y=5;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=150;
				cylinder1.position.y=30;
				cylinder1.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=150;
				box2.position.y=55;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الجانب الشرقي رقم 3
				
								
				//عمود الجانب الشرقي رقم 4
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=150;
				box2.position.y=5;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=150;
				cylinder1.position.y=30;
				cylinder1.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=150;
				box2.position.y=55;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//عمود الجانب الشرقي رقم 5
				
				
				//عمود الجانب الشرقي رقم 6
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=150;
				box2.position.y=5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=150;
				cylinder1.position.y=30;
				cylinder1.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=150;
				box2.position.y=55;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				/////
				//إنشاء أعمدة الجانب الشمالي
				
				//إنشاء عمود الجانب الشمالي رقم 1
				
				
				
				//إنشاء عمود الجانب الشمالي رقم 2
				
				
				
				//إنشاء عمود الجانب الشمالي رقم 3
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=50;
				box2.position.y=5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=50;
				cylinder1.position.y=30;
				cylinder1.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=50;
				box2.position.y=55;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء عمود الجانب الشمالي رقم 4
				
				
				
				//إنشاء عمود الجانب الشمالي رقم 5
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-50;
				box2.position.y=5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-50;
				cylinder1.position.y=30;
				cylinder1.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-50;
				box2.position.y=55;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء عمود الجانب الشمالي رقم 6
				
				
				/////
				//إنشاء أعمدة الجانب الغربي
				
				//إنشاء عمود الجانب الغربي رقم 1
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-150;
				box2.position.y=5;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-150;
				cylinder1.position.y=30;
				cylinder1.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-150;
				box2.position.y=55;
				box2.position.z=-50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء عمود الجانب الغربي رقم 2
				
				
				//إنشاء عمود الجانب الغربي رقم 3
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-150;
				box2.position.y=5;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-150;
				cylinder1.position.y=30;
				cylinder1.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-150;
				box2.position.y=55;
				box2.position.z=50;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء عمود الجانب الغربي رقم 4
				
				
				//إنشاء عمود الجانب الغربي رقم 5
				
				//القاعدة السفلية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 10, height: 10, depth: 10 }, scene);
				box2.position.x=-150;
				box2.position.y=5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//المخروط
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:8}, scene);
				cylinder1.position.x=-150;
				cylinder1.position.y=30;
				cylinder1.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder1.material = material;
				
				//القمة العلوية
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 10, depth: 5 }, scene);
				box2.position.x=-150;
				box2.position.y=55;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء عمود الجانب الغربي رقم 6
				
				
				
				
				/////////////////////
				//إنشاء الكمر الداخلي
				//إنشاء الكمر لداخلي للجانب الشرقي
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=150;
				box5.position.y=52.5;
				box5.position.z=-100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 2
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=150;
				box5.position.y=52.5;
				box5.position.z=0;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=150;
				box5.position.y=52.5;
				box5.position.z=100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 1
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 15, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=52.5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 15, depth: 0.2 }, scene);
				box2.position.x=0;
				box2.position.y=52.5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 3
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 100, height: 15, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=52.5;
				box2.position.z=150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجاني الغربي
				//إنشاء الكمر الداخلي للجانب الغربي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=-150;
				box5.position.y=52.5;
				box5.position.z=-100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الغربي رقم 2
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=-150;
				box5.position.y=52.5;
				box5.position.z=0;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الغربي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 100, depth: 15 }, scene);
				box5.position.x=-150;
				box5.position.y=52.5;
				box5.position.z=100;
				box5.rotation.x=3.14/2;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/17.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				
				
				
				/////////////////////
				//إنشاء اللوحات
				/////////////////////
				//إنشاء اللوحات
				///////
				//إنشاء لوحة تعريف المتحف
				var box24 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 300, height:50, depth: 0.2 }, scene);
				box24.position.x = 0;
				box24.position.y = 85;
				box24.position.z =- 150;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/100.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box24.material = material;
				
				//إنشاء لوحة التعليمات
			
				var box22 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 30, height: 42, depth: 0.2 }, scene);
				box22.position.x = 75;
				box22.position.y = 30;
				box22.position.z = -151;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/90.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box22.material = material;
		
				//إنشاء لوحات الجانب الأمامي
				
				///////
				//إنشاء لوحات القاعة رقم 1
				
				//إنشاء لوحات الجانب الشرقي
				//101
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=-124;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/101.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				//102
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=-81;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/102.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				//إنشاء لوحات الجانب الشمالي
				//103
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=222;
				box21.position.y= 22.5;
				box21.position.z=-50.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/103.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//104
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=178;
				box21.position.y= 22.5;
				box21.position.z=-50.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/104.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
			
				
				//إنشاء لوحات الجانب الجنوبي
				//105
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=176;
				box41.position.y=22.5;
				box41.position.z=-149.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/105.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				//106
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=219;
				box41.position.y=22.5;
				box41.position.z=-149.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/106.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				///////
				//إنشاء لوحات القاعة رقم 2
				
				//إنشاء لوحات الجانب الشرقي
				//201
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=-24;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/201.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				//202
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=19;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/202.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				
				//إنشاء لوحات الجانب الشمالي
				//203
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=222;
				box21.position.y= 22.5;
				box21.position.z=49.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/203.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//204
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=178;
				box21.position.y= 22.5;
				box21.position.z=49.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/204.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				
				
				//إنشاء لوحات الجانب الجنوبي
				//205
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=172;
				box41.position.y=22.5;
				box41.position.z=-49.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/205.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				//206
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=217;
				box41.position.y=22.5;
				box41.position.z=-49.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/206.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				///////
				//إنشاء لوحات القاعة رقم 3
				
				//إنشاء لوحات الجانب الشرقي
				//301
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=76;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				//302
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=249.5;
				box51.position.y=22.5;
				box51.position.z=119;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/302.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				//إنشاء لوحات الجانب الشمالي
				//303
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=222;
				box21.position.y= 22.5;
				box21.position.z=149.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/303.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//304
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=178;
				box21.position.y= 22.5;
				box21.position.z=149.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/304.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				
				
				//إنشاء لوحات الجانب الجنوبي
				//305
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=176;
				box41.position.y=22.5;
				box41.position.z=50.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/305.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				//306
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=219;
				box41.position.y=22.5;
				box41.position.z=50.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/306.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				
				
				
				///////
				//إنشاء لوحات القاعة رقم 4
				
				//إنشاء لوحات الجانب الشرقي
				//401
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=149.5;
				box51.position.y=22.5;
				box51.position.z=172;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/401.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				//402
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=149.5;
				box51.position.y=22.5;
				box51.position.z=217;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/402.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				//إنشاء لوحات الجانب الشمالي
				//403
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=124;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/403.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//404
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=81;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/404.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				
				//إنشاء لوحات الجانب الغربي
				//405
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=50.5;
				box31.position.y=22.5;
				box31.position.z=222;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/405.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//406
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=50.5;
				box31.position.y=22.5;
				box31.position.z=178;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/406.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				//إنشاء لوحات الجانب الجنوبي
			
				
				///////
				//إنشاء لوحات القاعة رقم 5
				
				//إنشاء لوحات الجانب الشرقي
				//501
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=49.5;
				box51.position.y=22.5;
				box51.position.z=172;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/501.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				//502
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=49.5;
				box51.position.y=22.5;
				box51.position.z=217;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/502.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				
				//إنشاء لوحات الجانب الشمالي
				//503
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=28;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/503.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//504
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-17;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/504.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				//505
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-49.5;
				box31.position.y=22.5;
				box31.position.z=222;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/505.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//506
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-49.5;
				box31.position.y=22.5;
				box31.position.z=178;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/506.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				
				
				//إنشاء لوحات الجانب الجنوبي
				
				
				///////
				//إنشاء لوحات القاعة رقم 6
				
				//إنشاء لوحات الجانب الشرقي
				//601
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=-50.5;
				box51.position.y=22.5;
				box51.position.z=172;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/601.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				//602
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box51.position.x=-50.5;
				box51.position.y=22.5;
				box51.position.z=217;
				box51.rotation.x=-3.14/2;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/602.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				
				//إنشاء لوحات الجانب الشمالي
				//603
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-72;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/603.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//604
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-117;
				box21.position.y= 22.5;
				box21.position.z=249.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/604.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				//605
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-149.5;
				box31.position.y=22.5;
				box31.position.z=222;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/605.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//606
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-149.5;
				box31.position.y=22.5;
				box31.position.z=178;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/606.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				
				//إنشاء لوحات الجانب الجنوبي
				
				
				
				///////
				//إنشاء لوحات القاعة رقم 7
				
				//إنشاء لوحات الجانب الشرقي
				
				
				//إنشاء لوحات الجانب الشمالي
				//701
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-172;
				box21.position.y= 22.5;
				box21.position.z=149.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/701.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//702
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-217;
				box21.position.y= 22.5;
				box21.position.z=149.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/702.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				
				//إنشاء لوحات الجانب الغربي
				//703
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=128;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/703.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//704
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=83;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/704.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				//إنشاء لوحات الجانب الجنوبي
				//705
				
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", {  width: 0.2, height: 28, depth:20  }, scene);
				box41.position.x=-224;
				box41.position.y=22.5;
				box41.position.z=50.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/705.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
			
				//706
				
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20  }, scene);
				box41.position.x=-176;
				box41.position.y=22.5;
				box41.position.z=50.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/706.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				
				
				///////
				//إنشاء لوحات القاعة رقم 8
				
				//إنشاء لوحات الجانب الشرقي
				
				
				//إنشاء لوحات الجانب الشمالي
				//801
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-176;
				box21.position.y= 22.5;
				box21.position.z=49.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/801.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//802
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-219;
				box21.position.y= 22.5;
				box21.position.z=49.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/802.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				//803
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=24;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/803.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//804
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=-19;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/804.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				//إنشاء لوحات الجانب الجنوبي
				//805
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=-225;
				box41.position.y=22.5;
				box41.position.z=-49.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/805.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				//806
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=-176;
				box41.position.y=22.5;
				box41.position.z=-49.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/806.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				
				///////
				//إنشاء لوحات القاعة رقم 9
				//إنشاء لوحات الجانب الشرقي
				
				
				//إنشاء لوحات الجانب الشمالي
				//901
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-176;
				box21.position.y= 22.5;
				box21.position.z=-50.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/901.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				//902
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 28, height: 20, depth: 0.2 }, scene);
				box21.position.x=-219;
				box21.position.y= 22.5;
				box21.position.z=-50.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/902.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				//إنشاء لوحات الجانب الغربي
				//903
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 28, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=-76;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/903.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				//904
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 20, depth:20 }, scene);
				box31.position.x=-249.5;
				box31.position.y=22.5;
				box31.position.z=-119;
				box31.rotation.x=3.14/2;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/904.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				//إنشاء لوحات الجانب الجنوبي
				//905
				
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=-224;
				box41.position.y=22.5;
				box41.position.z=-149.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/905.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
			
				//906
				
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 28, depth:20 }, scene);
				box41.position.x=-176;
				box41.position.y=22.5;
				box41.position.z=-149.5;
				box41.rotation.x=-3.14/2;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/906.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
				
				
					
		
            // Enable VR
            var vrHelper = scene.createDefaultVRExperience({createDeviceOrientationCamera:false, useXR: true});
        
        
            vrHelper.onAfterEnteringVRObservable.add(()=>{
                if(scene.activeCamera === vrHelper.vrDeviceOrientationCamera){
                    BABYLON.FreeCameraDeviceOrientationInput.WaitForOrientationChangeAsync(1000).then(()=>{
                        // Successfully received sensor input
                    }).catch(()=>{
                        alert("Device orientation camera is being used but no sensor is found, prompt user to enable in safari settings");
                    })
                }
            })
			
				////////
				
				/*التحكم فى المشهد من خلال الأزرار والماوس*/
					/*التحكم فى المشهد من خلال الأزرار والماوس*/

//1
//شمال

   var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/22.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = -3.14/2;
	button.cornerRadius = 20;
	button.left = "75px";
	button.top = "500px";
	 
	
	
	
	 button.onPointerUpObservable.add(function () {

		 if (z < 30 ) {
                    camera.position.z += 1;
					z++;
					//التحكم فى الصوت عند الانتقال شمالا
					pz++;
					}
					
					//التحرك إلى الشمال في المنطقة 11
                    if( z <= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 }
					//التحرك إلى الشمال في المنطقة 10
					  if( z <= 144 && z >= -146 &&  x <= 146 &&  x >= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					//الانتقال إلى الشمال في المنطقة 1
					  if( z <= -56 && z >= -146 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					  
					 //الانتقال إلى الشمال في المنطقة 2
					  if( z <= 44 && z >= -46 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					 //الانتقال إلى الشمال في المنطقة 3
					 if( z <= 144 && z >= 54 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					
					 //الانتقال إلى الشمال في المنطقة 4
					  if( z <= 244 && z >= 146 &&  x <= 146 &&  x >= 54 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					 
					 //الانتقال إلى الشمال في المنطقة 5
					 if( z <= 244 && z >= 146 &&  x <= 46 &&  x >= -46 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					 //الانتقال إلى الشمال في المنطقة 6
					 if( z <= 244 && z >= 146 &&  x <= -54 &&  x >= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					  /*
					  */
					 //الانتقال إلى الشمال في المنطقة 7
					if( z <= 144 && z >= 54 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					  //الانتقال إلى الشمال في المنطقة 8
					 if( z <= 44 && z >= -46 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					
					  //الانتقال إلى الشمال في المنطقة 9
					
					  if( z <= -56 && z >= -146 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					
				        });
    advancedTexture.addControl(button); 
 

//2
//شرق

var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/22.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 0;
	button.cornerRadius = 20;
	button.left = "125px";
	button.top = "525px";
	
	
	
	
	 
	 button.onPointerUpObservable.add(function () {

		 
					
				//الانتقال إلى الشرق في المنطقة 10
					if(  x >= -146 &&  x <= 144  && z >= -146 && z <= 146 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 1
					if( x >= 146 && x <=244  && z >= -146 && z <= -56 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 2
					if( x >= 146 && x <=244  && z >= -46 && z <= 44 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					//الانتقال إلى الشرق في المنطقة 3
					if( x >= 146 && x <=244  && z >= 54 && z <= 144 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
							
					//الانتقال إلى الشرق في المنطقة 4
					if( x >= 54 && x <=144  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 5
					if( x >= -46 && x <=44  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 6
					if( x >= -146 && x <=-56  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						/*
					*/		
					//الانتقال إلى الشرق في المنطقة 7
					if( x >= -246 && x <=-146  && z >= 54 && z <= 146 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 8
					if( x >= -246 && x <=-146  && z >= -46 && z <= 46 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 9
					
					if( x >= -246 && x <=-146  && z >= -146 && z <= -54 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}	
					
				
					});
    advancedTexture.addControl(button); 


//3
//جنوب
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/22.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 3.14/2;
	button.cornerRadius = 20;
	button.left = "75px";
	button.top = "550px";
	 
	button.onPointerUpObservable.add(function () { 
	
	
					
				//الانتقال إلى الجنوب في المنطقة 11
                            if( z >= -450 && x <=20 && x >= -20){
                        camera.position.z -= 2;
						z -= 2;
						pz -=2;
						
						}
						
					//الانتقال إلى الجنوب في المنطقة 10
					  if( z <= 146 && z >= -144 &&  x <= 146 &&  x >= -146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					//الانتقال إلى الجنوب في المنطقة 1
					  if( z <= -54 && z >= -144 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					 //الانتقال إلى الجنوب في المنطقة 2
					  if( z <= 46 && z >= -44 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 3
					  if( z <= 146 && z >= 56 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					  
					//الانتقال إلى الجنوب في المنطقة 4
					  if( z <= 246 && z >= 146 &&  x <= 146 &&  x >= 54 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					//الانتقال إلى الجنوب في المنطقة 5
					  if( z <= 246 && z >= 146 &&  x <= 46 &&  x >= -46 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					//الانتقال إلى الجنوب في المنطقة 6
					  if( z <= 246 && z >= 146 &&  x <= -54 &&  x >= -146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 /*
					  */
					//الانتقال إلى الجنوب في المنطقة 7
					  if( z <= 146 && z >= 56 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 8
					  if( z <= 46 && z >= 44 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 //الانتقال إلى الجنوب في المنطقة 9
					  if( z <= -54 && z >= -144 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }	
					
					
					
                });
    advancedTexture.addControl(button); 



   //4
   //غرب
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/22.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 3.14;
	button.cornerRadius = 20;
	button.left = "25px";
	button.top = "525px";
	 
	  button.onPointerUpObservable.add(function () {

		 
					
				//الانتقال إلى الغرب في المنطق 10
					if(  x >= -144 &&  x <= 146  && z >= -146 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					
					//الانتقال إلى الغرب في المنطقة 1
					
					if(  x >= 146 &&  x <= 246  && z >= -146 && z <= -54 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
								
					//الانتقال إلى الغرب في المنطقة 2
					
					if(  x >= 146 &&  x <= 246  && z >= -46 && z <= 46 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					//الانتقال إلى الغرب في المنطقة 3
					
					if( x >= 146 &&  x <= 246  && z >= 54 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					//الانتقال إلى الغرب في المنطقة 4
					
					if(  x >= 56 &&  x <= 146  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 5
					
					if(  x >= -44 &&  x <= 46  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 6
					
					if(  x >= -144 &&  x <= -54  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						/*
					*/	
					//الانتقال إلى الغرب في المنطقة 7
					
					
					if(  x >= -244 &&  x <= -146  && z >= -146 && z <= -54 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					//الانتقال إلى الغرب في المنطقة 8
					
					
					if(  x >= -244 &&  x <= -146  && z >= -46 && z <= 46 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 9
					
					if(  x >= -244 &&  x <= -146  && z >= 54 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}	
					
			
                });
    advancedTexture.addControl(button); 


//5
//استدارة لأعلى
   var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/23.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = -3.14/2;
	button.cornerRadius = 20;
	button.left = "-75px";
	button.top = "500px";
	//النظر إلى أعلى
	 button.onPointerUpObservable.add(function () {
                    camera.rotation.x -= 0.1;
                });
    advancedTexture.addControl(button); 
 

//6
//استدارة يمين
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/23.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 0;
	button.cornerRadius = 20;
	button.left = "-25px";
	button.top = "525px";
	 
	  //الاستدارة يمينا
	   button.onPointerUpObservable.add(function () {
                    camera.rotation.y += 0.1;
					
                });
    advancedTexture.addControl(button); 


//7
//استدارة لأسفل
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/23.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 3.14/2;
	button.cornerRadius = 20;
	button.left = "-75px";
	button.top = "550px";
	 //الاستدارة لأسفل
	button.onPointerUpObservable.add(function () {
                    camera.rotation.x += 0.1;
                });
    advancedTexture.addControl(button); 



   //8
   //استدارة يسار
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button = BABYLON.GUI.Button.CreateImageOnlyButton("but", "img/23.jpg");
	 button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
	button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    button.width = "40px";
    button.height = "40px";
    button.color = "white";
    button.background = "green";
	button.rotation = 3.14;
	button.cornerRadius = 20;
	button.left = "-125px";
	button.top = "525px";
	 //الاستدارة يسارا
	 button.onPointerUpObservable.add(function () {
                    camera.rotation.y -= 0.1;
                });
    advancedTexture.addControl(button); 



				/*التحكم فى المشهد من خلال لوحة المفاتيح*/
				
				var gizmoManager = new BABYLON.GizmoManager(scene)
				document.onkeydown = (e)=>{
                if( e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 68  || e.keyCode == 65  || e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 87 || e.keyCode == 83 ){
                  
                    gizmoManager.positionGizmoEnabled = false;
                    gizmoManager.rotationGizmoEnabled = false;
                    gizmoManager.scaleGizmoEnabled = false;
                    gizmoManager.boundingBoxGizmoEnabled = false;
					
					//الانتقال إلى الشمال باستخدام لوحة المفاتيح
					//التحرك إلى الشمال في المنطقة 11
                    if(e.keyCode == 38 && z <= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 }
					//التحرك إلى الشمال في المنطقة 10
					  if(e.keyCode == 38 && z <= 144 && z >= -146 &&  x <= 146 &&  x >= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					//الانتقال إلى الشمال في المنطقة 1
					  if(e.keyCode == 38 && z <= -56 && z >= -146 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					  
					 //الانتقال إلى الشمال في المنطقة 2
					  if(e.keyCode == 38 && z <= 44 && z >= -46 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					 //الانتقال إلى الشمال في المنطقة 3
					 if(e.keyCode == 38 && z <= 144 && z >= 54 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					
					 //الانتقال إلى الشمال في المنطقة 4
					  if(e.keyCode == 38 && z <= 244 && z >= 146 &&  x <= 146 &&  x >= 54 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					 
					 //الانتقال إلى الشمال في المنطقة 5
					 if(e.keyCode == 38 && z <= 244 && z >= 146 &&  x <= 46 &&  x >= -46 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					 //الانتقال إلى الشمال في المنطقة 6
					 if(e.keyCode == 38 && z <= 244 && z >= 146 &&  x <= -54 &&  x >= -146 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					 
					}
					  /*
					  */
					 //الانتقال إلى الشمال في المنطقة 7
					if(e.keyCode == 38 && z <= 144 && z >= 54 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					  //الانتقال إلى الشمال في المنطقة 8
					 if(e.keyCode == 38 && z <= 44 && z >= -46 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					
					  //الانتقال إلى الشمال في المنطقة 9
				
					  if(e.keyCode == 38 && z <= -56 && z >= -146 &&  x <= -146 &&  x >= -246 ) {
                    camera.position.z += 2;
					 z += 2;
					pz += 2;
					}
					 
					 /*
					 */
					//الانتقال إلى الجنوب باستخدام لوحة المفاتيح
					//الانتقال إلى الجنوب في المنطقة 11
                            if(e.keyCode == 40 && z >= -450 && x <=20 && x >= -20){
                        camera.position.z -= 2;
						z -= 2;
						pz -=2;
						
						}
						
					//الانتقال إلى الجنوب في المنطقة 10
					  if(e.keyCode == 40 && z <= 146 && z >= -144 &&  x <= 146 &&  x >= -146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					//الانتقال إلى الجنوب في المنطقة 1
					  if(e.keyCode == 40 && z <= -54 && z >= -144 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					 //الانتقال إلى الجنوب في المنطقة 2
					  if(e.keyCode == 40 && z <= 46 && z >= -44 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 3
					  if(e.keyCode == 40 && z <= 146 && z >= 56 &&  x <= 246 &&  x >= 146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					  
					//الانتقال إلى الجنوب في المنطقة 4
					  if(e.keyCode == 40 && z <= 246 && z >= 146 &&  x <= 146 &&  x >= 54 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					
					//الانتقال إلى الجنوب في المنطقة 5
					  if(e.keyCode == 40 && z <= 246 && z >= 146 &&  x <= 46 &&  x >= -46 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					//الانتقال إلى الجنوب في المنطقة 6
					  if(e.keyCode == 40 && z <= 246 && z >= 146 &&  x <= -54 &&  x >= -146 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 /*
					  */
					//الانتقال إلى الجنوب في المنطقة 7
					  if(e.keyCode == 40 && z <= 146 && z >= 56 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 8
					  if(e.keyCode == 40 && z <= 46 && z >= 44 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 //الانتقال إلى الجنوب في المنطقة 9
					  if(e.keyCode == 40 && z <= -54 && z >= -144 &&  x <=-146 &&  x >= -246 ) {
                    camera.position.z -= 2;
					 z -=2;
					pz -=2;
					 }
					 /*
					 */
					 
					//الانتقال إلى الشرق باستخدام لوحة المفاتيح
					
					//الانتقال إلى الشرق في المنطقة 10
					if(e.keyCode == 39   &&  x >= -146 &&  x <= 144  && z >= -146 && z <= 146 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 1
					if(e.keyCode == 39   && x >= 146 && x <=244  && z >= -146 && z <= -56 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 2
					if(e.keyCode == 39   && x >= 146 && x <=244  && z >= -46 && z <= 44 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					//الانتقال إلى الشرق في المنطقة 3
					if(e.keyCode == 39   && x >= 146 && x <=244  && z >= 54 && z <= 144 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
							
					//الانتقال إلى الشرق في المنطقة 4
					if(e.keyCode == 39   && x >= 54 && x <=144  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 5
					if(e.keyCode == 39   && x >= -46 && x <=44  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 6
					if(e.keyCode == 39   && x >= -146 && x <=-56  && z >= 146 && z <= 246 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						/*
					*/		
					//الانتقال إلى الشرق في المنطقة 7
					if(e.keyCode == 39   && x >= -246 && x <=-146  && z >= 54 && z <= 146 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						
					//الانتقال إلى الشرق في المنطقة 8
					if(e.keyCode == 39   && x >= -246 && x <=-146  && z >= -46 && z <= 46 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
					
					//الانتقال إلى الشرق في المنطقة 9
					
					if(e.keyCode == 39   && x >= -246 && x <=-146  && z >= -146 && z <= -54 ){
                        camera.position.x += 2;
						x += 2;
						px += 2;
						}
						/*
						*/
					
						
					//الانتقال إلى الغرب باستخدام لوحة المفاتيح
					//الانتقال إلى الغرب في المنطق 10
					if(e.keyCode == 37   &&  x >= -144 &&  x <= 146  && z >= -146 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					
					//الانتقال إلى الغرب في المنطقة 1
					
					if(e.keyCode == 37   &&  x >= 146 &&  x <= 246  && z >= -146 && z <= -54 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
								
					//الانتقال إلى الغرب في المنطقة 2
					
					if(e.keyCode == 37   &&  x >= 146 &&  x <= 246  && z >= -46 && z <= 46 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					//الانتقال إلى الغرب في المنطقة 3
					
					if(e.keyCode == 37   &&  x >= 146 &&  x <= 246  && z >= 54 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					//الانتقال إلى الغرب في المنطقة 4
					
					if(e.keyCode == 37   &&  x >= 56 &&  x <= 146  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 5
					
					if(e.keyCode == 37   &&  x >= -44 &&  x <= 46  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 6
					
					if(e.keyCode == 37   &&  x >= -144 &&  x <= -54  && z >= 146 && z <= 246 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						/*
					*/	
					//الانتقال إلى الغرب في المنطقة 7
					
					
					if(e.keyCode == 37   &&  x >= -244 &&  x <= -146  && z >= -146 && z <= -54 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					//الانتقال إلى الغرب في المنطقة 8
					
					
					if(e.keyCode == 37   &&  x >= -244 &&  x <= -146  && z >= -46 && z <= 46 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
						
					//الانتقال إلى الغرب في المنطقة 9
					
					if(e.keyCode == 37   &&  x >= -244 &&  x <= -146  && z >= 54 && z <= 146 ){
                        camera.position.x -= 2;
						x -= 2;
						px -= 2;
						}
					
					/*
					*/
						
					
					
					//الاستدارة إلى اليمين باستخدام لوحة المفاتيح
					if(e.keyCode == 68) {
					camera.rotation.y += 0.1;
					}
					
					//الاستدارة إلى اليسار باستخدام لوحة المفاتيح
					if(e.keyCode == 65) {
					camera.rotation.y -= 0.1;
					}
					
					
					//الاستدارة إلى أعلى باستخدام لوحة المفاتيح
					if(e.keyCode == 87 ) {
					camera.rotation.x -= 0.1;
					}
					
					//الاستدارة إلى أسفل باستخدام لوحة المفاتيح
					if(e.keyCode == 83) {
					camera.rotation.x += 0.1;
					}
									
                }
				}
				
				document.onkeydown({key: "l"})
				
				

              //يجب إدارج كل شى قبل هذا السطر
              return scene;
			};
          
        
//كود إنشاء engine		
	var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
 
 
 
//كود إعادة إنتاج المشهد
	var scene = createScene();
	
		engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
            }
		


 
        });
		

        window.addEventListener("resize", function () {
            engine.resize();
        });
		
		//نهاية كود مشهد بابلون
		
		
		
		//كود التحكم فى التعليقات داخل قاعة العرض
		//متغيرات يجب إنشائها لكل لوحة	
		var pic1=0;
		var p1=0;
		var pic2=0;
		var p2=0;
		var pic3=0;
		var p3=0;
		var pic4=0;
		var p4=0;
		var pic5=0;
		var p5=0;
		var pic6=0;
		var p6=0;
		var pic7=0;
		var p7=0;
		var pic8=0;
		var p8=0;
		var pic9=0;
		var p9=0;
		var pic10=0;
		var p10=0;
		var pic11=0;
		var p11=0;
                var pic12=0;
		var p12=0;
                var pic13=0;
		var p13=0;
                var pic14=0;
		var p14=0;
                var pic15=0;
		var p15=0;
                var pic16=0;
		var p16=0;
                var pic17=0;
		var p17=0;
                var pic18=0;
		var p18=0;
                var pic19=0;
		var p19=0;
		
		
		
		var myT =setInterval( function(){
		
			
		//التحكم فى التعليق العام
		
		if(pz<=250 && pz>=-450  && px<250 && px>-250 && p1==0){pic1=1; p1=1;};
		for (d=1; d<2; d++){
			if (pic1==1){
				window.d1.innerHTML = "<audio src='audio/1.m4a' autoplay loop   />";
				pic1=0;
			};};
		/*
		//التحكم فى التعليق رقم 1
		
		if(pz<=-27 && pz>=-31  && px<32 && px>12 && p1==0){pic1=1; p1=1;};
		for (d=1; d<2; d++){
			if (pic1==1){
				window.d1.innerHTML = "<audio src='audio/101.m4a' autoplay controls  />";
				pic1=0;
			};};
		
		
		//التحكم فى التعليق رقم 2
		
		if(pz<-5 && pz>-25  && px<=31 && px>=27 && p2==0){pic2=1; p2=1;};
		for (d=1; d<2; d++){
			if (pic2==1){
				window.d1.innerHTML = "<audio src='audio/102.m4a' autoplay controls />";
				pic2=0;
			};};
		
		
		
		//التحكم فى التعليق رقم 3
		
		
		if(pz<25 && pz>5 && px<=31 && px>=27 && p3==0){pic3=1; p3=1;};
		for (d=1; d<2; d++){
			if (pic3==1){
				window.d1.innerHTML = "<audio src='audio/103.m4a' autoplay controls />";
				pic3=0;
			};};
		
		//التحكم فى التعليق رقم 4
		
		
		if(pz<=31 && pz>=27 && px<25 && px>=5 && p4==0){pic4=1; p4=1;};
		for (d=1; d<2; d++){
			if (pic4==1){
				window.d1.innerHTML = "<audio src='audio/104.m4a' autoplay controls />";
				pic4=0;
			};};
		
		//التحكم فى التعليق رقم 5
		
		
		if(pz<=31 && pz>=27 && px<-5 && px>-25 && p5==0){pic5=1; p5=1;};
		for (d=1; d<2; d++){
			if (pic5==1){
				window.d1.innerHTML = "<audio src='audio/105.m4a' autoplay controls />";
				pic5=0;
			};};
		
		//التحكم فى التعليق رقم 6
		
		
		if(pz<25 && pz>5 && px<=-27 && px>=-31 && p6==0){pic6=1; p6=1;};
		for (d=1; d<2; d++){
			if (pic6==1){
				window.d1.innerHTML = "<audio src='audio/106.m4a' autoplay controls />";
				pic6=0;
			};};
		
		//التحكم فى التعليق رقم 7
		
		
		if(pz<-5 && pz>-25 && px<=-27 && px>=-31 && p7==0){pic7=1; p7=1;};
		for (d=1; d<2; d++){
			if (pic7==1){
				window.d1.innerHTML = "<audio src='audio/107.m4a' autoplay controls />";
				pic7=0;
			};};
		
		//التحكم فى التعليق رقم 8
		
		
		if(pz<=-27 && pz>=-31 && px<-12 && px>-32 && p8==0){pic8=1; p8=1;};
		for (d=1; d<2; d++){
			if (pic8==1){
				window.d1.innerHTML = "<audio src='audio/108.m4a' autoplay controls />";
				pic8=0;
			};};
		
		//التحكم فى التعليق رقم 9
		
		
		if(pz<-7 && pz>-17 && px<-27 && px>-31 && p9==0){pic9=1; p9=1;};
		for (d=1; d<2; d++){
			if (pic9==1){
				window.d1.innerHTML = "<audio src='audio/116.m4a' autoplay controls />";
				pic9=0;
			};};
		
		
		//التحكم فى التعليق رقم 10
				
		
		if(pz<-19 && pz>-28 && px<-27 && px>-31 && p10==0){pic10=1; p10=1;};
		for (d=1; d<2; d++){
			if (pic10==1){
				window.d1.innerHTML = "<audio src='audio/117.m4a' autoplay controls />";
				pic10=0;
			};};
		
		//التحكم فى التعليق رقم 11
		
		
		if(pz<-27 && pz>-31 && px<-19 && px>-28 && p11==0){pic11=1; p11=1;};
		for (d=1; d<2; d++){
			if (pic11==1){
				window.d1.innerHTML = "<audio src='audio/118.m4a' autoplay controls />";
				pic11=0;
			};};
		
                
                //التحكم فى التعليق رقم 12
		
		
		if(pz<-27 && pz>-31 && px<-7 && px>-17 && p12==0){pic12=1; p12=1;};
		for (d=1; d<2; d++){
			if (pic12==1){
				window.d1.innerHTML = "<audio src='audio/119.m4a' autoplay controls />";
				pic12=0;
			};};
		
		
                //التحكم فى التعليق رقم 13
		
		
		if(pz<-27 && pz>-31 && px<17 && px>7 && p13==0){pic13=1; p13=1;};
		for (d=1; d<2; d++){
			if (pic13==1){
				window.d1.innerHTML = "<audio src='audio/101.m4a' autoplay controls />";
				pic13=0;
			};};
		
                
                //التحكم فى التعليق رقم 14
		
		
		if(pz<-27 && pz>-31 && px<28 && px>19 && p14==0){pic14=1; p14=1;};
		for (d=1; d<2; d++){
			if (pic14==1){
				window.d1.innerHTML = "<audio src='audio/102.m4a' autoplay controls />";
				pic14=0;
			};};
		
		//التحكم فى التعليق رقم 15
		
		
		if(pz<-19 && pz>-28 && px<31 && px>27 && p15==0){pic15=1; p15=1;};
		for (d=1; d<2; d++){
			if (pic15==1){
				window.d1.innerHTML = "<audio src='audio/103.m4a' autoplay controls />";
				pic15=0;
			};};
		
                //التحكم فى التعليق رقم 16
		
		
		if(pz<-7 && pz>-17 && px<31 && px>27 && p16==0){pic16=1; p16=1;};
		for (d=1; d<2; d++){
			if (pic16==1){
				window.d1.innerHTML = "<audio src='audio/104.m4a' autoplay controls />";
				pic16=0;
			};};
		
                
                //التحكم فى التعليق رقم 17
		
		
		if(pz<6 && pz>-6 && px<31 && px>27 && p17==0){pic17=1; p17=1;};
		for (d=1; d<2; d++){
			if (pic17==1){
				window.d1.innerHTML = "<audio src='audio/105.m4a' autoplay controls />";
				pic17=0;
			};};
		
                //التحكم فى التعليق رقم 18
		
		
		if(pz<17 && pz>7 && px<31 && px>27 && p18==0){pic18=1; p18=1;};
		for (d=1; d<2; d++){
			if (pic18==1){
				window.d1.innerHTML = "<audio src='audio/106.m4a' autoplay controls />";
				pic18=0;
			};};
		
                //التحكم فى التعليق رقم 19
		
		
		if(pz<28 && pz>19 && px<31 && px>27 && p19==0){pic19=1; p19=1;};
		for (d=1; d<2; d++){
			if (pic19==1){
				window.d1.innerHTML = "<audio src='audio/107.m4a' autoplay controls />";
				pic19=0;
			};};
		
          */      
		//نهاية المؤقت	
		}, 1000);
		
	
		