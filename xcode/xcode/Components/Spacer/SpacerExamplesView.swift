
import SwiftUI

struct SpacerExamplesView: View {
    var body: some View {
        List {
            VStack {
                Text("Top")
                Spacer()
                Text("Bottom")
            }
            .frame(height: 200)
            .border(Color.gray)
            .navigationTitle("Vertical Spacer")
            
            HStack {
                Text("Left")
                Spacer()
                Text("Right")
            }
            .frame(width: 200)
            .border(Color.gray)
            .navigationTitle("Horizontal Spacer")
        }
        .navigationTitle("Spacer Examples")
    }
}

struct SpacerExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        SpacerExamplesView()
    }
}
