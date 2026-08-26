from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# ⚠️ Configure ton email ici
SMTP_SERVER = "smtp.gmail.com"     # Exemple : Gmail
SMTP_PORT = 587
SMTP_USER = "tonemail@gmail.com"   # ton adresse email
SMTP_PASS = "ton_mot_de_passe_app" # mot de passe ou mot de passe d'application

@app.route("/send-order", methods=["POST"])
def send_order():
    try:
        data = request.form.to_dict()

        # Construire le message
        subject = f"Nouvelle commande de {data.get('name')}"
        body = f"""
        📦 Nouvelle commande reçue :

        Nom: {data.get('name')}
        Prénom: {data.get('nickname')}
        Email: {data.get('email')}
        Numéro: {data.get('number')}
        Produit: {data.get('product')}
        Quantité: {data.get('quantity')}
        Détails: {data.get('details')}
        """

        msg = MIMEText(body, "plain", "utf-8")
        msg["Subject"] = subject
        msg["From"] = SMTP_USER
        msg["To"] = SMTP_USER  # tu peux mettre une autre adresse ici

        # Envoyer l'email via SMTP
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.sendmail(SMTP_USER, SMTP_USER, msg.as_string())

        return jsonify({"success": True, "message": "Commande envoyée avec succès ✅"})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)