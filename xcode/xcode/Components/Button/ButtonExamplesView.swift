
import SwiftUI

struct ButtonExamplesView: View {
    var body: some View {
        VStack(spacing: 30) {
            Button(role: .cancel, action: {
                print("Default Button tapped!")
            }) {
                Label("Sign In", systemImage: "arrow.up")
            }
            .buttonStyle(.borderless)
            
            Button(action: {
                print("Styled Button tapped!")
            }) {
                Text("Styled Button")
                    .font(.title)
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            
            Button(action: {
                print("Image Button tapped!")
            }) {
                Image(systemName: "hand.thumbsup.fill")
                    .font(.largeTitle)
                    .foregroundColor(.green)
            }
        }
    }
}

struct ButtonExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ButtonExamplesView()
    }
}
