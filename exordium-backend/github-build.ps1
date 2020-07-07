ng build -- --prod --aot --output-path ../docs/;
cd ../docs/;
echo clients.exordium.org > CNAME;
cd ../exordium-backend/;