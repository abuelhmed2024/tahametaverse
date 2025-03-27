/*كود قاعة الأجرام السماوية*/
	
		//كود ربط القماشة بجافا اسكريبت	
		var canvas = document.getElementById("renderCanvas");
		// متغيرات التحكم فى أنتاج التعليقات داخل القاعة
			var px =0;
			var pz=-225;
			
			//متغير عام للتحكم فى الكاميرا
			var x = 0;
			var z = -225;
			
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
				camera.position.y = 9;
				camera.position.z = z;
				camera.setTarget(BABYLON.Vector3.Zero());
				//يتم التحكم فى استدارة الكميرا من خلال المحور x و y
				camera.rotation.x= 0;
				camera.rotation.y= 0;
				camera.rotation.z= 0;
				camera.attachControl(canvas, true);

				
                //كود إنشاء الإضاءة
				//إضاءة 1
                var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 25, 0), scene);
			    light.intensity = 4;
				
				
				//إضاءة 2
				var light3 = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(0, 25, 0), scene);
				 light3.intensity = 6;
				//إضاءة 3
				/*
				var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 5,-6), scene);
				  light1.intensity = 15;
				*/
				
				
				//إضاءة 4
				/*
				var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(6, 5, 3.5), scene);
				light2.intensity = 5;
				*/
				
          
           
				/////////////////////
				//إنشاء الأرضية والسقف
				
				//إنشاء الأرضية
				var box1 = new BABYLON.MeshBuilder.CreateBox("box2", { width:550, height: 0.2, depth:550 }, scene);
				box1.position.x=0;
				box1.position.y=0;
				box1.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/floor.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box1.material = material;
				//إنشاء سقف البهو
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 150, height: 0.2, depth:150 }, scene);
				box6.position.x=0;
				box6.position.y=40;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/10000.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 1 إلى 3
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 50, height: 0.2, depth:150 }, scene);
				box6.position.x=100;
				box6.position.y=30;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/10000.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 4 إلى 6
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 150, height: 0.2, depth:50 }, scene);
				box6.position.x=0;
				box6.position.y=30;
				box6.position.z=100;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/10000.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				//إنشاء سقف القاعات من 7 إلى 9
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 50, height: 0.2, depth:150 }, scene);
				box6.position.x=-100;
				box6.position.y=30;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/10000.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				
				
				/////////////////////
				//إنشاء الجدران
				
				//إنشاء جدران الواجهة الأمامية
				//جدار الواجهة الأمامية رقم 1
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=15;
				box2.position.z=-75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 40, depth: 0.2 }, scene);
				box2.position.x=50;
				box2.position.y=20;
				box2.position.z=-75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 3
				
				//جدار الواجهة الأمامية رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 40, depth: 0.2 }, scene);
				box2.position.x=-50;
				box2.position.y=20;
				box2.position.z=-75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الواجهة الأمامية رقم 5
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=15;
				box2.position.z=-75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء جدران الجانب الشرقي
				//جدار الجانب الشرقي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=125;
				box5.position.y=15;
				box5.position.z=-50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=15;
				box2.position.z=-25;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشرقي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=125;
				box5.position.y=15;
				box5.position.z=0;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=15;
				box2.position.z=25;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشرقي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=125;
				box5.position.y=15;
				box5.position.z=50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشرقي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=100;
				box2.position.y=15;
				box2.position.z=75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				//إنشاء جدران الجانب الشمالي
				//جدار الجانب الشمالي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=75;
				box5.position.y=15;
				box5.position.z=100;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=50;
				box2.position.y=15;
				box2.position.z=125;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=25;
				box5.position.y=15;
				box5.position.z=100;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=0;
				box2.position.y=15;
				box2.position.z=125;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=-25;
				box5.position.y=15;
				box5.position.z=100;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الشمالي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=-50;
				box2.position.y=15;
				box2.position.z=125;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الشمالي رقم 7
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=-75;
				box5.position.y=15;
				box5.position.z=100;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				
				//إنشاء جدران الجانب الغربي
				//جدار الجانب الغربي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=-125;
				box5.position.y=15;
				box5.position.z=-50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=15;
				box2.position.z=-25;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الغربي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=-125;
				box5.position.y=15;
				box5.position.z=0;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 4
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=15;
				box2.position.z=25;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//جدار الجانب الغربي رقم 5
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 30 }, scene);
				box5.position.x=-125;
				box5.position.y=15;
				box5.position.z=50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//جدار الجانب الغربي رقم 6
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 30, depth: 0.2 }, scene);
				box2.position.x=-100;
				box2.position.y=15;
				box2.position.z=75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				
				/////////////////////
				//إنشاء الأعمدة
				/////
				//إنشاء أعمدة الواجهة الأمامية
				
				//عمود الواجهة الأمامية رقم 1
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=125;
				cylinder1.position.y=15;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الواجهة الأمامية رقم 2
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=75;
				cylinder1.position.y=20;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الواجهة الأمامية رقم 3
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=25;
				cylinder1.position.y=20;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الواجهة الأمامية رقم 4
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-25;
				cylinder1.position.y=20;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الواجهة الأمامية رقم 5
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-75;
				cylinder1.position.y=20;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الواجهة الأمامية رقم 6
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-125;
				cylinder1.position.y=15;
				cylinder1.position.z=-75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				/////
				//إنشاء أعمدة الجانب الشرقي
				//عمود الجانب الشرقي رقم 1
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=125;
				cylinder1.position.y=15;
				cylinder1.position.z=-25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الجانب الشرقي رقم 2
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=75;
				cylinder1.position.y=20;
				cylinder1.position.z=-25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الجانب الشرقي رقم 3
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=125;
				cylinder1.position.y=15;
				cylinder1.position.z=25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الجانب الشرقي رقم 4
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=75;
				cylinder1.position.y=20;
				cylinder1.position.z=25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الجانب الشرقي رقم 5
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=125;
				cylinder1.position.y=15;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//عمود الجانب الشرقي رقم 6
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=75;
				cylinder1.position.y=20;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				/////
				//إنشاء أعمدة الجانب الشمالي
				//إنشاء عمود الجانب الشمالي رقم 1
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=75;
				cylinder1.position.y=15;
				cylinder1.position.z=125;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الشمالي رقم 2
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=25;
				cylinder1.position.y=15;
				cylinder1.position.z=125;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الشمالي رقم 3
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=25;
				cylinder1.position.y=20;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الشمالي رقم 4
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-25;
				cylinder1.position.y=15;
				cylinder1.position.z=125;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الشمالي رقم 5
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-25;
				cylinder1.position.y=20;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الشمالي رقم 6
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-75;
				cylinder1.position.y=15;
				cylinder1.position.z=125;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				
				/////
				//إنشاء أعمدة الجانب الغربي
				//إنشاء عمود الجانب الغربي رقم 1
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-75;
				cylinder1.position.y=20;
				cylinder1.position.z=-25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الغربي رقم 2
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-125;
				cylinder1.position.y=15;
				cylinder1.position.z=-25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الغربي رقم 3
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-75;
				cylinder1.position.y=20;
				cylinder1.position.z=25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الغربي رقم 4
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-125;
				cylinder1.position.y=15;
				cylinder1.position.z=25;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الغربي رقم 5
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:40,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-75;
				cylinder1.position.y=20;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				//إنشاء عمود الجانب الغربي رقم 6
				var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:30,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-125;
				cylinder1.position.y=15;
				cylinder1.position.z=75;
				var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic;
				
				
				
				/////////////////////
				//إنشاء الكمر الداخلي
				//إنشاء الكمر لداخلي للجانب الشرقي
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=75;
				box5.position.y=35;
				box5.position.z=-50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 2
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=75;
				box5.position.y=35;
				box5.position.z=0;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشرقي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=75;
				box5.position.y=35;
				box5.position.z=50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 1
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 10, depth: 0.2 }, scene);
				box2.position.x=50;
				box2.position.y=35;
				box2.position.z=75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 2
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 10, depth: 0.2 }, scene);
				box2.position.x=0;
				box2.position.y=35;
				box2.position.z=75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجانب الشمالي رقم 3
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 50, height: 10, depth: 0.2 }, scene);
				box2.position.x=-50;
				box2.position.y=35;
				box2.position.z=75;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				
				//إنشاء الكمر الداخلي للجاني الغربي
				//إنشاء الكمر الداخلي للجانب الغربي رقم 1
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=-75;
				box5.position.y=35;
				box5.position.z=-50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الغربي رقم 2
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=-75;
				box5.position.y=35;
				box5.position.z=0;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				//إنشاء الكمر الداخلي للجانب الغربي رقم 3
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 50, depth: 10 }, scene);
				box5.position.x=-75;
				box5.position.y=35;
				box5.position.z=50;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				
				/////////////////////
	
				//إنشاء الوحات
				
				//إنشاء لوحة تعريف القاعة ولوحة التعليميات
				
				//إنشاء لوحات القاعة 1
				
				//إنشاء لوحات القاعة 2
				
				//إنشاء لوحات القاعة 3
				
				//إنشاء لوحات القاعة 4
				
				//إنشاء لوحات القاعة 5
				
				//إنشاء لوحات القاعة 6
				
				//إنشاء لوحات القاعة 7
				
				//إنشاء لوحات القاعة 8
				
				//إنشاء لوحات القاعة 9
				
				/////////////////////
				//
				/*إنشاء الأرضية
				var box1 = new BABYLON.MeshBuilder.CreateBox("box2", { width:300, height: 0.2, depth:300 }, scene);
				box1.position.x=0;
				box1.position.y=0;
				box1.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/floor.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box1.material = material;
				*/
				
				/*إنشاء الجانب الشمالى
				var box2 = new BABYLON.MeshBuilder.CreateBox("box2", { width: 70, height: 20, depth: 0.2 }, scene);
				box2.position.x=0;
				box2.position.y=10;
				box2.position.z=35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box2.material = material;
				*/
				
				/*لوحة التعليمات
				var box22 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 10, height: 7, depth: 0.2 }, scene);
				box22.position.x = 12;
				box22.position.y = 8;
				box22.position.z = -35.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/90.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box22.material = material;
				
				*/
				
				/*4
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 20, height: 15, depth: 0.2 }, scene);
				box21.position.x=15;
				box21.position.y= 10;
				box21.position.z=34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/104.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				*/
				
				
				
				
			
				/*5
				var box22 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 20, height: 15, depth: 0.2 }, scene);
				box22.position.x = -15;
				box22.position.y = 10;
				box22.position.z = 34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/105.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box22.material = material;
				
				*/
				
				
				/*8
				var box23 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 10, height: 15, depth: 0.2 }, scene);
				box23.position.x=-8;
				box23.position.y=10;
				box23.position.z=34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box23.material = material;
				
				*/
                                
				
				
				/*9
				var box23 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 10, height: 15, depth: 0.2 }, scene);
				box23.position.x=-24;
				box23.position.y=10;
				box23.position.z=34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/302.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box23.material = material;
				*/
				
				
				/*5
				var box23 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 10, height: 7, depth: 0.2 }, scene);
				box23.position.x=-24;
				box23.position.y=8;
				box23.position.z=34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/112.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box23.material = material;
				
				*/
				
				/*لوحة تعريف القاعة
				var box24 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 20, height:4, depth: 0.2 }, scene);
				box24.position.x = 0;
				box24.position.y = 16;
				box24.position.z = -35.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/100.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box24.material = material;
				
*/
				
				/*إنشاء الجانب الغربى
				var box3 = new BABYLON.MeshBuilder.CreateBox("box4", { width: 0.2, height: 70, depth: 20 }, scene);
				box3.position.x=-35;
				box3.position.y=10;
				box3.position.z=0;
				box3.rotation.x=1.566;
					var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box3.material = material;
				*/
				
				/*6
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 20, depth:15 }, scene);
				box31.position.x=-34.5;
				box31.position.y=10;
				box31.position.z=15;
				box31.rotation.x=1.566;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/106.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				*/
				
				/*7
				var box32 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height:20, depth:15 }, scene);
				box32.position.x=-34.5;
				box32.position.y=10;
				box32.position.z=-15;
				box32.rotation.x=1.566;
				box32.rotation.y=0;
				box32.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/107.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box32.material = material;
				*/
				
				/*12
				var box32 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height:10, depth:7 }, scene);
				box32.position.x=-34.5;
				box32.position.y=10;
				box32.position.z=-8;
				box32.rotation.x=1.566;
				box32.rotation.y=0;
				box32.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box32.material = material;
				*/
                                
				/*13
				var box32 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height:10, depth:15 }, scene);
				box32.position.x=-34.5;
				box32.position.y=8;
				box32.position.z=-24;
				box32.rotation.x=1.566;
				box32.rotation.y=0;
				box32.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box32.material = material;
				*/
                                
				/*10
				var box32 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height:10, depth:7 }, scene);
				box32.position.x=-34.5;
				box32.position.y=8;
				box32.position.z=-24;
				box32.rotation.x=1.566;
				box32.rotation.y=0;
				box32.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/117.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box32.material = material;
				*/
				
				

				
				

				/*إنشاء الجانب الجنوبى الأعلى
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:70, height: 10, depth: 0.2 }, scene);
				box4.position.x=0;
				box4.position.y=17;
				box4.position.z=-35;
				box4.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				*/
				/*إنشاء الجانب الجنوبي الشرقي
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:30, height: 20, depth: 0.2 }, scene);
				box4.position.x=20;
				box4.position.y=10;
				box4.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				
				*/
				/*إنشاء الجانب الجنوبي الغربي
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:30, height: 20, depth: 0.2 }, scene);
				box4.position.x=-20;
				box4.position.y=10;
				box4.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/52.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				
				*/
				//الجانب الجنوبي الداخلي
				

				/*إنشاء الجانب الجنوبى الأعلى
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:70, height: 10, depth: 0.2 }, scene);
				box4.position.x=0;
				box4.position.y=17;
				box4.position.z=-34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				*/
				/*إنشاء الجانب الجنوبي الشرقي
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:30, height: 20, depth: 0.2 }, scene);
				box4.position.x=20;
				box4.position.y=10;
				box4.position.z=-34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				*/
				
				/*إنشاء الجانب الجنوبي الغربي
				var box4 = new BABYLON.MeshBuilder.CreateBox("box5", { width:30, height: 20, depth: 0.2 }, scene);
				box4.position.x=-20;
				box4.position.y=10;
				box4.position.z=-34.5;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box4.material = material;
				
				*/
				
				
				/*11
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 10, depth:7 }, scene);
				box41.position.x=-24;
				box41.position.y=8;
				box41.position.z=-34.5;
				box41.rotation.x=-1.566;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/118.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				*/
				
				/*12
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 10, depth:7 }, scene);
				box41.position.x=-12;
				box41.position.y=8;
				box41.position.z=-34.5;
				box41.rotation.x=-1.566;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/119.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				*/
				
                                
				/*1
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 20, depth:15 }, scene);
				box41.position.x=18;
				box41.position.y=10;
				box41.position.z=-34;
				box41.rotation.x=-1.566;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/101.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				*/
                                
                                
                                
				/*8
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 20, depth:15 }, scene);
				box41.position.x=-18;
				box41.position.y=10;
				box41.position.z=-34;
				box41.rotation.x=-1.566;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/108.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
                  */              
                                
				//إنشاء الباب فى الجانب الجنوبى
				/*
				var box43 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height: 10, depth:10 }, scene);
				box43.position.x=0;
				box43.position.y=5;
				box43.position.z=-34.5;
				box43.rotation.x=-1.566;
				box43.rotation.y=1.566;
				box43.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/51.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box43.material = material;
				*/
				
				
				
				/*إنشاء الجانب الشرقى
				var box5 = new BABYLON.MeshBuilder.CreateBox("box3", { width: 0.2, height: 70, depth: 20 }, scene);
				box5.position.x=35;
				box5.position.y=10;
				box5.position.z=0;
				box5.rotation.x=1.566;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/53.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box5.material = material;
				
				*/
				/*2
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 20, depth:15 }, scene);
				box51.position.x=34.5;
				box51.position.y=10;
				box51.position.z=-15;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/102.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				*/
				
				/*3 
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 20, depth:15 }, scene);
				box51.position.x=34.5;
				box51.position.y=10;
				box51.position.z=15;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/103.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
                  */             
				
				/*4
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 10, depth:15 }, scene);
				box51.position.x=34.5;
				box51.position.y=10;
				box51.position.z=8;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
                  */              
				
				/*5
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 10, depth:15 }, scene);
				box51.position.x=34.5;
				box51.position.y=10;
				box51.position.z=24;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/301.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
                */                
				
				/*19
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 10, depth:7 }, scene);
				box51.position.x=34.5;
				box51.position.y=8;
				box51.position.z=24;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/107.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
                  */              
				
				
				/*إنشاء السقف
				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 70, height: 0.2, depth:70 }, scene);
				box6.position.x=0;
				box6.position.y=20;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/10000.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				*/
				
				
				//إنشاء عمود الركن الشمالى الغربى
				/*
				 var cylinder1 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:20,diameterTop:5, diameterBottom:5}, scene);
				cylinder1.position.x=-35;
				cylinder1.position.y=10;
				cylinder1.position.z=35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder1.material = plastic
				
				
				//إنشاء عمود الركن الجنوبى الغربى
				 var cylinder2 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:24,diameterTop:5, diameterBottom:5}, scene);
				cylinder2.position.x=-35;
				cylinder2.position.y=12;
				cylinder2.position.z=-35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder2.material = plastic
				
				
				//إنشاء عمود الركن الجنوبى الشرقى
				 var cylinder3 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:24,diameterTop:5, diameterBottom:5}, scene);
				cylinder3.position.x=35;
				cylinder3.position.y=12;
				cylinder3.position.z=-35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder3.material = plastic
				
				*/
				//إنشاء العمود الأفقي الجنوبي
				/*
				 var cylinder2 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:70,diameterTop:5, diameterBottom:5}, scene);
				cylinder2.position.x=0;
				cylinder2.position.y=22;
				cylinder2.position.z=-35;
				cylinder2.rotation.x=0;
				cylinder2.rotation.y=0;
				cylinder2.rotation.z=1.57;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder2.material = plastic
				*/
				
				
				
				
				//إنشاء عمود الركن الشمالى الشرقى
				/*
				 var cylinder4 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:20,diameterTop:5, diameterBottom:5}, scene);
				cylinder4.position.x=35;
				cylinder4.position.y=10;
				cylinder4.position.z=35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				cylinder4.material = plastic
				
				
				
				
				//زخرفة الباب
			
				 var cylinder3 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:12,diameterTop:1, diameterBottom:1}, scene);
				cylinder3.position.x=5;
				cylinder3.position.y=6;
				cylinder3.position.z=-35;
					var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/54.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder3.material = material
				
				//
				
				 var cylinder3 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:12,diameterTop:1, diameterBottom:1}, scene);
				cylinder3.position.x=-5;
				cylinder3.position.y=6;
				cylinder3.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/54.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder3.material = material
				//
					
				 var cylinder2 = new BABYLON.MeshBuilder.CreateCylinder("cylinder", {height:10,diameterTop:1, diameterBottom:1}, scene);
				cylinder2.position.x=0;
				cylinder2.position.y=12;
				cylinder2.position.z=-35;
				cylinder2.rotation.x=0;
				cylinder2.rotation.y=0;
				cylinder2.rotation.z=1.57;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/54.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				cylinder2.material = material;
				//
				 var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
				sphere.position.x=5;
				sphere.position.y=12;
				sphere.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/54.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				sphere.material = material;
				//
				var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
				sphere.position.x=-5;
				sphere.position.y=12;
				sphere.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/54.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				sphere.material = material;
				
				//
				var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 8, segments: 32}, scene);
				sphere.position.x=35;
				sphere.position.y=22;
				sphere.position.z=-35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				sphere.material = plastic;
				
				var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 8, segments: 32}, scene);
				sphere.position.x=-35;
				sphere.position.y=22;
				sphere.position.z=-35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				sphere.material = plastic;
				
				
				
				*/
				
				//البيئة الخارجية
				
				//الجانب الشمالي الخارجى
				
				
				
					/*
				var box21 = new BABYLON.MeshBuilder.CreateBox("box51", { width:70, height: 9, depth: 0.2 }, scene);
				box21.position.x=0;
				box21.position.y= 25;
				box21.position.z=-35;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/61.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box21.material = material;
				
				
				//الجانب الغربي
				
				
		
				var box31 = new BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 300, depth:100 }, scene);
				box31.position.x=-149;
				box31.position.y=50;
				box31.position.z=0;
				box31.rotation.x=1.566;
				box31.rotation.y=0;
				box31.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/62.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box31.material = material;
				
				
				//الجانب الجنوبي
			
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 0.2, height:300, depth:100 }, scene);
				box41.position.x=0;
				box41.position.y=50;
				box41.position.z=-149;
				box41.rotation.x=-1.566;
				box41.rotation.y=1.566;
				box41.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/63.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box41.material = material;
				
                                
				//الجانب الشرقي
				
					
			
				var box51 = BABYLON.MeshBuilder.CreateBox("box51", { width:0.2, height: 300, depth:100 }, scene);
				box51.position.x=149;
				box51.position.y=50;
				box51.position.z=0;
				box51.rotation.x=-1.566;
				box51.rotation.y=0;
				box51.rotation.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/64.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box51.material = material;
				
				
				
				
				//السماء
				

				var box6 = new BABYLON.MeshBuilder.CreateBox("box6", { width: 300, height: 0.2, depth:300 }, scene);
				box6.position.x=0;
				box6.position.y=100;
				box6.position.z=0;
				var material = new BABYLON.StandardMaterial("material", scene);
				material.diffuseTexture = new BABYLON.Texture( "img/65.jpg", scene);
				material.diffuseTexture.hasAlpha = true;
				material.backFaceCulling = false;
				box6.material = material;
				
				//الكمر الجنوبي
				var box41 = new BABYLON.MeshBuilder.CreateBox("box51", { width: 70, height: 2, depth:2 }, scene);
				box41.position.x=0;
				box41.position.y=20;
				box41.position.z=-35;
				 var plastic = new BABYLON.PBRMaterial("plastic", scene);
				plastic.microSurface = 0.96;
				plastic.albedoColor = new BABYLON.Color3(0.6, 0.4, 0.3);
				plastic.reflectivityColor = new BABYLON.Color3(0, 0, 0);
				box41.material = plastic
				
				*/
				/*التحكم فى المشهد من خلال الأزرار والماوس*/
					/*التحكم فى المشهد من خلال الأزرار والماوس*/

//1

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
					
					
				        });
    advancedTexture.addControl(button); 
 

//2
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
	 
	 button.onPointerUpObservable.add(function () { if(x < 30 && z > -30) {
                    camera.position.x += 1;
					x++;
					//التحكم فى الصوت الانتقال شرقا
					px++;
					}
					});
    advancedTexture.addControl(button); 


//3
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
	 
	button.onPointerUpObservable.add(function () { if(z > -225){
                    camera.position.z -= 1;
					z--;
					//التحكم فى الصوت عند الانتقال جنوبا
					pz--;
					}
                });
    advancedTexture.addControl(button); 



   //4
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
	 
	  button.onPointerUpObservable.add(function () { if(x > -30 && z > -30){
                    camera.position.x -= 1;
					x--;
					//التحكم فى الصوت عند الانتقال غربا
					px--;
					}
                });
    advancedTexture.addControl(button); 


//5
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
	 
	button.onPointerUpObservable.add(function () {
                    camera.rotation.x += 0.1;
                });
    advancedTexture.addControl(button); 



   //8
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
                          if(e.keyCode == 38 && z <= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					//التحرك إلى الشمال في المنطقة 10
					  if(e.keyCode == 38 && z <= 69 && z >= -70 &&  x <= 70 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 /*
					//الانتقال إلى الشمال في المنطقة 1
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 
					 //الانتقال إلى الشمال في المنطقة 2
					 if(e.keyCode == 38 && z <= 20 && z >= -19 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 
					 //الانتقال إلى الشمال في المنطقة 3
					 if(e.keyCode == 38 && z <= 70 && z >= 29 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 
					 //الانتقال إلى الشمال في المنطقة 4
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 
					 //الانتقال إلى الشمال في المنطقة 5
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 //الانتقال إلى الشمال في المنطقة 6
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 //الانتقال إلى الشمال في المنطقة 7
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 
					  //الانتقال إلى الشمال في المنطقة 8
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					  //الانتقال إلى الشمال في المنطقة 9
					 if(e.keyCode == 38 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z += 1;
					 z++;
					pz++;
					 }
					 */
					//الانتقال إلى الجنوب باستخدام لوحة المفاتيح
					//الانتقال إلى الجنوب في المنطقة 11
                            if(e.keyCode == 40 && z >= -225 && x <=10 && x >= -10){
                        camera.position.z -= 1;
						z--;
						pz--;
						
						}
						
					//الانتقال إلى الجنوب في المنطقة 10
					  if(e.keyCode == 40 && z <= 70 && z >= -69 &&  x <= 70 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					/*
					//الانتقال إلى الجنوب في المنطقة 1
					  if(e.keyCode == 40 && z <= -30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					 //الانتقال إلى الجنوب في المنطقة 2
					  if(e.keyCode == 40 && z <= 20 && z >= -19 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 3
					  if(e.keyCode == 40 && z <= 71 && z >= 29 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 4
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 5
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 6
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 7
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 
					//الانتقال إلى الجنوب في المنطقة 8
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 //الانتقال إلى الجنوب في المنطقة 9
					  if(e.keyCode == 40 && z <= 30 && z >= -69 &&  x <= 120 &&  x >= -70 ) {
                    camera.position.z -= 1;
					 z--;
					pz--;
					 }
					 */
					 
					//الانتقال إلى الشرق باستخدام لوحة المفاتيح
					
					//الانتقال إلى الشرق في المنطقة 10
					if(e.keyCode == 39   &&  x >= -70 && x <= 69 && z >= -70 && z <= 70){
                        camera.position.x += 1;
						x++;
						px++;
						}
					
					//الانتقال إلى الشرق في المنطقة 1
					if(e.keyCode == 39   && x >= 70 && x <=119  && z >= -70 && z <= -31 ){
                        camera.position.x += 1;
						x++;
						px++;
						}
					
					//الانتقال إلى الشرق في المنطقة 2
					if(e.keyCode == 39   && x >= 70 && x <=119  && z >= -20 && z <= 19 ){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 3
					if(e.keyCode == 39   && x >= 70 && x <=119  && z >= -30 && z <= 69 ){
                        camera.position.x += 1;
						x++;
						px++;
						}
					/*		
					//الانتقال إلى الشرق في المنطقة 4
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 5
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 6
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 7
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 8
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الشرق في المنطقة 9
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						*/
					
						
					//الانتقال إلى الغرب باستخدام لوحة المفاتيح
					//الانتقال إلى الغرب في المنطق 10
					if(e.keyCode == 37   && x >= -69 && x <= 70){
                        camera.position.x -= 1;
						x--;
						px--;
						
						}
					
					//الانتقال إلى الغرب في المنطقة 1
						/*
					if(e.keyCode == 39   && x >= 71 && x <= 120){
                        camera.position.x -= 1;
						x--;
						px--;
						}
						
							
					//الانتقال إلى الغرب في المنطقة 2
					
					if(e.keyCode == 39   && x >= 71 && x <= 120){
                        camera.position.x -= 1;
						x--;
						px--;
						}
					
					//الانتقال إلى الغرب في المنطقة 3
					
					if(e.keyCode == 39   && x >= 71 && x <= 120){
                        camera.position.x -= 1;
						x--;
						px--;
						}
					
					//الانتقال إلى الغرب في المنطقة 4
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الغرب في المنطقة 5
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الغرب في المنطقة 6
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الغرب في المنطقة 7
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الغرب في المنطقة 8
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
						
					//الانتقال إلى الغرب في المنطقة 9
					
					if(e.keyCode == 39   && x <= 119 && z >= -70){
                        camera.position.x += 1;
						x++;
						px++;
						}
					
						
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
		/*
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
		
	
		